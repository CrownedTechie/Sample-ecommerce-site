import DisplayImg from "./DisplayImg";
import '../stylings/ServiceCard.css';

const ServiceCard = ({img, title, text}) => {
  return (
      <>
            <div className="service-card">
              <DisplayImg img={ img } styling='service-card-image'/>

              <h5>{ title }</h5>

              <p>{ text }</p>

          </div>
      </>
  )
}

export default ServiceCard;