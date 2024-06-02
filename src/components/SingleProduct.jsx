import DisplayImg from "./DisplayImg";
import stars from "../assets/stars.png";
import productColors from "../assets/product-colors.png";
import IconBtn from "./IconBtn";
import '../stylings/SingleProduct.css';
import lamp from '../assets/graphic-design1.png';


const SingleProduct = () => {
    return (
        <>
            <section className="singleproduct-section">
                <div className="sub-header">
                    <button>
                        <span>Home</span>
                        <span className="material-symbols-outlined">arrow_forward_ios</span>
                        <span className="open-page">Shop</span>
                    </button>
                </div>

                <article>
                    <div>
                        <DisplayImg img={ lamp } styling='singleproduct-img' />
                    </div>

                    <div className="singleproduct-detail">
                        <h4>floating phone</h4>

                        <div className="rating">
                            <DisplayImg img={stars} />
                            
                            <span>10 reviews</span>
                        </div>

                        <h5>$1200</h5>

                        <h6>availability: <span> in stock</span></h6>

                        <hr />


                        <div>
                            <DisplayImg img={ productColors } styling='product-colors' />

                            <div className="singleproducts-btns">
                                <IconBtn value='Select Options' styling='options-btn' />
                                <IconBtn icon='favorite' iconStyling='circle-icon' />
                                <IconBtn icon='shopping_cart' iconStyling='circle-icon' />
                                <IconBtn icon='visibility' iconStyling='circle-icon' />
                            </div>
                        </div>
                    </div>
                   
                </article>
            </section>
            
        </>
    )
};

export default SingleProduct;