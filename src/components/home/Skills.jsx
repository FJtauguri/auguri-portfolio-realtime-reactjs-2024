import React, { useState, useEffect } from 'react'


const Typewriter = ({ text, speed }) => {
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
  
    return <>{displayText}</>;
  };
  
  const TypewriterWithDelay = ({ text, speed, delay }) => {
    const [isTyping, setIsTyping] = useState(false);
  
    useEffect(() => {
      const timeout = setTimeout(() => {
        setIsTyping(true);
      }, delay);
  
      return () => clearTimeout(timeout);
    }, [delay]);
  
    return isTyping ? <Typewriter text={text} speed={speed} /> : null;
  };

const Skills = () => {
    return (
        <div className="home-education">
            <ul className="home-education-skills">
                <li className="skills">
                <TypewriterWithDelay text="Full Stack Web Developer" speed={100} delay={500}/>
                </li>
                <li className="skills">
                <TypewriterWithDelay text="Technical Support" speed={100} delay={3000}/>
                </li>
                <li className="skills">
                <TypewriterWithDelay text="UI/UX Designer" speed={100} delay={5000}/>
                </li>
                <li className="skills">
                <TypewriterWithDelay text="Graphic Designer" speed={100} delay={7000}/>
                </li>
                <li className="skills">
                <TypewriterWithDelay text="..." speed={100} delay={9000}/>
                </li>
            </ul>
        </div>
    )
}

export default Skills