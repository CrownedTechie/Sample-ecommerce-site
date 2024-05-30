import '../stylings/Footer.css';
import DisplayImg from './DisplayImg';
import facebookBlue from '../assets/facebook-blue.png';
import instagramBlue from '../assets/instagram-blue.png';
import twitterBlue from '../assets/twitter-blue.png';
import IconBtn from './IconBtn';


const Footer = () => {
  return (
      <>
          <footer className='footer'>
              <div className='footer-top'>
                  <h3>Bandage</h3>

                  <div className="footer-socials">
                      <DisplayImg img={ facebookBlue } />
                      <DisplayImg img={ instagramBlue } />
                      <DisplayImg img={ twitterBlue }  />
                  </div>
              </div>

              <div className='footer-center'>
                  <ul>
                      <h4>Company Info</h4>
                      <li>About us</li>
                      <li>Carrier</li>
                      <li>We are hiring</li>
                      <li>Blog</li>
                  </ul>

                  <ul>
                      <h4>Legal</h4>
                      <li>About us</li>
                      <li>Carrier</li>
                      <li>We are hiring</li>
                      <li>Blog</li>
                  </ul>

                  <ul>
                      <h4>Features</h4>
                      <li>Business Marketing</li>
                      <li>User Analytics</li>
                      <li>Live Chat</li>
                      <li>Unlimited Support</li>
                  </ul>

                  
                  <ul>
                      <h4>Resources</h4>
                      <li>IOS & Android</li>
                      <li>Watch a Demo</li>
                      <li>Customers</li>
                      <li>API</li>
                  </ul>

                  <ul>
                      <h4>Get in Touch</h4>

                      <div className="input-box">
                        <input type="email" name="" id="" placeholder='Your Email'/>
                        <button className='getInTouch-btn'>Subscribe</button>
                      </div>

                      <p>Lorem, ipsum dolor sit amet</p>
                  </ul>
              </div>

              <div className='footer-bottom'>
                <h6>Made With Love By Finland All Right Reserved</h6>
              </div>
          </footer>
      </>
  )
}

export default Footer;