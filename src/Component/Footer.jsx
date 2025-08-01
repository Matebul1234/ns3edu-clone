import React from 'react'

const Footer = () => {
  return (
    <>
    <footer>
    <div class="top-footer">
      <div class="ns3">
        <div class="ns3logo"><img src="assests/Ns3Edu logo white.svg" alt=""/></div>
        <p>Welcome to NS3EDU, where we're dedicated to crafting IT Networking, Cloud Engineering, Cyber Security and
          Software Engineering experts through top-notch training and certification programs.</p>
        <div class="socialdiv">
          <div class="sociallink">
            <div class="sociallogo"><img src="assests/fb1.png" alt=""/></div>
          </div>
          <div class="sociallink">
            <div class="sociallogo"><img src="assests/insta.png" alt=""/></div>
          </div>
          <div class="sociallink">
            <div class="sociallogo"><img src="assests/linkedin1.png" alt=""/></div>
          </div>
          <div class="sociallink">
            <div class="sociallogo"><img src="assests/yt1.png" alt=""/></div>
          </div>
        </div>
      </div>
      <div class="importantlink">
        <h3>Important Links</h3>
        <ul>
          <li><a href="#">About Us</a></li>
          <li><a href="#">Culture in NS3</a></li>
          <li><a href="#">Free Mock Test</a></li>
          <li><a href="#">Career</a></li>
          <li><a href="#">Contact Us</a></li>
        </ul>
      </div>
      <div class="browseCategories">
        <h3>Browse Categories</h3>
        <ul>
          <li><a href="#"> IT Networking</a></li>
          <li><a href="#"> Cloud Engineering</a></li>
          <li><a href="#">Cyber Security </a></li>
          <li><a href="#"> Programming Language</a></li>
        </ul>
      </div>
      <div class="resources">
        <h3>Resources</h3>
        <ul>
          <li><a href="#"> Gallery</a></li>
          <li><a href="#">Blog</a></li>
          <li><a href="#">Events</a></li>
          <li><a href="#">Testimonials</a></li>
          <li><a href="#">Summer Internship</a></li>
        </ul>
      </div>
    </div>
    <hr class="chr"/>
    <div class="group">
      <a href="#" class="linked"><span class="lhr"></span>Terms & Conditions</a><a href="#" class="linked"><span class="lhr"></span>Corporate Traning</a><a
        href="#" class="linked"><span class="lhr"></span>Refund Policy</a><a href="#" class="linked"><span class="lhr"></span> Learn & Earn</a><a
        href="#" class="linked"><span class="lhr"></span>Privacy Policy</a> <a href="#" class="linked"><span class="lhr"></span>Placements</a> <a
        href="#" class="linked"><span class="lhr"></span> Free Mosk Test</a><a href="#" class="linked"><span class="lhr"></span>Carrer</a><a
        href="#" class="linked"><span class="lhr"></span>Contact Us</a>
    </div>
    <div class="last-div">
      <div class="last1">
        <p>© Copyright & Designed  <br/>by Niawebsolutions</p>
      </div>
      <div className="line1"></div>
      <div class="last2">
        <p>Have a question Call us 24/7</p>
        <img src="assests/sfdaaa.webp" alt="phone-icon"/>
        <h3>(+91)8800011138</h3>
      </div>
      <div class="line1 l2"></div>
    </div>
    <div class="email2">
      <input type="email" placeholder="Enter Email" />
      <div class="subscribe"> Subscribe</div>
    </div>
  </footer>
    </>
  )
}

export default Footer