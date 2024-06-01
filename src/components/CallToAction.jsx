import '../stylings/CallToAction.css';
import IconBtn from './IconBtn';

const CallToAction = () => {
  return (
      <>
          <section>
            <div className="CallToAction-heading">
              <h6>Designing Better Experience</h6>
              <h2>Problems trying to resolve the conflict between </h2>
          
              <div>
                <p>Problems trying to resolve the conflict between the two major realms of Classical physics: </p>
                <h3>$16.48</h3>
              </div>
               
                <IconBtn value='add your call to action' styling='CallToAction-btn' />
            </div>
          </section>
      </>
  )
}

export default CallToAction;