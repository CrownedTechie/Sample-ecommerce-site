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
import { useParams } from 'react-router-dom';
import { useGetSingleProductQuery } from "../api/Products";

const ProductDetailsPage = () => {
  const { productId } = useParams();
  
  const { data: product, error, isLoading } = useGetSingleProductQuery(productId);

  console.log(product)

  return (
    <>
      <AlertHeader />

      <Header />

      {product &&
        <SingleProduct
          img={product.images[0]}
          title={product.title}
          price={product.price}
          availabilityStatus={product.availabilityStatus}
          NoOfReviews={product.reviews.length}
          description={product.description}
        /> }

        {product
          &&
          <ProductDescription
            noOfReviews={product.reviews.length}
            img={product.images[1]}
            brand={product.brand}
            description={product.description}
            category={product.category}
          />
        }

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