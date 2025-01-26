import React, { useState } from 'react';

const QuoteGenerator = () => {
  // Array of sample quotes
  const quotes = [
    "The greatest glory in living lies not in never falling, but in rising every time we fall. - Nelson Mandela",
    "The way to get started is to quit talking and begin doing. - Walt Disney",
    "Life is what happens when you're busy making other plans. - John Lennon",
    "Your time is limited, don't waste it living someone else's life. - Steve Jobs",
    "If life were predictable it would cease to be life, and be without flavor. - Eleanor Roosevelt"
  ];

  // State to hold the current quote
  const [quote, setQuote] = useState(quotes[0]);

  // Function to generate a new random quote
  const generateQuote = () => {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    setQuote(quotes[randomIndex]);
  };

  return (
    <div style={styles.container}>
      <h1 style={styles.title}>Random Quote Generator</h1>
      <p style={styles.quote}>{quote}</p>
      <button style={styles.button} onClick={generateQuote}>
        Get New Quote
      </button>
    </div>
  );
};

// Styling for the component
const styles = {
  container: {
    textAlign: 'center',
    padding: '20px',
    fontFamily: 'Arial, sans-serif'
  },
  title: {
    fontSize: '24px',
    marginBottom: '20px'
  },
  quote: {
    fontSize: '18px',
    margin: '20px 0',
    fontStyle: 'italic',
    color: '#555'
  },
  button: {
    backgroundColor: '#007BFF',
    color: 'white',
    border: 'none',
    padding: '10px 20px',
    cursor: 'pointer',
    fontSize: '16px',
    borderRadius: '5px'
  }
};

export default QuoteGenerator;
