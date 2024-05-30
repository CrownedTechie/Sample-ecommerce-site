import '../stylings/FeaturedPosts.css';

const FeaturedPosts = ({children}) => {
  return (
      <>
          <div className="featured-posts-heading">
            <h6>Practice Advice</h6>
            <h2>Featured Posts</h2>
          </div>
            
          {children}
      </>
  )
}

export default FeaturedPosts;