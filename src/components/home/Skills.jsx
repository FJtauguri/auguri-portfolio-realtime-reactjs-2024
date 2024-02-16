import React from 'react'
import TypewriterWithDelay from '../Effects/TypewriterWithDelay'


const Skills = () => {
  return (
    <div className="home-education">
      <ul className="home-education-skills">
        <li className="skills">
          <TypewriterWithDelay text="Full Stack Web Developer" speed={100} delay={500} />
        </li>
        <li className="skills">
          <TypewriterWithDelay text="Technical Support" speed={100} delay={3000} />
        </li>
        <li className="skills">
          <TypewriterWithDelay text="UI/UX Designer" speed={100} delay={5000} />
        </li>
        <li className="skills">
          <TypewriterWithDelay text="Graphic Designer" speed={100} delay={7000} />
        </li>
        <li className="skills">
          <TypewriterWithDelay text="..." speed={100} delay={9000} />
        </li>
      </ul>
    </div>
  )
}

export default Skills