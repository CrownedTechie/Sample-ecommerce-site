import '../stylings/Footer.css';
import DisplayImg from './DisplayImg';
import facebookBlue from '../assets/facebook-blue.png';
import instagramBlue from '../assets/instagram-blue.png';
import twitterBlue from '../assets/twitter-blue.png';
import { FOOTER_LINKS } from '../data';

const FooterList = ({title, items}) => (
    <ul>
        <h4>{title}</h4>
        {items.map((item, index) => (
            <li key={index}> { item } </li>
        ))}
    </ul>
);

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
                {FOOTER_LINKS.map((link, index) => (
                        <FooterList key={index} title={link.title} items={link.items} />
                ))}

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