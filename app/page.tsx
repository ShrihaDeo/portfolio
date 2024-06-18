'use client'
import Head from 'next/head';
import { useEffect, useState } from 'react';
import styles from './styles/Home.module.css';

export default function Home() {
  const [visibleLetters, setVisibleLetters] = useState(0);
  const [waveAnimation, setWaveAnimation] = useState(false); // State for waving animation

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
    }
  }, [visibleLetters]);

  const handleClick = () => {
    window.location.href = '/directory'; // Redirect to /another-page when clicked
  };

  return (
    <div
      className={styles.container}
      style={{
        background: 'linear-gradient(to right, #fbc2eb, #a6c1ee)',
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}
      onClick={handleClick} // Attach onClick event to the entire page
    >
      <h1
        className={`${styles.waveText} ${waveAnimation ? styles.waveAnimation : ''}`}
        style={{ lineHeight: '1.5' }} // Adjust line height here
      >
        {Array.from('Welcome to My Portfolio :)').map((letter, index) => (
          <span
            key={index}
            className={styles.letter}
            style={{ animationDelay: `${index * 0.1}s` }}
          >
            {index <= visibleLetters ? letter : '\u00A0'}
          </span>
        ))}
      </h1>
    </div>
  );
}