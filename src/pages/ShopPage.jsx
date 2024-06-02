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
import '../stylings/ShopPage.css';
import { useGetProductsQuery } from "../api/Products";

const ShopPage = () => {
  const { data, error, isLoading } = useGetProductsQuery();

  if (isLoading) {
    return <h1>...Loading</h1>
  }

  if (error) {
    return <h1>na error be this</h1>
  }
  
  if (data !== undefined) {
    const { products } = data;

    console.log(products);

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
            <IconBtn
              value='load more products'
              styling='bestseller-products-btn' />
          </section>
        </FeaturedProduct>

        <FeaturedProduct title='featured products' category='best services'>
          <section className='best-services'>
            <div className="best-services-card">
              <ServiceCard {...SERVICECARD_DETAILS[0]} />
              <ServiceCard {...SERVICECARD_DETAILS[1]} />
              <ServiceCard {...SERVICECARD_DETAILS[2]} />
            </div>
          </section>
        </FeaturedProduct>

        <FeaturedPosts>
          <section className="featured-posts-section">
            <div className="featured-posts-card">
              <PostCard />
              <PostCard />
              <PostCard />
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
