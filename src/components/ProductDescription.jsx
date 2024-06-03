import TabButton from "./TabButton";
import '../stylings/ProductDescription.css';
import DisplayImg from "./DisplayImg";
import lamp from "../assets/graphic-design1.png";

const ProductDescription = () => {
    return (
        <>
            <section className="productdescription-section">
                <menu>
                    <TabButton>description</TabButton>
                    <TabButton>additional information</TabButton>
                    <TabButton>reviews(0)</TabButton>
                </menu>
                <hr />


                <article>
                    <div className="extraContent-col">
                        <div className="extra-content">
                            <h3>the quick fox jumps over </h3>

                            <p>Met minim Mollie non desert Alamo est sit cliquey dolor do met sent. RELIT official consequent door ENIM RELIT Mollie. Excitation venial consequent sent nostrum met.</p>

                            <blockquote>Met minim Mollie non desert Alamo est sit cliquey dolor do met sent. RELIT official consequent door ENIM RELIT Mollie. Excitation venial consequent sent nostrum met.</blockquote>

                            <p>Met minim Mollie non desert Alamo est sit cliquey dolor do met sent. RELIT official consequent door ENIM RELIT Mollie. Excitation venial consequent sent nostrum met.</p>
                        </div>
                        <DisplayImg img={lamp} styling='extraContent-img' />
                    </div>
                   
                </article>
            </section>
        </>
    )
}

export default ProductDescription;