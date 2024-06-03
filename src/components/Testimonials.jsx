import '../stylings/Testimonials.css';
import DisplayImg from './DisplayImg';
import reviewer from '../assets/reviewer.png';
import stars from '../assets/stars.png';
import { GALLERY } from '../data';

const Testimonials = () => {
  return (
      <>
          <section className='testimonials-section'>
              <div className="testimonials-review">
                  <h4>What they say about us</h4>

                  <DisplayImg img={reviewer} />
                  <DisplayImg img={stars} />


                  <h5>Slate helps you see how many more days you need to work to reach your financial goal.</h5>

                  <div className="reviewer-job">
                      <h6>Regina miles</h6>
                      <p>Designer</p>
                  </div>
              </div>

              <div className="testimonials-gallery">
                  {GALLERY.map((img) => (
                    <DisplayImg img={img} />
                  ))}
              </div>
          </section>
      </>
  )
}

export default Testimonials;