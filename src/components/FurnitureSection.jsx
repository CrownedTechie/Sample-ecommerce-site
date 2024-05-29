import furniture1 from '../assets/furniture-desktop1.png';
import furniture2 from '../assets/furniture-desktop2.png';
import furniture3 from '../assets/furniture-desktop3.png';
import furniture4 from '../assets/furniture-desktop4.png';
import DisplayImg from './DisplayImg';

const FurnitureSection = () => {
  return (
      <>
          <section className='flex justify-center py-16'>

            <div className=' grid grid-rows-2 grid-flow-col gap-3'>
              <DisplayImg img={furniture1} styling='row-span-3'  />
              <DisplayImg img={furniture2} styling='col-span-2' />
              <DisplayImg img={furniture3} styling='row-span-2 col-span-1' />
              <DisplayImg img={furniture4} styling='row-span-2 col-span-1' />
            </div>
            
        </section>
      </>
  )
}

export default FurnitureSection;