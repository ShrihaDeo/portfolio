// pages/index.tsx
'use client'
import { useState } from 'react';
import Head from 'next/head';

const Home = () => {
  const [targetNumber, setTargetNumber] = useState<number>(Math.floor(Math.random() * 100) + 1);
  const [guess, setGuess] = useState<number | null>(null);
  const [message, setMessage] = useState<string>('');
  const [attempts, setAttempts] = useState<number>(0);

  const handleGuess = () => {
    if (guess === null) {
      setMessage('Please enter a number.');
      return;
    }

    setAttempts(attempts + 1);

    if (guess < targetNumber) {
      setMessage('Too low! Try again.');
    } else if (guess > targetNumber) {
      setMessage('Too high! Try again.');
    } else {
      setMessage(`Congratulations! You guessed the number in ${attempts + 1} attempts.`);
    }
  };

  const handleReset = () => {
    setTargetNumber(Math.floor(Math.random() * 100) + 1);
    setGuess(null);
    setMessage('');
    setAttempts(0);
  };

  return (
    <div style={styles.container}>
      <Head>
        <title>Guess the Number Game</title>
      </Head>
      <h1 style={styles.title}>Guess the Number</h1>
      <p style={styles.instructions}>Guess a number between 1 and 100</p>
      <input
        type="number"
        value={guess ?? ''}
        onChange={(e) => setGuess(Number(e.target.value))}
        style={styles.input}
      />
      <button onClick={handleGuess} style={styles.button}>Guess</button>
      <button onClick={handleReset} style={styles.resetButton}>Reset</button>
      <p style={styles.message}>{message}</p>
    </div>
  );
};

const styles: { [key: string]: React.CSSProperties } = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    height: '100vh',
    background: 'linear-gradient(to right, #a1c4fd, #fbc2eb)',
    padding: '0 20px',
    textAlign: 'center',
  },
  title: {
    fontSize: '2.5rem',
    color: '#333',
    marginBottom: '1rem',
  },
  instructions: {
    fontSize: '1.2rem',
    color: '#666',
    marginBottom: '1rem',
  },
  input: {
    padding: '10px',
    fontSize: '1rem',
    marginBottom: '1rem',
    border: '2px solid #ccc',
    borderRadius: '5px',
    textAlign: 'center',
    color: 'black', // Black text color for input text
  },
  button: {
    padding: '10px 20px',
    fontSize: '1rem',
    backgroundColor: '#0070f3',
    color: '#fff',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
    marginBottom: '1rem',
  },
  resetButton: {
    padding: '10px 20px',
    fontSize: '1rem',
    backgroundColor: '#e53e3e',
    color: '#fff',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
    marginBottom: '1rem',
  },
  message: {
    fontSize: '1.2rem',
    color: '#333',
    marginTop: '1rem',
  },
};


export default Home;
