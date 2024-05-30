import '../stylings/FeaturedPosts.css';

const FeaturedPosts = ({children}) => {
  return (
      <>
          <div className="title-group text-center py-24 font-bold mb-5">
            <h6 className='mb-3'>Practice Advice</h6>
            <h2 className="text-4xl">Featured Posts</h2>
          </div>
            
          {children}
      </>
  )
}

export default FeaturedPosts;