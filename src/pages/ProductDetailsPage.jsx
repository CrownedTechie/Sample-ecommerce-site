import AlertHeader from "../components/AlertHeader";
import Header from "../components/Header";
import SingleProduct from "../components/SingleProduct";
import ProductDescription from "../components/ProductDescription";
import '../stylings/ProductsDetailsPage.css';
import ProductCard from "../components/ProductCard";
import { LOGOS } from "../data";
import DisplayImg from "../components/DisplayImg";
import Footer from "../components/Footer";
import { useParams, Link } from 'react-router-dom';
import { useGetSingleProductQuery, useGetProductCategoryQuery } from "../api/Products";
import { useState, useEffect } from "react";


const ProductDetailsPage = () => {

  const { productId } = useParams();
  const [category, setCategory] = useState(null);

  const { data: product, error: productError, isLoading: productLoading } = useGetSingleProductQuery(productId);

  useEffect(() => {
    if (product && product.category) {
      setCategory(product.category);
    }
  }, [product]);

  const { data: categoryData, error: categoryDataError, isLoading: categoryDataLoading, refetch: refetchCategory } = useGetProductCategoryQuery(category, {
    skip: !category
  });

  useEffect(() => {
    if (category) {
      refetchCategory();
    }
  }, [category, refetchCategory]);

  if (productLoading || categoryDataLoading) return <div>Loading...</div>;
  if (productError || categoryDataError) return <div>Error: {productError?.message || categoryDataError?.message}</div>;

  // console.log(categoryData)
  // console.log(product)

  return (
    <>
      <AlertHeader />

      <Header />

      {product && (
        <>
          <SingleProduct
            img={product.images[0]}
            title={product.title}
            price={product.price}
            availabilityStatus={product.availabilityStatus}
            NoOfReviews={product.reviews.length}
            description={product.description}
          />
          <ProductDescription
            noOfReviews={product.reviews.length}
            img={product.images[1]}
            brand={product.brand}
            description={product.description}
            category={product.category}
          />
        </>
      )}

        <section className="bestsellerProducts-section">
          <h3>bestseller products</h3>
          <hr />

          <div>
            <div>
              {categoryData && Array.isArray(categoryData.products) && categoryData.products.map((product) => (
                <Link to={`/product/${product.id}`} key={product.id} >
                  <ProductCard
                    key={product.id}
                    img={product.images[0]}
                    title={product.title}
                    brand={product.brand}
                    category={product.category}
                    oldPrice={product.price}
                    discountedPrice={product.discountPercentage}
                  />
                </Link>
              ))}
            </div>
          </div>
        </section>

      <section className="logos-section">
          <div>
              {LOGOS.map((logo, index) => (
                <DisplayImg img={logo} key={index} />
              ))}
            </div>
      </section>

      <Footer />

    </>
  )
}

export default ProductDetailsPage;