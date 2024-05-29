import DisplayImg from "./DisplayImg";
import '../stylings/ServiceCard.css';

const ServiceCard = ({img, title, text}) => {
  return (
      <>
            <div className="service-card flex flex-col items-center gap-6 ">
              <DisplayImg img={ img } styling='w-20'/>

              <h5 className='font-bold text-2xl'>{ title }</h5>

              <p className=' font-normal text-center text-base p-16'>{ text }</p>

          </div>
      </>
  )
}

export default ServiceCard;