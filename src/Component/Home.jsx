import React from 'react'
// import '."/image/css/Home.css'
import '../assets/css/Home.css'
// import Log from "/vite.svg'
import '../assets/script/Script'
import Footer from './Footer'
import { Link } from 'react-router-dom';
const Home = () => {
    return (
        <>
            <header>
                {/* <img src={Log} alt=""/ /> */}
                <div className="contact2">
                    <a href="#8800011193"></a> 📞 +91-5478204
                </div>
                <div className="email">info@edu477</div>
                <div className="end-header">
                    <div className="internship-link">
                        <p>Summer Internship</p>
                    </div>
                    <div className="training">
                        <p>Corporate Training</p>
                        <img src="/image/logos.png" alt="Corporate Training Logos" />
                    </div>
                </div>
            </header>
            <nav>
                <div className="logo">
                    <img src="/image/Ns3Edu-logo.svg" alt="NS3EDU Logo" />
                </div>

                <div className="course">𓃑 All Courses </div>

                <div className="nav-center">
                    <ul className="icon">
                        <li className="about-popup-container">
                            <a href="#">About</a>
                            <div className="about-popup">
                                <a className="a1" style={{ background: 'transparent', border: 'none' }} href="about.html">About NS3EDU</a>
                                <a className="a1" style={{ background: 'transparent', border: 'none' }}>Our Mission</a>
                            </div>
                        </li>
                        <li><a href="placements.html">Placements</a></li>
                        <li><a href="#">Learn & Earn</a></li>
                        <li><a href="#">Resources</a></li>
                    </ul>
                </div>

                <div className="whtalogo">
                    <img src="/image/whatsapp.png" alt="WhatsApp" />
                </div>
                <div className="contact">
 <Link 
    to="/Contact" 
    style={{ color: 'white', textDecoration: 'none', width: '100%', height: '100%' }}
  >
    Contact
  </Link>                </div>
            </nav>

            <div className="banner">
                <div className="banner-track">
                    <div className="moving-line">𓃑 SUMMER INTERNSHIP 2025 | REAL CORPORATE EXPOSURE | INDUSTRIAL GRADED PROJECT | HANDS ON EXPERIENCE</div>
                    <div className="moving-line">𓃑 SUMMER INTERNSHIP 2025 | REAL CORPORATE EXPOSURE | INDUSTRIAL GRADED PROJECT | HANDS ON EXPERIENCE</div>
                </div>
            </div>

            <main>
                <div className="container">
                    <div className="leftcontainer">
                        <h1 id="heading1">Blending Knowledge<br />
                            with Practical <span className="curved-wrapper">Experience
                                <svg viewBox="0 0 200 10" preserveAspectRatio="none">
                                    <path d="M0,9 Q100,2 200,0" />
                                </svg>
                            </span>
                        </h1>
                        <ul className="points">
                            <li>🟢 Free for physically handcraft</li>
                            <li>🟢 Course certificate</li>
                            <li>🟢 Easy to enroll courses</li>
                        </ul>
                    </div>
                    <div className="right-container">
                        <div className="carousel-container">
                            <img src="/image/woman1.jpg" className="carousel-img img1" alt="Student 1" />
                            <img src="/image/woman2.jpg" className="carousel-img img2" alt="Student 2" />
                            <img src="/image/woman6.jpg" className="carousel-img img3" alt="Student 3" />
                            <img src="/image/woman4.jpg" className="carousel-img img4" alt="Student 4" />
                        </div>

                        <div className="avatar-container">
                            <div className="avatars">
                                <div className="avatar1"><img src="/image/avatar.png" alt="Avatar 1" /></div>
                                <div className="avatar2"><img src="/image/avatar2.png" alt="Avatar 2" /></div>
                                <div className="avatar3"><img src="/image/avatar3.png" alt="Avatar 3" /></div>
                                <div className="avatar4"><img src="/image/avatar4.png" alt="Avatar 4" /></div>
                                <div className="add-btn">+</div>
                            </div>
                            <h3>More than <span style={{ color: 'green' }}>12,600+</span> students <br /> enrolled around the world</h3>
                        </div>
                        <div className="carousel2-container">
                            <img src="/image/woman5.jpg" className="carousel-img2 img1" alt="Student 5" />
                            <img src="/image/man1.png" className="carousel-img2 img2" alt="Student 6" />
                            <img src="/image/woman3.jpg" className="carousel-img2 img3" alt="Student 7" />
                            <img src="/image/man2.png" className="carousel-img2 img4" alt="Student 8" />
                        </div>
                    </div>
                </div>

                <div className="count">
                    <div className="domestic-S">
                        <img src="/image/profile.png" alt="Domestic Students" />
                        <h2 className="counter" data-target="10000" data-suffix="+">0</h2>
                        <h2 className="data">Domestic Students</h2>
                    </div>
                    <div className="international-S">
                        <img src="/image/I-students.png" alt="International Students" />
                        <h2 className="counter" data-target="5000" data-suffix="+">0</h2>
                        <h2 className="data">International Students</h2>
                    </div>
                    <div className="p-students">
                        <img src="/image/S-placed.png" alt="Students Placed" />
                        <h2 className="counter" data-target="5000" data-suffix="+">0</h2>
                        <h2 className="data">Students Placements</h2>
                    </div>
                    <div className="program-C">
                        <img src="/image/premium_course1.png" alt="Collaboration Programs" />
                        <h2 className="counter" data-target="1000" data-suffix="+">0</h2>
                        <h2 className="data">Collaboration Programs</h2>
                    </div>
                </div>

                <div className="container2">
                    <div className="right-container2">
                        <img src="/image/ccno.png" alt="IT Training" />
                    </div>
                    <div className="left-container2">
                        <h2 className="heading2">Best IT Training Institute in <span className="curved-wrapper">India
                            <svg viewBox="0 0 200 10" preserveAspectRatio="none">
                                <path d="M0,9 Q100,2 200,0" />
                            </svg>
                        </span></h2>
                        <p className="para1">
                            Welcome to NS3EDU, where we're dedicated to crafting Cyber Security experts <br />through
                            top-notch training and certification programs. Our courses cover everything <br />from
                            fundamental to advanced levels, ensuring you gain comprehensive knowledge <br /> and
                            skills. Plus, our certification validates your expertise, making you stand out in
                            the industry.
                        </p>
                        <p>
                            <span className="para2">
                                NS3Edu is an educational institution that focuses on providing comprehensive courses like Cloud Computing,
                                DevOps, CCNA, CCIE, CCNP, Cyber Security, Ethical Hacking, Full Stack Development and more.
                            </span>
                        </p>
                    </div>
                </div>

                <div className="container3">
                    <h2 id="container3-heading">Explore <br /> <span className="curved-wrapper">Our
                        <svg viewBox="0 0 200 10" preserveAspectRatio="none">
                            <path d="M0,9 Q100,2 200,0" />
                        </svg>
                    </span> Master Program</h2>

                    <div className="filters">
                        <button className="active" data-filter="all">View All</button>
                        <button data-filter="it">IT Industries</button>
                        <button data-filter="cloud">Cloud Computing</button>
                        <button data-filter="cyber">Cyber Security</button>
                    </div>

                    <div className="cards-container">
                        <div className="card" data-category="cloud">
                            <div className="img"><img src="/image/course1.png" alt="Cloud Computing Thumbnail" /></div>
                            <div className="card-content">
                                <p>On Demand</p>
                                <h4>Advanced Certification in Cloud Computing</h4>
                                <p>⭐⭐⭐⭐ 4.9(1198)</p>
                            </div>
                        </div>

                        <div className="card" data-category="it">
                            <div className="img"><img src="/image/course2.webp" alt="IT" /></div>
                            <div className="card-content">
                                <p>On Demand</p>
                                <h4>Advanced Certification in Palo Network Security</h4>
                                <p>⭐⭐⭐⭐ 4.8(990)</p>
                            </div>
                        </div>

                        <div className="card" data-category="cloud">
                            <div className="img"><img src="/image/course3.webp" alt="Cloud" /></div>
                            <div className="card-content">
                                <p>On Demand</p>
                                <h4>Advanced Certification in DevOps</h4>
                                <p>⭐⭐⭐⭐ 4.9(1569)</p>
                            </div>
                        </div>

                        <div className="card" data-category="it">
                            <div className="img"><img src="/image/course4.webp" alt="Cyber Security Thumbnail" /></div>
                            <div className="card-content">
                                <p>On Demand</p>
                                <h4>Advanced Certification in Network Security (Palo Alto + Cisco ASA + FortiGate + FTD)</h4>
                                <p>⭐⭐⭐⭐ 4.8(1430)</p>
                            </div>
                        </div>

                        <div className="card" data-category="it">
                            <div className="img"><img src="/image/course5.webp" alt="IT" /></div>
                            <div className="card-content">
                                <p>On Demand</p>
                                <h4>Advanced Certification in Network Security With CCNP + CCIE (SEC)</h4>
                                <p>⭐⭐⭐⭐ 4.8(1654)</p>
                            </div>
                        </div>

                        <div className="card" data-category="it">
                            <div className="img"><img src="/image/course6.webp" alt="Cyber Security Thumbnail" /></div>
                            <div className="card-content">
                                <p>On Demand</p>
                                <h4>Advanced Certification in CCIE (Enterprise Infrastructure)</h4>
                                <p>⭐⭐⭐⭐ 4.9(1498)</p>
                            </div>
                        </div>

                        <div className="card" data-category="cyber">
                            <div className="img"><img src="/image/course7.webp" alt="Cyber Security" /></div>
                            <div className="card-content">
                                <p>On Demand</p>
                                <h4>Advanced Certification In Cyber Security and Ethical Hacking</h4>
                                <p>⭐⭐⭐⭐ 4.9(1621)</p>
                            </div>
                        </div>

                        <div className="card" data-category="cyber">
                            <div className="img"><img src="/image/course8.webp" alt="Cyber Security" /></div>
                            <div className="card-content">
                                <p>On Demand</p>
                                <h4>Advanced Certification in Ethical Hacking (CEH - V12)</h4>
                                <p>⭐⭐⭐⭐ 4.9(1148)</p>
                            </div>
                        </div>

                        <div className="card" data-category="it">
                            <div className="img"><img src="/image/course9.webp" alt="Cyber Security Thumbnail" /></div>
                            <div className="card-content">
                                <p>On Demand</p>
                                <h4>Advanced Certification in Enterprise Network Infrastructure</h4>
                                <p>⭐⭐⭐⭐ 4.8(1558)</p>
                            </div>
                        </div>

                        <div className="card" data-category="cyber">
                            <div className="img"><img src="/image/course10.webp" alt="IT" /></div>
                            <div className="card-content">
                                <p>On Demand</p>
                                <h4>Advanced Dark Web Navigation Training</h4>
                                <p>⭐⭐⭐⭐ 4.8(1244)</p>
                            </div>
                        </div>
                    </div>
                    <div className="view-more"> View all Courses
                        <div className="all-course">PAGE NOT FOUND</div>
                    </div>
                </div>
                <div className="campusCollb">
    <h2 id="cmh">Campus Collaboration <span className="curved-wrapper">(MOU's)
        <svg viewBox="0 0 200 10" preserveAspectRatio="none">
          {/* <!-- Slope curve: starts low, ends high --> */}
          <path d="M0,9 Q100,2 200,0" />
        </svg>
      </span></h2>


    <div className="campus-carousel-container">
      <button id="prevBtn">&#8592,</button>

      <div className="campus-carousel" id="carousel">
        {/* <!-- 8 Boxes --> */}
        <div className="campus-box">
          <div className="flip-card">
            <div className="flip-inner">
              <div className="flip-front">
                <div className="flipimg">
                  <img src="/image/Baba_Mastnath_University_logo.png" alt="Image 1 Front"
                    style={{width: '50%', paddingLeft:' 60px', paddingBottom: '-20px',}} />
                </div>
                <div className="flip-content">
                  <h2>BABA MASTNATH UNIVERSITY, <br/>Rohtak</h2>
                  <p className="paraflip">MoU sign-between NS3EDU and BABA MASTNATH UNIVERSITY </p>
                </div>
              </div>
              <div className="flip-back">
                <img src="/image/baba_masthnath.jpg" alt="Image 1 Back" />
              </div>
            </div>
          </div>
        </div>
        <div className="campus-box">
          <div className="flip-card">
            <div className="flip-inner">
              <div className="flip-front">
                <div className="flipimg">
                  <img src="/image/sgt.png" alt="Image 2 Front"
                    style={{paddingLeft: '20px', paddingTop: '30px', marginBottom:' 20px'}} />
                </div>
                <div className="flip-content">
                  <h2 style={{marginBottom: '20px'}}>SGT UNIVERSITY, <br/>Gurugram</h2>
                  <p className="paraflip">MoU sign-between NS3EDU and SGT UNIVERSITY </p>
                </div>
              </div>
              <div className="flip-back">
                <img src="/image/SGT_MOU.jpg" alt="Image 2 Back" />
              </div>
            </div>
          </div>
        </div>

        <div className="campus-box">
          <div className="flip-card">
            <div className="flip-inner">
              <div className="flip-front">
                <div className="flipimg">
                  <img src="/image/jagannath.png" alt="Image 3 Front"
                    style={{marginTop: '-60px', marginBottom: '40px',}}/>
                </div>
                <div className="flip-content">
                  <h2 style={{marginTop: '-80px'}}>JAGANNATH UNIVERSITY, <br/>Haryana</h2>
                  <p className="paraflip">MoU sign-between NS3EDU and JAGANNATH UNIVERSITY </p>
                </div>
              </div>
              <div className="flip-back">
                <img src="/image/jagannath_uni.jpg" alt="Image 3 Back" />
              </div>
            </div>
          </div>
        </div>
        <div className="campus-box">
          <div className="flip-card">
            <div className="flip-inner">
              <div className="flip-front">
                <div className="flipimg">
                  <img src="/image/wctm.png" alt="Image 4 Front"
                    style={{width: '50%', marginLeft: '60px', marginBottom: '20px'}} />
                </div>
                <div className="flip-content">
                  <h2 style={{marginBottom:' 20px,'}}>WORLD COLLEGE,<br/>Gurugram</h2>
                  <p className="paraflip">MoU sign-between NS3EDU and WORLD COLLEGE </p>
                </div>
              </div>
              <div className="flip-back">
                <img src="/image/wctm_mou.jpg" alt="Image 4  Back" />
              </div>
            </div>
          </div>
        </div>
        <div className="campus-box">
          <div className="flip-card">
            <div className="flip-inner">
              <div className="flip-front">
                <div className="flipimg">
                  <img src="/image/SURAJ_PG.jpg" alt="Image 5 Front"
                    style={{width: '50%', marginLeft: '60px', marginTop:' 20px', marginBottom: '35px'}} />
                </div>
                <div className="flip-content">
                  <h2>SURAJ PG DEGREE COLLEGE , Gurugram</h2>
                  <p className="paraflip">MoU sign-between NS3EDU and SURAJ PG COLLEGE </p>
                </div>
              </div>
              <div className="flip-back">
                <img src="/image/Suraj_mou.jpg" alt="Image 5 Back" />
              </div>
            </div>
          </div>
        </div>
        <div className="campus-box">
          <div className="flip-card">
            <div className="flip-inner">
              <div className="flip-front">
                <div className="flipimg">
                  <img src="/image/KIIT.jpg" alt="Image 6 Front"
                    style={{width: '40%', marginLeft: '80px', marginTop: '10px', marginBottom: '20px'}} />
                </div>
                <div className="flip-content">
                  <h2>K-IIT COLLEGE OF ENGINEERING, <br/>Gurugram</h2>
                  <p className="paraflip">MoU sign-between NS3EDU and K-IIT COLLEGE </p>
                </div>
              </div>
              <div className="flip-back">
                <img src="/image/KIIT_MOU.jpg" alt="Image 6 Back" />
              </div>
            </div>
          </div>
        </div>
        <div className="campus-box">
          <div className="flip-card">
            <div className="flip-inner">
              <div className="flip-front">
                <div className="flipimg">
                  <img src="/image/KAIM.png" alt="Image 7 Front"
                    style={{width: '50%', marginLeft: '80px', marginBottom:' 20px'}} />
                </div>
                <div className="flip-content">
                  <h2>KEDARNATH AGGARWAL INSTITUTE OF MANAGEMENT, <br/>Charaki Dadari</h2>
                  <p className="paraflip">MoU sign-between NS3EDU and KAIM </p>
                </div>
              </div>
              <div className="flip-back">
                <img src="/image/KAIM_MOU.jpg" alt="Image 7 Back" />
              </div>
            </div>
          </div>
        </div>
        <div className="campus-box">
          <div className="flip-card">
            <div className="flip-inner">
              <div className="flip-front">
                <div className="flipimg">
                  <img src="/image/HINDUCOLLEGE.png" alt="Image 8 Front"
                    style={{width:' 50% ', marginLeft: '70px', marginBottom: '20px'}} />
                </div>
                <div className="flip-content">
                  <h2 style={{marginBottom:' 20px'}}>HINDU COLLEGE, <br/>Sonipat</h2>
                  <p className="paraflip">MoU sign-between NS3EDU and HINDU COLLEGE </p>
                </div>
              </div>
              <div className="flip-back">
                <img src="/image/HINDU_MOU.jpg" alt="Image 8 Back" />
              </div>
            </div>
          </div>
        </div>


      </div>

      <button id="nextBtn">&#8594,</button>
    </div>

  </div>
  <div className="container4">
    <h2 className="c4h">Our <span className="curved-wrapper">Placemenent
        <svg viewBox="0 0 200 10" preserveAspectRatio="none" style={{height:' 30px'}}>
          {/* <!-- Slope curve: starts low, ends high --> */}
          <path d="M0,9 Q100,2 200,0" />
        </svg>
      </span> Partners</h2>
    <div className="partner-slider">
      <div className="slider-track">
        <div className="companylogo"><img src="/image/Company LOGO3-min.png" alt=""/></div>
        <div className="companylogo"><img src="/image/Company LOGO4-min.png" alt=""/></div>
        <div className="companylogo"><img src="/image/Company LOGO5-min.png" alt=""/></div>
        <div className="companylogo"><img src="/image/Company LOGO6-min.png" alt=""/></div>
        <div className="companylogo"><img src="/image/Company LOGO7-min.png" alt=""/></div>
        <div className="companylogo"><img src="/image/Company LOGO8-min.png" alt=""/></div>

        {/* <!-- Clone again for infinite loop --> */}
        <div className="companylogo"><img src="/image/Company LOGO3-min.png" alt=""/></div>
        <div className="companylogo"><img src="/image/Company LOGO4-min.png" alt=""/></div>
        <div className="companylogo"><img src="/image/Company LOGO5-min.png" alt=""/></div>
        <div className="companylogo"><img src="/image/Company LOGO6-min.png" alt=""/></div>
        <div className="companylogo"><img src="/image/Company LOGO7-min.png" alt=""/></div>
        <div className="companylogo"><img src="/image/Company LOGO8-min.png" alt=""/></div>
      </div>
    </div>

    <div className="partner partner-slider p2">
      <div className="slider-track s2">
        <div className="companylogo"><img src="/image/Company LOGO9-min.png" alt=""/></div>
        <div className="companylogo"><img src="/image/Company LOGO10-min.png" alt=""/></div>
        <div className="companylogo"><img src="/image/Company LOGO11-min.png" alt=""/></div>
        <div className="companylogo"><img src="/image/Company LOGO12-min.png" alt=""/></div>
        <div className="companylogo"><img src="/image/Company LOGO13-min.png" alt=""/></div>
        <div className="companylogo"><img src="/image/Company LOGO14-min.png" alt=""/></div>
        <div className="companylogo"><img src="/image/Company LOGO9-min.png" alt=""/></div>
        <div className="companylogo"><img src="/image/Company LOGO10-min.png" alt=""/></div>
        <div className="companylogo"><img src="/image/Company LOGO11-min.png" alt=""/></div>
        <div className="companylogo"><img src="/image/Company LOGO12-min.png" alt=""/></div>
        <div className="companylogo"><img src="/image/Company LOGO13-min.png" alt=""/></div>
        <div className="companylogo"><img src="/image/Company LOGO14-min.png" alt=""/></div>
      </div>
    </div>
    <div className="partner partner-slider p3">
      <div className="slider-track">
        <div className="companylogo"><img src="/image/Company LOGO15-min.png" alt=""/></div>
        <div className="companylogo"><img src="/image/Company LOGO16-min.png" alt=""/></div>
        <div className="companylogo"><img src="/image/Company LOGO17-min.png" alt=""/></div>
        <div className="companylogo"><img src="/image/Company LOGO18-min.png" alt=""/></div>
        <div className="companylogo"><img src="/image/Company LOGO19-min.png" alt=""/></div>
        <div className="companylogo"><img src="/image/Company LOGO20-min.png" alt=""/></div>
        <div className="companylogo"><img src="/image/Company LOGO15-min.png" alt=""/></div>
        <div className="companylogo"><img src="/image/Company LOGO16-min.png" alt=""/></div>
        <div className="companylogo"><img src="/image/Company LOGO17-min.png" alt=""/></div>
        <div className="companylogo"><img src="/image/Company LOGO18-min.png" alt=""/></div>
        <div className="companylogo"><img src="/image/Company LOGO19-min.png" alt=""/></div>
        <div className="companylogo"><img src="/image/Company LOGO20-min.png" alt=""/></div>
      </div>
    </div>

    <div className="partner partner-slider p4">
      <div className="slider-track s4">
        <div className="companylogo"><img src="/image/Company LOGO21-min.png" alt=""/></div>
        <div className="companylogo"><img src="/image/Company LOGO22-min.png" alt=""/></div>
        <div className="companylogo"><img src="/image/Company LOG23-min.png" alt=""/></div>
        <div className="companylogo"><img src="/image/Company LOGO24-min.png" alt=""/></div>
        <div className="companylogo"><img src="/image/Company LOGO25-min.png" alt=""/></div>
        <div className="companylogo"><img src="/image/Company LOGO26-min.png" alt=""/></div>
        <div className="companylogo"><img src="/image/Company LOGO21-min.png" alt=""/></div>
        <div className="companylogo"><img src="/image/Company LOGO22-min.png" alt=""/></div>
        <div className="companylogo"><img src="/image/Company LOG23-min.png" alt=""/></div>
        <div className="companylogo"><img src="/image/Company LOGO24-min.png" alt=""/></div>
        <div className="companylogo"><img src="/image/Company LOGO25-min.png" alt=""/></div>
        <div className="companylogo"><img src="/image/Company LOGO26-min.png" alt=""/></div>
      </div>
    </div>
  </div>
  <div className="container5"><img src="/image/Screenshot 2025-07-06 154858.png" alt=""/></div>
  <div className="container6">
    <div className="c6d1">
      <h3 style={{color: 'gray', marginBottom: '30px'}}>Join as a Trainer</h3>
      <h2>Become an instructor and <br/> spread your knowledge</h2>
      <div className="btndiv">Join Now</div>
    </div>
    <div className="c6d2">
      <h3 style={{color: 'gray', marginBottom: '30px'}}>Join as a Trainer</h3>
      <h2>Become the future leader <br/> of the IT industry</h2>
      <div className="btndiv">Join Now</div>
    </div>
  </div>
  <div className="container7">
    <h2 id="container7-heading">Upcoming <span className="curved-wrapper">Batches
        <svg viewBox="0 0 200 10" preserveAspectRatio="none">
          {/* <!-- Slope curve: starts low, ends high --> */}
          <path d="M0,9 Q100,2 200,0" />
        </svg>
      </span></h2>

    <div className="filters">
      <button className="active" data-filter="all">View All</button>
      <button data-filter="gn">Gurugram</button>
      <button data-filter="NW">New Delhi</button>
      <button data-filter="ln">Lucknow</button>
    </div>

    {/* <!-- CARDS CONTAINER --> */}
    <div className="cards-container7">

      <div className="card" data-category="gn ln">
        <div className="img"><img src="/image/Batches logo3-min.webp" alt="Cyber Security Thumbnail"/></div>
        <div className="card-content">
          <div className="batch-row"><span className="label">Batch</span><span className="status">REGULAR</span></div>
          <h4 className="course-title">Cyber Security</h4>
          <div className="book-now">Book Now</div>
        </div>
      </div>

      <div className="card" data-category="NW">
        <div className="img"><img src="/image/Batches logo1-min.webp" alt="CCIE Thumbnail"/></div>
        <div className="card-content">
          <div className="batch-row"><span className="label">Batch</span><span className="status">REGULAR</span></div>
          <h4 className="course-title">CCIE Enterprise</h4>
          <div className="book-now">Book Now</div>
        </div>
      </div>

      <div className="card" data-category="ln">
        <div className="img"><img src="/image/Batches logo2-min.webp" alt="IT Computing Thumbnail"/></div>
        <div className="card-content">
          <div className="batch-row"><span className="label">Batch</span><span className="status">REGULAR</span></div>
          <h4 className="course-title">IT Computing</h4>
          <div className="book-now">Book Now</div>
        </div>
      </div>

      <div className="card" data-category=" NW">
        <div className="img"><img src="/image/Batches logo4-min.webp" alt="Firewall Thumbnail"/></div>
        <div className="card-content">
          <div className="batch-row"><span className="label">Batch</span><span className="status">REGULAR</span></div>
          <h4 className="course-title">Multivendor Firewall</h4>
          <div className="book-now">Book Now</div>
        </div>
      </div>

      <div className="card" data-category="gn">
        <div className="img"><img src="/image/Batches logo5-min.webp" alt="Basic Computer Thumbnail"/></div>
        <div className="card-content">
          <div className="batch-row"><span className="label">Batch</span><span className="status">REGULAR</span></div>
          <h4 className="course-title">Basic Computer</h4>
          <div className="book-now">Book Now</div>
        </div>
      </div>

      <div className="card" data-category="gn">
        <div className="img"><img src="/image/Batches logo6-min.webp" alt="CCNA Thumbnail"/></div>
        <div className="card-content">
          <div className="batch-row"><span className="label">Batch</span><span className="status">REGULAR</span></div>
          <h4 className="course-title">CCNA</h4>
          <div className="book-now">Book Now</div>
        </div>
      </div>

      <div className="card" data-category="gn">
        <div className="img"><img src="/image/Batches logo7-min.webp" alt="CCNP Thumbnail"/></div>
        <div className="card-content">
          <div className="batch-row"><span className="label">Batch</span><span className="status">REGULAR</span></div>
          <h4 className="course-title">CCNP</h4>
          <div className="book-now">Book Now</div>
        </div>
      </div>

      <div className="card" data-category="gn ln NW">
        <div className="img"><img src="/image/Batches logo8-min.webp" alt="SOC Thumbnail"/></div>
        <div className="card-content">
          <div className="batch-row"><span className="label">Batch</span><span className="status">REGULAR</span></div>
          <h4 className="course-title">SOC</h4>
          <div className="book-now">Book Now</div>
        </div>
      </div>

      <div className="card" data-category="gn ln NW">
        <div className="img"><img src="/image/download-removebg-preview.png" alt="DevOps Thumbnail" style={{width: '80%'}}/>
        </div>
        <div className="card-content">
          <div className="batch-row"><span className="label">Batch</span><span className="status">REGULAR</span></div>
          <h4 className="course-title">Certification in DevOps</h4>
          <div className="book-now">Book Now</div>
        </div>
      </div>

      <div className="card" data-category="gn NW ln">
        <div className="img"><img src="/image/pngimg.com - linux_PNG9.png" alt="Linux Thumbnail" style={{width: '80%'}}/></div>
        <div className="card-content">
          <div className="batch-row"><span className="label">Batch</span><span className="status">REGULAR</span></div>
          <h4 className="course-title">Certification in Linux</h4>
          <div className="book-now">Book Now</div>
        </div>
      </div>

    </div>
  </div>

  <div className="Success-container">
    <h2>Success Speaks <span className="curved-wrapper">Volumes
        <svg viewBox="0 0 200 10" preserveAspectRatio="none">
          {/* <!-- Slope curve: starts low, ends high --> */}
          <path d="M0,9 Q100,2 200,0" />
        </svg>
      </span></h2>
    <div className="slider-wrap">
      <div className="slider-track">
        <div className="card-a C1"><img src="/image/testimonial1 (1)-min.webp" alt=""/></div>
        <div className="card-a C2"><img src="/image/testimonial2-min.webp" alt=""/></div>
        <div className="card-a C3"><img src="/image/testimonial3-min (1).webp" alt=""/></div>
        <div className="card-a C4"><img src="/image/testimonial4-min.webp" alt=""/></div>
        <div className="card-a C5"><img src="/image/testimonial5-min (1).webp" alt=""/></div>
        <div className="card-a C6"><img src="/image/testimonial6-min.webp" alt=""/></div>
        <div className="card-a C7"><img src="/image/testimonial7-min.webp" alt=""/></div>
        <div className="card-a C8"><img src="/image/testimonial8-min.webp" alt=""/></div>
        <div className="card-a C9">Student 9</div>
        <div className="card-a C10">Student 10</div>
      </div>
    </div>

  </div>
            </main>
            <Footer/>
        </>
    )
}

export default Home
