import DisplayImg from './DisplayImg';
import '../stylings/ProductCard.css';

const ProductCard = ({img, title, dept, oldPrice, discountedPrice}) => {
  return (
      <>
          <div className="product-card flex flex-col gap-3">
              <DisplayImg img={img} styling='w-58'/>

              <h5 className='text-center font-bold text-lg'>Graphic Design</h5>

              <p className='text-center font-bold'>English Department</p>

              <div className="price flex gap-2 font-bold text-base justify-center">
                  <p className="old-price">$16.48</p>
                  <span className="new-price">$6.48</span>
              </div>
          </div>
      </>
  )
}

export default ProductCard;