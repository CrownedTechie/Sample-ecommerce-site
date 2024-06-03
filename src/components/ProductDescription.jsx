import TabButton from "./TabButton";
import '../stylings/ProductDescription.css';
import DisplayImg from "./DisplayImg";

const ProductDescription = ({img, noOfReviews, brand, description, category}) => {
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
                            <h3>{brand} {category} </h3>

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