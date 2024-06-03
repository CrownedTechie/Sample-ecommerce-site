import AlertHeader from "../components/AlertHeader";
import Header from "../components/Header";
import CartBox from "../components/CartBox";
import ProductCard from "../components/ProductCard";
import lamp from "../assets/graphic-design1.png";



const ShoppingCart = () => {
    return (
        <>
            <AlertHeader />

            <Header />

            <CartBox />
            
            <section>
                <h2> products related to items in your cart </h2>
                <hr />

                <div>
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
           


        </>
    )
};

export default ShoppingCart;