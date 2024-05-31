import AlertHeader from "../components/AlertHeader";
import Header from "../components/Header";
import HeroSection from "../components/HeroSection";
import FeaturedProduct from "../components/FeaturedProduct";
import ProductCard from "../components/ProductCard";
import lamp from '../assets/graphic-design1.png';
import IconBtn from "../components/IconBtn";
import ServiceCard from "../components/ServiceCard";
import { SERVICECARD_DETAILS } from "../data";
import FeaturedPosts from "../components/FeaturedPosts";
import PostCard from "../components/PostCard";
import Testimonials from "../components/Testimonials";
import CallToAction from "../components/CallToAction";
import Footer from "../components/Footer";
import '../stylings/ShopPage.css';


const ShopPage = () => {
  return (
      <>
        <AlertHeader />
      
        <Header />
      
        <HeroSection />
      
        <FeaturedProduct category='bestseller products'>
          <section className="bestseller-products">

        {/* REDUNDANT. WILL BE ADJUSTED LATER */}
          <div className="bestseller-products-cards">
            <ProductCard img={lamp} />
            <ProductCard img={lamp} />
            <ProductCard img={lamp} />
            <ProductCard img={lamp} />
            <ProductCard img={lamp} />
            <ProductCard img={lamp} />
            <ProductCard img={lamp} />
            <ProductCard img={lamp} />
            <ProductCard img={lamp} />
            <ProductCard img={lamp} />
          </div>

          <IconBtn value='load more products' styling='bestseller-products-btn' />
           
          </section>
        </FeaturedProduct>

      <FeaturedProduct category='best services'>
        <section className='best-services'>
          <div className="best-services-card">
            <ServiceCard {...SERVICECARD_DETAILS[0]} />
            <ServiceCard {...SERVICECARD_DETAILS[1]} />
            <ServiceCard {...SERVICECARD_DETAILS[2]} />
          </div>
        </section>
      </FeaturedProduct>

      <FeaturedPosts>
        <section className=" featured-posts-section">

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

export default ShopPage;