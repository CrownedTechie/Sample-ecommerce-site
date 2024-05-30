import furniture1 from '../assets/furniture-desktop1.png';
import furniture2 from '../assets/furniture-desktop2.png';
import furniture3 from '../assets/furniture-desktop3.png';
import furniture4 from '../assets/furniture-desktop4.png';
import DisplayImg from './DisplayImg';
import '../stylings/HeroSection.css';

const HeroSection = () => {
  return (
      <>
          <section className='hero-section'>

            <div className='hero-images'>
              <DisplayImg img={furniture1} />
              <DisplayImg img={furniture2} />
              <DisplayImg img={furniture3} />
              <DisplayImg img={furniture4} />
            </div>
            
        </section>
      </>
  )
}

export default HeroSection;