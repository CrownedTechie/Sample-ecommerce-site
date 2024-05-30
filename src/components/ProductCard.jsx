import DisplayImg from './DisplayImg';
import '../stylings/ProductCard.css';

const ProductCard = ({img, title, dept, oldPrice, discountedPrice}) => {
  return (
      <>
          <div className="product-card">
              <DisplayImg img={img} styling='product-card-image'/>

              <h5>Graphic Design</h5>

              <p>English Department</p>

              <div className="price-box">
                  <p className="old-price">$16.48</p>
                  <span className="new-price">$6.48</span>
              </div>
          </div>
      </>
  )
}

export default ProductCard;