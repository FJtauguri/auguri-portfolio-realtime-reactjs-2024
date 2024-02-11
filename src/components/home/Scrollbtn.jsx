import React from 'react'

const Scrollbtn = () => {
  return (
    <div className="home-scroll-down">
        <a className="home-scroll-wrap" href='#projects'>
            <span className="home-scroll-mouse">
                <span className="home-scroll-wheel">
                  <i className='fi fi-sr-mouse'></i>
                </span>
            </span>
        </a>
    </div>
  )
}

export default Scrollbtn