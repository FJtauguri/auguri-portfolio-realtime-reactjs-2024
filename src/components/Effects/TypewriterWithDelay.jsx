import React, { useState, useEffect } from 'react'

const Typewriter = ({ text, speed, style, className}) => {
  const [displayText, setDisplayText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      if (currentIndex < text.length) {
        setDisplayText(prevText => prevText + text[currentIndex]);
        setCurrentIndex(prevIndex => prevIndex + 1);
      } else {
        clearInterval(interval);
      }
    }, speed);

    return () => clearInterval(interval);
  }, [currentIndex, text, speed]);

  return <p style={style} className={className}>{displayText}</p>
  // return <>{displayText}</>;
};

const TypewriterWithDelay = ({ text, speed, delay, className}) => {
  const [isTyping, setIsTyping] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setIsTyping(true);
    }, delay);

    return () => clearTimeout(timeout);
  }, [delay]);

  return isTyping ? <Typewriter text={text} speed={speed} className={className}/> : null;
};

export default TypewriterWithDelay