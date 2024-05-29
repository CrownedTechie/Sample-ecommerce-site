import '../stylings/Navbar.css';
import Button from './Button';
import instagram from '../assets/instagram.png';
import youtube from '../assets/youtube.png';
import facebook from '../assets/facebook.png';
import twitter from '../assets/twitter.png';


const Navbar = () => {
  return (
    <>
      <div className="header-alert py-4 text-white font-bold lg:flex justify-around items-center sm:hidden md:hidden">

        <div className="contact-us flex gap-6">
          <Button icon='call' value='(225) 555-0118' />
          <Button icon='mail' value='michelle.rivera@example.com' />
        </div>

        <h2>Follow Us and get a chance to win 80% off </h2>
        
        <div className="follow-us flex items-center">
          Follow Us :
          <div className="socials flex gap-4 ml-4">
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

export default Navbar;