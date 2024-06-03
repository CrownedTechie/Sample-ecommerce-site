import AlertHeader from "../components/AlertHeader";
import Header from "../components/Header";
import CartBox from "../components/CartBox";
import ProductCard from "../components/ProductCard";
import lamp from "../assets/graphic-design1.png";
import Footer from "../components/Footer";


const ShoppingCart = () => {
    return (
        <>
            <AlertHeader />

            <Header />

            <CartBox />
            
            <section className="bestsellerProducts-section">
                <h3> products related to items in your cart </h3>
                <hr />

                <div className="">
                    <div>
                        {/* REDUNDANT WILL BE CHANGED LATER */}
                        <ProductCard img={lamp} />
                        <ProductCard img={lamp}/>
                        <ProductCard img={lamp}/>
                        <ProductCard img={lamp}/>
                        <ProductCard img={lamp}/>
                        <ProductCard img={lamp}/>
                        <ProductCard img={lamp}/>
                        <ProductCard img={lamp}/>
                    </div>
                </div>

            </section>
           
            <Footer />

        </>
    )
};

export default ShoppingCart;