import "./sidebar.css"
import about from "../Assets/about.jpg";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

function Sidebar() {
  const [cats,setCats]= useState([]);
  useEffect(()=>{
    const getCats = async()=>{
      const res = await axios.get("http://localhost:3000/api/category");
      setCats(res.data);
    };
    getCats();
  },[]);

  return (
    <div className="Sidebar">
      <div className="about">
        <span className="Title">ABOUT ME</span>
       <img src={about} alt="" /> 
        <p>"Embark on this exciting adventure with me as I have created a space for sharing and discovering incredible blogs. Your unique voice and favorite reads will play a vital role in shaping our growing community.
          Together, lets foster a plateform that celebrates the diversity and richness of the written word. Join in,connect,and be part of this journey!"
        </p>
      </div>
      <div className="category">
        <span className="Title">CATEGORIES</span>
        <ul className="sidebarList">
          {cats.map((c) =>(
            <Link to={`/?cat=${c.name}`} className="link">
             <li className="sidebarListItem">{c.name}</li>
            </Link>
            
          ))}
        </ul>
      </div>
      <div className="category">
        <span className="Title">FOLLOW US</span>
        <div className="social">
          <i className="socialIcon fab fa-facebook-square"></i>
          <i className="socialIcon fab fa-twitter-square"></i>
          <i className="socialIcon fab fa-pinterest-square"></i>
          <i className="socialIcon fab fa-instagram-square"></i>
        </div>
      </div>
    </div>
  )
}

export default Sidebar;
