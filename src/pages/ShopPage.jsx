import Navbar from "../components/Navbar";
import Header from "../components/Header";
import FurnitureSection from "../components/FurnitureSection";
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
        <Navbar />
        <Header />
        <FurnitureSection />
      
        <FeaturedProduct category='bestseller products'>
        <section className="flex flex-col justify-center items-center px-24 ">

          <div className="product grid grid-cols-5 grid-flow-row gap-9 py-16">
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

          <IconBtn value='load more products' styling='uppercase px-8 py-3 font-bold' />
           
          </section>
         
        </FeaturedProduct>

      <FeaturedProduct category='best services'>
        <section className='flex justify-around items-center mt-28 mx-36'>

          <div className="grid grid-cols-3">
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