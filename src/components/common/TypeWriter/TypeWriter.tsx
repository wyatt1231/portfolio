import React, { useState, useEffect } from 'react';

interface TypeWriterProps {
  text: string;
  delay?: number;
  className?: string;
  onComplete?: () => void;
}

const TypeWriter: React.FC<TypeWriterProps> = ({
  text,
  delay = 100,
  className = '',
  onComplete
}) => {
  const [displayedText, setDisplayedText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [showCursor, setShowCursor] = useState(true);

  useEffect(() => {
    // Cursor blinking effect
    const cursorInterval = setInterval(() => {
      setShowCursor(prev => !prev);
    }, 500);

    return () => clearInterval(cursorInterval);
  }, []);

  useEffect(() => {
    if (currentIndex < text.length) {
      const timeout = setTimeout(() => {
        setDisplayedText(text.slice(0, currentIndex + 1));
        setCurrentIndex(currentIndex + 1);
      }, delay);

      return () => clearTimeout(timeout);
    } else if (onComplete) {
      onComplete();
    }
  }, [currentIndex, text, delay, onComplete]);

  return (
    <span className={`typewriter ${className}`}>
      {displayedText}
      <span
        className={`typewriter__cursor ${showCursor ? 'typewriter__cursor--visible' : ''}`}
      >
        |
      </span>
    </span>
  );
};

export default TypeWriter;