import IconBtn from "./IconBtn";
import DisplayImg from "./DisplayImg";
import post1 from "../assets/post1.png";
import '../stylings/PostCard.css';

const PostCard = ({img, title, description}) => {
  return (
        <>
          <article className="post-card">
              <DisplayImg  img={img} />

              <div className="post-card-content">
                <menu>
                      <button>Google</button>
                      <button>Trending</button>
                      <button>New</button>
                </menu>
                  
                <h4 className="post-title">{ title }</h4>

                <p className="post-description">{ description }</p>
                  
                <div className="post-details">
                    <IconBtn icon='alarm' value='22 April, 2022' />
                    <IconBtn icon='monitoring' value='10 comments' />
                </div>

                <button>Learn More <span className="material-symbols-outlined">arrow_forward_ios</span></button>
              </div>

              <div className="alert-tag">new</div>

          </article>
        </>
  )
}

export default PostCard;