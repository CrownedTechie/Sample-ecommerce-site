import IconBtn from "./IconBtn";
import DisplayImg from "./DisplayImg";
import post1 from "../assets/post1.png";
import '../stylings/PostCard.css';

const PostCard = () => {
  return (
        <>
          <article className="post-card w-80">
              <DisplayImg  img={post1} styling='' />

              <div className="content flex flex-col gap-5 px-6 py-4">
                  
                <menu className="flex gap-4 ">
                      <button>Google</button>
                      <button>Trending</button>
                      <button>New</button>
                </menu>
                  
                <h4 className="post-title text-2xl">Loudest à la Madison #1 (L'integral)</h4>

                <p className="post-description text-sm">We focus on ergonomics and meeting you where you work. It's only a keystroke away.</p>
                  
                <div className="post-details flex justify-between">
                    <IconBtn icon='alarm' value='22 April, 2022' />
                    <IconBtn icon='monitoring' value='10 comments' />
                </div>

                <button className="flex items-center gap-1 font-bold">Learn More <span className="material-symbols-outlined">arrow_forward_ios</span></button>

              </div>
          </article>
        </>
  )
}

export default PostCard;