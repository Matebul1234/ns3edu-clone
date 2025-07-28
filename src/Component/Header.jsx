import React from 'react'
import '../assets/css/Header.css'

const Header = () => {
  return (
    <div><header>
    <div className="contact2"> <a href="#8800011193"></a> 📞 +91-88000111XX </div>
    <div className="email">info@edu477</div>
    <div className="end-header">
      <div className="internship-link">
        <p> Summer Internship </p>
        {/* <!-- <p>| Corporate Traning</p> --> */}
      </div>
      <div className="traning">
        <p> Corporate Traning </p>
        <img src="assests/logos.png" alt=""/>
      </div>
    </div>
  </header>
  <nav>
    <div className="logo">
      <img src="assests/Ns3Edu logo.svg" alt="logo" />
    </div>

    <div className="course">𓃑 All Course </div>

    <div className="nav-center">
      <ul className="icon">
        <li className="about-popup-container">
          <a href="#">About</a>
          <div className="about-popup">
            <a className="a1" style={{ background: 'transparent' , border: 'none'}} href="about.html">About NS3EDU</a>
            <a className="a1" style={{background: 'transparent', border: 'none'}}>Our Mission</a>
           
          </div>
        </li>

        <li><a href="placements.html">Placements</a></li>
        <li><a href="#">Learn & Earn</a></li>
        <li><a href="#">Resources </a></li>
      </ul>
    </div>

    <div className="whtalogo">
      <img src="assests/whatsapp.png" alt="WhatsApp" />
    </div>
    <div className="contact"><a href="contact.html" style={{color: 'white', textDecoration: 'none', width: '100%',height: '100%'}}>Contact</a></div>
  </nav>

  <div className="banner">
    <div className="banner-track">
      <div className="moving-line">𓃑 SUMMER INTERNSHIP 2025 | REAL CORPORATE EXPOSURE | INDUSTRIAL GRADED PROJECT | HANDS
        ON EXPERIENCE </div>
      <div className="moving-line">𓃑 SUMMER INTERNSHIP 2025 | REAL CORPORATE EXPOSURE | INDUSTRIAL GRADED PROJECT | HANDS
        ON EXPERIENCE </div>
    </div>
  </div></div>
  )
}

export default Header