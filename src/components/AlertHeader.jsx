import '../stylings/AlertHeader.css';
import IconBtn from './IconBtn';
import { SOCIALS } from '../data';
import DisplayImg from './DisplayImg';


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
            {SOCIALS.map((social, index) => (
              <DisplayImg img={social} key={index}/>
            ))}
          </div>
        </div>

      </div>
     
    </>
  )
};

export default AlertHeader;