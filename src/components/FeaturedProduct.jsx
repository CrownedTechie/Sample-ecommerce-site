import '../stylings/FeaturedProduct.css';


const FeaturedProduct = ({children}) => {
  return (
      <>
          
          <div className="featured-product mt-12">
              
              <div className="heading text-center tracking-wide flex flex-col gap-3">
                <h4 className="font-normal text-xl">Featured products</h4>
                <h3 className="font-bold text-2xl uppercase">Bestseller products</h3>
                <p className='font-normal text-sm'>Problems trying to resolve the conflict between </p>
              </div>
           
            
            {children}
        </div>
      
      </>
  )
}

export default FeaturedProduct;