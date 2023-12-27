 import "./home.css"
import Posts from "../components/Posts";
 import Sidebar from "../components/Sidebar";

 import Logo from "../Assets/view.jpg";
 function Home() {
   return (
    <>
     <div className="blog">
      <span className="blogs">Blog</span>
     </div>
       <div className="main">
       <img src={Logo} alt="" />
     </div>
     <div className='Home'>
    <Posts/> 
     <Sidebar/>
     </div>
 </>
 
   )
 }

export default Home;
