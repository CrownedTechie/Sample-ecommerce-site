import DisplayImg from "./DisplayImg";
import stars from "../assets/stars.png";
import productColors from "../assets/product-colors.png";
import IconBtn from "./IconBtn";
import '../stylings/SingleProduct.css';
import { Link } from "react-router-dom";


const SingleProduct = ({img, title, price, availabilityStatus, NoOfReviews, description}) => {
    return (
        <>
            <section className="singleproduct-section">
                <div className="sub-header">
                    <button>
                        <Link to={`/`}> <span>Home</span> </Link>
                        <span className="material-symbols-outlined">arrow_forward_ios</span>
                        <span className="open-page">Shop</span>
                    </button>
                </div>

                <article>
                    <div>
                        <DisplayImg img={ img } styling='singleproduct-img' />
                    </div>

                    <div className="singleproduct-detail">
                        <h4>{title}</h4>

                        <div className="rating">
                            <DisplayImg img={stars} />
                            
                            <span> { NoOfReviews } reviews </span>
                        </div>

                        <h5>${ price }</h5>

                        <h6>availability: <span> {availabilityStatus}</span></h6>

                        <p>{description}</p>

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