import AlertHeader from "../components/AlertHeader";
import Header from "../components/Header";
import HeroSection from "../components/HeroSection";
import FeaturedProduct from "../components/FeaturedProduct";
import ProductCard from "../components/ProductCard";
import IconBtn from "../components/IconBtn";
import ServiceCard from "../components/ServiceCard";
import { SERVICECARD_DETAILS } from "../data";
import FeaturedPosts from "../components/FeaturedPosts";
import PostCard from "../components/PostCard";
import Testimonials from "../components/Testimonials";
import CallToAction from "../components/CallToAction";
import Footer from "../components/Footer";
import '../stylings/HomePage.css';
import { useGetProductsQuery, useGetProductCategoryQuery } from "../api/Products";
import { useState } from "react";

const ShopPage = () => {
  const [limit, setLimit] = useState(10);

  const loadMoreProducts = () => {
    if (limit < 30) {
      setLimit((prevLimit) => Math.min(prevLimit + 5, 30));
    }
  };


  const { data: allProducts, error: allProductsError, isLoading: allProductsLoading } = useGetProductsQuery({ limit });
  
  const { data: homeDecor, error: homeDecorError, isLoading: homeDecorLoading } = useGetProductCategoryQuery();

  console.log(homeDecor);
  
  if (allProductsLoading) {return <h1>...Loading</h1>}

  if (allProductsError) {return <h1>na error be this</h1>}
  
  if (allProducts !== undefined) {
    const { products } = allProducts;
    
    return (
      <>
        <AlertHeader />

        <Header />

        <HeroSection />

        <FeaturedProduct title='featured products' category='bestseller products' extraClass='bestseller-title'>
          <section className="bestseller-products">
            <div className="bestseller-products-cards">
              {Array.isArray(products) && products.map((product) => (
                <ProductCard 
                  img={product.images[0]}
                  key={product.id}
                  title={product.title}
                  category={product.category}
                  oldPrice={product.price}
                  discountedPrice={product.discountPercentage}
                />
              ))}
            </div>

           { limit < 30 && <IconBtn value='load more products' styling='bestseller-products-btn' btnClick={loadMoreProducts} />}
          </section>
        </FeaturedProduct>

        <FeaturedProduct title='featured products' category='best services'>
          <section className='best-services'>
            <div className="best-services-card">
              {SERVICECARD_DETAILS.map((detail) => (
                <ServiceCard img={detail.img} title={detail.title} text={detail.text} key={detail.id} />
              ))}
            </div>
          </section>
        </FeaturedProduct>

        <FeaturedPosts>
          <section className="featured-posts-section">
            <div className="featured-posts-card">
              {Array.isArray(homeDecor.products) && homeDecor.products.map((decor) => (
                <PostCard img={decor.images[0]} title={ decor.title } description={ decor.description } key={ decor.id } />
              ))}
            </div>
          </section>
        </FeaturedPosts>

        <Testimonials />

        <CallToAction />

        <Footer />
      </>
    )
  }

  return null;
}

export default ShopPage;
