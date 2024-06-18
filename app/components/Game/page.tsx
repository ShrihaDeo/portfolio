'use client'
import Head from 'next/head';
import { useEffect, useState, useRef } from 'react';

export default function Home() {
  const canvasRef = useRef<HTMLCanvasElement>(null); // Explicitly define canvasRef type
  const [visibleLetters, setVisibleLetters] = useState<number>(0); // Explicitly define visibleLetters type
  const [waveAnimation, setWaveAnimation] = useState<boolean>(false); // Explicitly define waveAnimation type

  useEffect(() => {
    const interval = setInterval(() => {
      setVisibleLetters((prev) => prev + 1);
    }, 100);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    // Start waving animation when all letters are visible
    if (visibleLetters === 'Welcome to My Portfolio :)'.length) {
      setWaveAnimation(true);
      startSnakeGame();
    }
  }, [visibleLetters]);

  const startSnakeGame = () => {
    const canvas = canvasRef.current;
    if (!canvas) return; // Check if canvas reference is available
    const ctx = canvas.getContext('2d');

    const snakeSize: number = 10;
    const snakeColor: string = 'green';
    let snake: { x: number; y: number }[] = [{ x: 100, y: 100 }]; // Initial snake position
    let food: { x: number; y: number } = { x: 200, y: 200 }; // Initial food position
    let dx: number = snakeSize;
    let dy: number = 0;

    const drawSnake = () => {
        if (ctx != null){
            ctx.fillStyle = snakeColor;
            snake.forEach((segment) => {
              ctx.fillRect(segment.x, segment.y, snakeSize, snakeSize);
            });
        }
    
    };

    const drawFood = () => {
        if (ctx != null)
            {
                ctx.fillStyle = 'red';
      ctx.fillRect(food.x, food.y, snakeSize, snakeSize);
            }
      
    };

    const moveSnake = () => {
      const head = { x: snake[0].x + dx, y: snake[0].y + dy };

      // Check if snake eats food
      if (head.x === food.x && head.y === food.y) {
        snake.unshift(head);
        generateFood();
      } else {
        snake.pop();
        snake.unshift(head);
      }

      checkCollision();
    };

    const generateFood = () => {
      const randomX = Math.floor(Math.random() * (canvas.width / snakeSize)) * snakeSize;
      const randomY = Math.floor(Math.random() * (canvas.height / snakeSize)) * snakeSize;
      food = { x: randomX, y: randomY };
    };

    const checkCollision = () => {
      const head = snake[0];

      // Check if snake hits canvas boundaries
      if (head.x < 0 || head.x >= canvas.width || head.y < 0 || head.y >= canvas.height) {
        gameOver();
        return;
      }

      // Check if snake hits itself
      for (let i = 1; i < snake.length; i++) {
        if (head.x === snake[i].x && head.y === snake[i].y) {
          gameOver();
          return;
        }
      }
    };

    const gameOver = () => {
      clearInterval(gameInterval);
      alert('Game Over! Refresh the page to play again.');
    };

    const gameLoop = () => {
        if (ctx != null)
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      moveSnake();
      drawSnake();
      drawFood();
    };

    generateFood(); // Generate initial food
    const gameInterval = setInterval(gameLoop, 100); // Game loop with 100ms interval
  };

  return (
    <div
      style={{
        background: 'linear-gradient(to right, #fbc2eb, #a6c1ee)',
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        position: 'relative',
      }}
    >        

      {/* Canvas for snake game */}
      <canvas ref={canvasRef} width={800} height={600} style={{ border: '2px solid black' }} />
    </div>
  );
}
