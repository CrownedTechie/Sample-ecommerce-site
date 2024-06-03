import TabButton from "./TabButton";
import '../stylings/ProductDescription.css';
import DisplayImg from "./DisplayImg";
import lamp from "../assets/graphic-design1.png";

const ProductDescription = ({img, noOfReviews, brand, description}) => {
    return (
        <>
            <section className="productdescription-section">
                <menu>
                    <TabButton>description</TabButton>
                    <TabButton>additional information</TabButton>
                    <TabButton>reviews({noOfReviews})</TabButton>
                </menu>
                <hr />


                <article>
                    <div className="extraContent-col">
                        <div className="extra-content">
                            <h3>{brand} </h3>

                            <p> {description} </p>

                            <blockquote> {description} </blockquote>

                            <p> {description} </p>
                        </div>
                        <DisplayImg img={img} styling='extraContent-img' />
                    </div>
                   
                </article>
            </section>
        </>
    )
}

export default ProductDescription;