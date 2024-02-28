import "./post.css";
import blog from "../Assets/code.jpg";
import { Link } from "react-router-dom";

function Post({ post }) {
  const PF = "http://localhost:3000/images/";
  return (
    <div className="post">
      {post.photo && (
        <img className="postImg" src={PF + post.photo} alt="" />
      )}

      <div className="postInfo">
        <div className="postCats">
          {post.category.map((c) => (
            <span className="postCat">{c.name}</span>

          ))}
        </div>
        <Link to={`/post/${post._id}`} className="link">
          <span className="title">
            {post.title}
          </span>
        </Link>
        <hr />
        <span className="postDate">
          {new Date(post.createdAt).toDateString()}
        </span>
      </div>
      <p className="postDesc">{post.desc}</p>
      
    </div>
  );
}

export default Post;
