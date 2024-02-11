import React from 'react'
import Upwork from '../../collateral/Socials/upwork-tile.svg'
import Facebook from '../../collateral/Socials/facebook-tile.svg'
import Github from '../../collateral/Socials/github-tile.svg'
import Linkedin from '../../collateral/Socials/linkedin-tile.svg'

const Socials = () => {
  return (
    <div className="home-social flex">
        {/* facebook */}
        <a className="home-social-link" href='#.' target='_blank'>
            <img src={ Upwork } className="social-image" alt=""/>
        </a>
        {/* linkedin */}
        <a className="home-social-link" href='#.' target='_blank'>
            <img src={ Github } className="social-image" alt=""/>
        </a>
        {/* instagram */}
        <a className="home-social-link" href='#.' target='_blank'>
            <img src={ Linkedin } className="social-image" alt=""/>
        </a>
        {/* upwork */}
        <a className="home-social-link" href='#.' target='_blank'>
            <img src={ Facebook } className="social-image" alt=""/>
        </a>
        {/* github */}
        <a className="home-social-link" href='#.' target='_blank'>
            <img src={ Upwork } className="social-image" alt=""/>
        </a>
    </div>
  )
}

export default Socials