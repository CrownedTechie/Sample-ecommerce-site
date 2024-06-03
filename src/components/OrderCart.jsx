import DisplayImg from "./DisplayImg";
import plusIcon from "../assets/plus-icon.png";
import minusIcon from "../assets/minus-icon.png";
import stars from "../assets/stars.png";
import lamp from "../assets/graphic-design1.png";
import IconBtn from "./IconBtn";
import '../stylings/OrderCart.css';


const OrderCart = () => {
  return (
      <>
          <div className="order-cart">
            <div>
              <DisplayImg img={lamp} styling='orderCart-product' />
          

              <div className="orderCart-details">
                <h4>graphic design</h4>
                
                <h5>In Stock</h5>

                <div className="orderDetails-rating">
                  <DisplayImg img={stars} />
                            
                  <span> 10 reviews </span>
                </div>
              </div>
          
              <div className="orderCart-quantity">
                <DisplayImg img={minusIcon} />
                <span>1</span>
                <DisplayImg img={plusIcon} />
              </div>

              <div className="orderCart-price">
                <h6>$1000</h6>
                <p>$1000 x 1 item</p>
              </div>
          </div>
        
          <div className='orderCart-remove'>
            <span className='material-symbols-outlined'>delete</span>
            <button>REMOVE</button>
          </div>
          <hr />
        </div>
      </>
  )
};

export default OrderCart;