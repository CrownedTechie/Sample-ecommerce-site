import '../stylings/FeaturedProduct.css';


const FeaturedProduct = ({category, children}) => {
  return (
      <>
          
          <div className="featured-product">
              
              <div className="featured-product-heading">
                <h4>Featured products</h4>
                <h3>{ category }</h3>
                <p>Problems trying to resolve the conflict between </p>
              </div>
           
            
            {children}
        </div>
      
      </>
  )
}

export default FeaturedProduct;