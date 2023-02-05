import React from 'react'
import Navbar from '../navbar/Navbar'
import './regist.css'
import {Link} from 'react-router-dom';
function Regist() {
  return (
    
      
     <div>
         <section id="section-wrapper">
        <Navbar/>
        <div class="box-wrapper">
            <div class="info-wrap">
                <h2 class="info-title">Contact Information</h2>
                <h3 class="info-sub-title">Fill up the form and our Team will get back to you within 24 hours</h3>
                <ul class="info-details">
                    <li>
                        <i class="fas fa-phone-alt"></i>
                        <span>Phone:</span> <a href="tel:+ 1235 2355 98">+ 1235 2355 98</a>
                    </li>
                    <li>
                        <i class="fas fa-paper-plane"></i>
                        <span>Email:</span> <a href="mailto:info@yoursite.com">info@yoursite.com</a>
                    </li>
                    <li>
                        <i class="fas fa-globe"></i>
                        <span>Website:</span> <a href="#">Let's Build.com</a>
                    </li>
                </ul>
                <ul class="social-icons">
                    <li><a href="#"><i class="fab fa-facebook"></i></a></li>
                    <li><a href="#"><i class="fab fa-twitter"></i></a></li>
                    <li><a href="#"><i class="fab fa-linkedin-in"></i></a></li>
                </ul>
            </div>
            <div class="form-wrap">
                <form action="#" method="POST">
                    <h2 class="form-title">Send us a message</h2>
                    <div class="form-fields">
                        <div class="form-group">
                            <input spellCheck="false" type="text" class="fname" placeholder="First Name"/>
                        </div>
                        <div class="form-group">
                            <input spellCheck="false" type="text" class="lname" placeholder="Last Name"/>
                        </div>
                        <div class="form-group">
                            <input type="email" class="email" placeholder="Mail"/>
                        </div>
                        <div class="form-group">
                            <input type="adhar" class="adhar" placeholder="5221-6753-2703"/>
                        </div>
                        <div class="form-group">
                            <input type="number" class="phone" placeholder="Phone"/>
                        </div>
                        <div class="form-group">
                            <textarea spellCheck="false" name="message" id="" placeholder="Write your message"></textarea>
                        </div>
                    </div>
                    <Link to="/employee-page"><input type="submit" value="Submit" class="submit-button"/></Link>
                </form>
            </div>
        </div>
    </section>
     </div>
   
  )
}

export default Regist
