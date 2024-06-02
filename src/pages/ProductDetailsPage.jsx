import AlertHeader from "../components/AlertHeader";
import Header from "../components/Header";
import SingleProduct from "../components/SingleProduct";
import ProductDescription from "../components/ProductDescription";
import '../stylings/ProductsDetailsPage.css';
import ProductCard from "../components/ProductCard";
import lamp from "../assets/graphic-design1.png";
import { LOGOS } from "../data";
import DisplayImg from "../components/DisplayImg";
import Footer from "../components/Footer";

const ProductDetailsPage = () => {
  return (
    <>
      <AlertHeader />

      <Header />

      <SingleProduct />

      <ProductDescription />

      <section className="bestsellerProducts-section">
        <h3>bestseller products</h3>
        <hr />

        <div>
          {/* REDUNDANT. WILL BE CHANGED LATER */}
          <div>
            <ProductCard img={lamp} title='lorem have' />
            <ProductCard img={lamp} title='lorem have' />
            <ProductCard img={lamp} title='lorem have' />
            <ProductCard img={lamp} title='lorem have' />
            <ProductCard img={lamp} title='lorem have' />
            <ProductCard img={lamp} title='lorem have' />
            <ProductCard img={lamp} title='lorem have' />
            <ProductCard img={lamp} title='lorem have' />
          </div>
        </div>
        
      </section>

      <section className="logos-section">
          <div>
              {LOGOS.map((logo, index) => (
                <DisplayImg img={logo} key={index} />
              ))}
            </div>
      </section>

      <Footer />

    </>
  )
}

export default ProductDetailsPage;