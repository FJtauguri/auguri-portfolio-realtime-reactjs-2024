import React from 'react';
import "./home.css";
import ME from '../../collateral/boy.png'
import Socials from './Socials'
import Scrollbtn from './Scrollbtn';
import Skills from './Skills';

const Home = () => {
  return (
    <section className="home section flex" id='home'>
      <Skills />
      <div className="introduction">
        <img className="home-image" src={ME} alt=''/>
        <h1 className="home-name grid">
        AUGURI | MAX
          {/* <span className="home-name-sub">AUGURI | MAX</span> */}
        </h1>
        {/* <div className="home-education">
          A Full Stack Web Developer
        </div> */}

        <Socials />

        <a className="btn-primary" href='#contact'>Hire me</a>

        <Scrollbtn />

      </div>
    </section>
  )
}

export default Home