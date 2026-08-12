import React, { useEffect, useState } from 'react';
import quotes from '../data/quotes';

const MotivationQuote = () => {
  const [quote, setQuote] = useState("");

  useEffect(() => {
    const randomQuote = quotes[Math.floor(Math.random() * quotes.length)];
    setQuote(randomQuote);
  }, []);

  return (
    <div className="motivation-quote">
      <p className="text-lg leading-relaxed">💭 "{quote}"</p>
    </div>
  );
};

export default MotivationQuote;