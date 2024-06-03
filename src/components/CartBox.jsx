import '../stylings/CartBox.css';
import { Link } from 'react-router-dom';
import OrderCart from './OrderCart';
import paymentOptions from '../assets/payment-options.png';
import DisplayImg from './DisplayImg';

const Cart = () => {
    return (
        <>
            <section className="cart-section">
                <div className=" cart-header">
                    <button>
                        <Link to={`/`}> <span>Home</span> </Link>
                        <span className="material-symbols-outlined">arrow_forward_ios</span>
                        <span className="">Shop</span>
                        <span className="material-symbols-outlined open-page">arrow_forward_ios</span>
                        <span className="open-page">Shopping Cart</span>
                    </button>
                </div>


                <div className="cart-box">
                    <div className="cart-details">
                        <h2>Shopping Cart</h2>

                        <div className="cart-headings">
                            <ul>
                                <li>Item Details</li>
                                <li>Quantity</li>
                                <li>Price</li>
                            </ul>
                        </div>

                        <div>
                            <OrderCart />
                            <OrderCart />
                            <OrderCart />
                        </div>
                    </div>

                    <div className='order-summary'>
                       <div className="orderSummary-heading">
                            <h2>Order Summary</h2>
                            <p>4 items</p>
                       </div>

                        <div className="orderSummary-charges">
                            <h4>Delivery Charges</h4>
                            <p>Add your delivery address to checkout to see delivery charges.</p>
                        </div>
                        <hr />

                        <div className='orderSummary-subtotal'>
                            <h4>Subtotal</h4>
                            <p>$2000</p>
                        </div>
                        <hr />

                        <div className="orderSummary-total">
                            <h4>Total</h4>
                            <p>$2000</p>
                        </div>
                        <hr />

                        <div className="orderSummary-btn">
                            <p>Excluding Delivery Charges</p>
                            <button>Proceed to Checkout</button>
                        </div>
                        <hr />

                        <DisplayImg img={paymentOptions} />
                    </div>


                </div>
            </section>
        </>
    )
};

export default Cart;