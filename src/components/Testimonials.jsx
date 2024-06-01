import '../stylings/Testimonials.css';
import DisplayImg from './DisplayImg';
import reviewer from '../assets/reviewer.png';
import stars from '../assets/stars.png';
import gallery1 from '../assets/gallery1.png';

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
                <DisplayImg img={gallery1} />
                <DisplayImg img={gallery1} />
                <DisplayImg img={gallery1} />
                <DisplayImg img={gallery1} />
                <DisplayImg img={gallery1} />
                <DisplayImg img={gallery1} />
                <DisplayImg img={gallery1} />
                <DisplayImg img={gallery1} />
                <DisplayImg img={gallery1} />
              </div>
          </section>
      </>
  )
}

export default Testimonials;