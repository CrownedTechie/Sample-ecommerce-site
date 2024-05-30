import AlertHeader from "../components/AlertHeader";
import Header from "../components/Header";
import HeroSection from "../components/HeroSection";
import FeaturedProduct from "../components/FeaturedProduct";
import ProductCard from "../components/ProductCard";
import lamp from '../assets/graphic-design1.png';
import IconBtn from "../components/IconBtn";
import ServiceCard from "../components/ServiceCard";
import trendingUp from "../assets/trending-up.png";
import bookReader from "../assets/bookReader.png";
import twoPager from "../assets/two-pager.png";
import FeaturedPosts from "../components/FeaturedPosts";
import PostCard from "../components/PostCard";
import '../stylings/ShopPage.css';


const ShopPage = () => {
  return (
      <>
        <AlertHeader />
      
        <Header />
      
        <HeroSection />
      
        <FeaturedProduct category='bestseller products'>
          <section className="bestseller-products">

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
            <ServiceCard
              img={ bookReader }
              title='Easy Wins'
              text='Get your best looking smile now!'
              />
              
              <ServiceCard
              img={ twoPager }
              title='Concrete'
              text='Defalcate is most focused in helping you discover your most beautiful smile'
              />
              
              <ServiceCard
              img={ trendingUp }
              title='Hack Growth'
              text='Overcame any hurdle or any other problem.'
              />
          </div>
    
        </section>
      </FeaturedProduct>

      <FeaturedPosts>
        <section className="flex justify-center items-center">

          <div className="grid grid-cols-3 gap-5">
            <PostCard />
            <PostCard />
            <PostCard />
          </div>
         
        </section>
      </FeaturedPosts>



      </>
  )
}

export default ShopPage;