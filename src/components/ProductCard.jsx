import DisplayImg from './DisplayImg';
import '../stylings/ProductCard.css';

const ProductCard = ({img, title, brand, category, oldPrice, discountedPrice}) => {
  return (
      <>
          <div className="product-card">
              <DisplayImg img={ img } styling='product-card-image'/>

                <h5>{ title }</h5>

                <p>{ category }</p>

              <div className="price-box">
                  <p className="old-price">${ oldPrice }</p>
                  <span className="new-price">${ discountedPrice }</span>
              </div>
          </div>
      </>
  )
}

export default ProductCard;