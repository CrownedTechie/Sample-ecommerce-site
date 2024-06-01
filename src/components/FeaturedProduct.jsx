import '../stylings/FeaturedProduct.css';


const FeaturedProduct = ({category, title, children, extraClass}) => {
  return (
      <>
          
          <div className={`featured-product ${extraClass}`}>
              
              <div className="featured-product-heading">
                <h4>{title}</h4>
                <h3>{ category }</h3>
                <p>Problems trying to resolve the conflict between </p>
              </div>
           
            
            {children}
        </div>
      
      </>
  )
}

export default FeaturedProduct;