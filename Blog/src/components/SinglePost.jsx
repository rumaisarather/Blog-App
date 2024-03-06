import "./singlepost.css";
import wrap from "../Assets/code.jpg";
import React from "react";
import { Link } from "react-router-dom";
import { useContext, useState, useEffect } from "react";
import axios from "axios";
import { useLocation } from "react-router";
import { Context } from "../context/Context";
import AOS from 'aos';
import 'aos/dist/aos.css';

function SinglePost() {
  const location = useLocation();
  const path = location.pathname.split("/")[2];
  const [post, setPost] = useState({});
  const PF = "http://localhost:3000/images/";
  const { user } = useContext(Context);
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const [updateMode, setUpdateMode] = useState(false);

  useEffect(() => {
    const getPost = async () => {
      const res = await axios.get("http://localhost:3000/api/posts/" + path);
      setPost(res.data);
      setTitle(res.data.title);
      setDesc(res.data.desc);
    };
    getPost()

    AOS.init({duration: 2000});

  }, [path]);

  const handleDelete = async () => {
    try {
      await axios.delete(`http://localhost:3000/api/posts/${post._id}`,{
       data: { username: user.username },
    });
      window.location.replace("/");
    } catch (err) {
    }
  };
  

  const handleUpdate = async()=>{
    try {
      await axios.put(`http://localhost:3000/api/posts/${post._id}`, {
       username: user.username,
       title,
       desc,
      });
       window.location.reload();
      
    } catch (err) {
    }
  };
  
  return (
    <div className="singlePost">
      <div className="postWrapper">
        {post.photo && (
          <img src=
            {PF + post.photo}
            alt="" />
        )}
        { updateMode ? <input type="text" value={title} className="postTitleInput"  autoFocus onChange={(e)=>setTitle(e.target.value)}/> : (
            <h1 className="postTitle">
              {title}
              {post.username === user?.username && (
                <div className="postEdit">
                  <i className="postIcon fa-regular fa-pen-to-square" onClick={() => setUpdateMode(true)}></i>
                  <i className="postIcon fa-solid fa-trash" onClick={handleDelete}></i>
                </div>
              )}
            </h1>
          )}
        <div className="singlePostInfo"data-aos="fade-up">
          <span className="postAuthor">Author:
            <Link to={`/?user=${post.username}`} className="link">
              <b>{post.username}</b>
            </Link>
          </span>
          <span className="postDate">
            {new Date(post.createdAt).toDateString()}
          </span>
        
        {updateMode ? (
          <textarea className="postDescInput" value={desc} onChange={(e)=>setDesc(e.target.value)}/>
        ):(
        <p className="postDesc">{desc}</p>
          )}
          {updateMode && (
          <button className="postButton" onClick={handleUpdate}>Update</button>
          )}
      </div>
      </div>
    </div>
  );
        }


export default SinglePost;
