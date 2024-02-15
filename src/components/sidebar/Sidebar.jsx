import React from 'react';
import "./sidebar.css";
import logo from "../../collateral/boy.png"

const Sidebar = () => {
  return (
    <div className='sidebar'>
      <div className='aside-sidebar'>
        <a href='#home' className='sidebar-logo'><img src={logo} alt=""/></a>

        <nav className='navbar'>
          <div className="navbar-menu">
            <ul className="navbar-list">
              <li className="navbar-items">
                <a className="navbar-link" href='#home'>
                  <i className='fi fi-sr-home'></i>
                </a>
              </li>
              <li className="navbar-items">
                <a className="navbar-link" href='#projects'>
                  <i className='fi fi-sr-briefcase'></i>
                </a>
              </li>
              <li className="navbar-items">
                <a className="navbar-link" href='#testimonial'>
                  <i className='fi fi-sr-comment-quote'></i>
                </a>
              </li>
              <li className="navbar-items">
                <a className="navbar-link" href='#blogs'>
                  <i className='fi fi-sr-bulb'></i>
                </a>
              </li>
              <li className="navbar-items">
                <a className="navbar-link" href='#contacts'>
                  <i className='fi fi-sr-envelope'></i>
                </a>
              </li>
            </ul>
          </div>  
        </nav>

        <div className="navbar-footer">
          <span className="copyright">&copy; 2020-2024</span>
        </div>
      </div>
    </div>
  )
}

export default Sidebar