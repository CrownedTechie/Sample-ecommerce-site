import Navbar from "../components/Navbar";
import Header from "../components/Header";
import FurnitureSection from "../components/FurnitureSection";
import FeaturedProduct from "../components/FeaturedProduct";
import ProductCard from "../components/ProductCard";
import lamp from '../assets/graphic-design1.png';
import IconBtn from "../components/IconBtn";
import '../stylings/ShopPage.css'


const ShopPage = () => {
  return (
      <>
        <Navbar />
        <Header />
        <FurnitureSection />
      
        <FeaturedProduct>
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
      </>
  )
}

export default ShopPage;