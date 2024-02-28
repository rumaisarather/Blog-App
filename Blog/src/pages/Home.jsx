import React, { useEffect, useState } from "react";
import Posts from "../components/Posts";
import Sidebar from "../components/Sidebar";
import "./home.css";
import Header from "../components/Header";
import { useLocation } from "react-router-dom";
// import axios from "axios";

function Home() {

   const[posts,setPosts] = useState([]);
   const {search} = useLocation();

   useEffect(()=>{
  //   const fetchPosts = async ()=>{
  //      const res = await axios.get("http://localhost:3000/api/posts/")
  //      setPosts(res.data)

  // By fetch API method
  const apiUrl = "http://localhost:3000/api/posts" + search;
  fetch(apiUrl).then((response) => {
    if (!response.ok) {
      throw new Error('failed to fetch:${response.statusText}');
    }
    return response.json();
  })
    .then((posts) => {
    console.log(posts);
      setPosts(posts);

    })
    .catch((err) => {
      console.error("Error on fetch:" ,err);
    });
  },[search]);
  return (
    <>
      <Header />
      <div className='Home'>
        <Posts posts={posts}/>
        <Sidebar />
      </div>
    </>
  );
}
export default Home;