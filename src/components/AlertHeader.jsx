import '../stylings/AlertHeader.css';
import IconBtn from './IconBtn';
import instagram from '../assets/instagram.png';
import youtube from '../assets/youtube.png';
import facebook from '../assets/facebook.png';
import twitter from '../assets/twitter.png';


const AlertHeader = () => {
  return (
    <>
      <div className="header-alert">

        <div className="contact-us">
          <IconBtn icon='call' value='(225) 555-0118' />
          <IconBtn icon='mail' value='michelle.rivera@example.com' />
        </div>

        <h2>Follow Us and get a chance to win 80% off </h2>
        
        <div className="follow-us">
          Follow Us :
          <div className="socials">
            <img src={instagram} alt="" />
            <img src={youtube} alt="" />
            <img src={facebook} alt="" />
            <img src={twitter} alt="" />
          </div>
        </div>

      </div>
     
    </>
  )
};

export default AlertHeader;