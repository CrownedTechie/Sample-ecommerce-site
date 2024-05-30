import IconBtn from "./IconBtn";
import DisplayImg from "./DisplayImg";
import post1 from "../assets/post1.png";
import '../stylings/PostCard.css';

const PostCard = () => {
  return (
        <>
          <article className="post-card w-96 border-2 border-blue-500">
              <DisplayImg  img={post1} />

              <div className="content flex flex-col gap-3 px-5 py-4">
                  
                <menu className="flex gap-4 ">
                      <button>Google</button>
                      <button>Trending</button>
                      <button>New</button>
                </menu>
                  
                <h4 className="post-title text-xl">Loudest à la Madison #1 (L'integral)</h4>

                  <p className="post-description">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Et pariatur modi, nobis eligendi laboriosam beatae earum saepe ipsam minus error debitis magnam deserunt doloremque veniam voluptatum facilis non. Dignissimos, deleniti.</p>
                  
                  <div className="post-details flex justify-between">
                      <IconBtn icon='alarm' value='22 April, 2022' />
                      <IconBtn icon='monitoring' value='10 comments' />
                  </div>

                  <button className="flex">Learn More 
                  <span className="material-symbols-outlined">arrow_forward_ios</span>
                  </button>

              </div>
          </article>
        </>
  )
}

export default PostCard;