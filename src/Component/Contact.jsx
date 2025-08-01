import React from 'react'
import '../assets/css/Contact.css'
import Header from './Header'
import Footer from './Footer'
const Contact = () => {
  return (
    <>
    <Header/>
     <div className="contact-container1">
        <img src="/image/Contact3-min-ezgif.com-jpg-to-webp-converter.webp" alt="Contact background"/>
        <div className="hometab">
            <h1>Contact</h1>
            <a href="index.html">Home &gt;</a>
            <a href="contact.html">Contact us</a>
        </div>
    </div>
    <div className="contact-container2">
        <h1>Contact Us</h1>
        <hr className="contacthr"/>
        <div className="contact-container2-main">
            <div className="contact-container2Div1">
                <div className="address">
                    <img src="/image/location8-ezgif.com-jpg-to-webp-converter.webp" alt="location-logo"
                        className="locationlogo"/>
                    <div className="contact-address">
                        <h3>Head Office Address</h3>
                        <p>B9, 3rd Floor, 302, Block B, Old DLF, Sector 14, Gurugram, Haryana 122001</p>
                        <div className="direction">
                            <a href="https://maps.app.goo.gl/GsUpRGXx86t4xtfW9">Get Direction on Map</a>
                        </div>
                    </div>
                </div>
                <hr className="contacthr2"/>
                <div className="nearMetro">
                    <img src="/image/Travel1-ezgif.com-jpg-to-webp-converter.webp" alt="MetroLogo"/>
                    <div className="neaar">
                        <h3>Nearest Metro Station</h3>
                        <p>MG Road</p>
                    </div>
                </div>
                <hr className="contacthr2"/>
                <div className="Email-us">
                    <img src="/image/mail5-ezgif.com-jpg-to-webp-converter.webp" alt=""/>
                    <div className="emailContent">
                        <h3>Email Us </h3>
                        <p>info@ns3edu.com</p>
                    </div>
                </div>
                <hr className="contacthr2"/>
                <div className="chat-with-us">
                    <img src="/image/whatsapp.png" alt=""/>
                    <div className="chat-content">
                        <h3>Chat With Us</h3>
                        <p>+91-8800011XXX</p>
                    </div>
                </div>
            </div>
            <div className="contact-container2Div2">
                <h3>Let us help you !</h3>
                <div className="input-box">
                    <input type="text" placeholder="Full Name*"/>
                    <input type="email" placeholder="Email*"/>
                    <div className="phone">
                        <select id="country-code">
                           <option value="+1" data-code="us">(+1)</option>
<option value="+91" data-code="in">(+91)</option>
<option value="+86" data-code="cn">(+86)</option>
<option value="+49" data-code="de">(+49)</option>
<option value="+33" data-code="fr">(+33)</option>
<option value="+39" data-code="it">(+39)</option>
<option value="+7" data-code="ru">(+7)</option>
<option value="+82" data-code="kr">(+82)</option>
<option value="+90" data-code="tr">(+90)</option>
<option value="+971" data-code="ae">(+971)</option>
<option value="+92" data-code="pk">(+92)</option>
<option value="+880" data-code="bd">(+880)</option>
<option value="+234" data-code="ng">(+234)</option>
<option value="+27" data-code="za">(+27)</option>
<option value="+966" data-code="sa">(+966)</option>
<option value="+48" data-code="pl">(+48)</option>
<option value="+31" data-code="nl">(+31)</option>
<option value="+46" data-code="se">(+46)</option>
<option value="+47" data-code="no">(+47)</option>
<option value="+41" data-code="ch">(+41)</option>
<option value="+351" data-code="pt">(+351)</option>
<option value="+34" data-code="es">(+34)</option>
<option value="+65" data-code="sg">(+65)</option>
<option value="+66" data-code="th">(+66)</option>
<option value="+62" data-code="id">(+62)</option>
<option value="+63" data-code="ph">(+63)</option>
<option value="+60" data-code="my">(+60)</option>
<option value="+64" data-code="nz">(+64)</option>
<option value="+353" data-code="ie">(+353)</option>
<option value="+43" data-code="at">(+43)</option>
<option value="+36" data-code="hu">(+36)</option>
<option value="+45" data-code="dk">(+45)</option>
<option value="+32" data-code="be">(+32)</option>
<option value="+994" data-code="az">(+994)</option>
<option value="+48" data-code="pl">(+48)</option>
<option value="+56" data-code="cl">(+56)</option>
<option value="+55" data-code="br">(+55)</option>
<option value="+52" data-code="mx">(+52)</option>
<option value="+1-876" data-code="jm">(+1-876)</option>
<option value="+505" data-code="ni">(+505)</option>
<option value="+51" data-code="pe">(+51)</option>
<option value="+54" data-code="ar">(+54)</option>
<option value="+57" data-code="co">(+57)</option>
<option value="+20" data-code="eg">(+20)</option>
<option value="+211" data-code="ss">(+211)</option>
<option value="+212" data-code="ma">(+212)</option>
<option value="+964" data-code="iq">(+964)</option>
<option value="+98" data-code="ir">(+98)</option>
<option value="+961" data-code="lb">(+961)</option>
                            {/* <!-- Add more as needed --> */}
                        </select>
                        <input type="tel" id="phoneNumber" placeholder="Phone Number*" />
                    </div>
                    <input type="" placeholder="course"/>
                </div>
                <textarea placeholder="Write your Message..." className="feedback-box"></textarea>
                <button className="requst-btn">Request a call back</button>
            </div>
        </div>

    </div>
    <Footer/>
    </>
  )
}

export default Contact