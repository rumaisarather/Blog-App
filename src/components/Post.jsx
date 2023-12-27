import "./post.css"
import post from  "../Assets/code.jpg";
function Post() {
  return (
    <div className="post">

      <img src={post} alt=""/>

    <div className="postInfo">
        <div className="postCats">
            <span className="postCat">Tech</span>
            <span className="postCat">Music</span>
        </div>
        <span className="title">
            Lorem ipsum dolor sit .
        </span>
        <hr/>
        <span className="postDate">
            1 day ago
        </span>
    </div>
    <p className="postDesc"> Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse nesciunt, ipsa magnam quibusdam, deserunt voluptatibus accusantium fugiat enim libero voluptates eos atque minima totam tempore delectus expedita? Minus, laboriosam ducimus.</p>
    </div>
  )
}

export default Post;
