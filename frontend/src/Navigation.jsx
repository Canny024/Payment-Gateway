import React from 'react'


function Navigation() {

    return (
        <div>
        <nav className="navbar">
       
        <div ><p className="logo">TEDx</p></div>
    
        <ul className="nav-links">
       
          <input type={"checkbox"} id="checkbox_toggle" />
          <label htmlFor="checkbox_toggle" className="hamburger">&#9776;</label>
         
          <div className="menu">
            <li><a href="https://www.ted.com/tedx/events/22605">Home</a></li>
            <li><a href="https://www.ted.com/about/our-organization">About</a></li>
            <li><a href="https://www.ted.com/talks">Watch</a></li>
            <li><a href="https://www.ted.com/topics">Discover</a></li>
          </div>
        </ul>
      </nav>
      <div className="line"></div>
      </div>
    

    )
}

export default Navigation