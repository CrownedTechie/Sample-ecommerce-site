import IconBtn from "./IconBtn";
import DisplayImg from "./DisplayImg";
import post1 from "../assets/post1.png";
import '../stylings/PostCard.css';

const PostCard = () => {
  return (
        <>
          <article className="post-card">
              <DisplayImg  img={post1} />

              <div className="post-card-content">
                <menu>
                      <button>Google</button>
                      <button>Trending</button>
                      <button>New</button>
                </menu>
                  
                <h4 className="post-title">Loudest à la Madison #1 (L'integral)</h4>

                <p className="post-description">We focus on ergonomics and meeting you where you work. It's only a keystroke away.</p>
                  
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