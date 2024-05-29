import '../stylings/FeaturedProduct.css';


const FeaturedProduct = ({category, children}) => {
  return (
      <>
          
          <div className="featured-product mt-36 mb-20">
              
              <div className="heading  tracking-wide flex flex-col gap-3 text-center">
                <h4 className="font-normal text-xl">Featured products</h4>
                  <h3 className="font-bold text-2xl uppercase">{ category }</h3>
                <p className='font-normal text-sm'>Problems trying to resolve the conflict between </p>
              </div>
           
            
            {children}
        </div>
      
      </>
  )
}

export default FeaturedProduct;