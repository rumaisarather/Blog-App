 import "./sidebar.css"
 import about from "../Assets/about.jpg";
function Sidebar() {
  return (
    <div className="Sidebar">
      <div className="about">
        <span className="Title">ABOUT ME</span>
         <img src={about} alt=""/>
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing .provident vitae quas facere, reprehenderit odio minima quibusdam quia ad quasi?</p>
       </div>
      <div className="category">
      <span className="Title">CATEGORIES</span>
         <ul className="sidebarList">
         <li className="sidebarListItem">Life</li>
        <li className="sidebarListItem">Music</li>
         <li className="sidebarListItem">Tech</li>
         <li className="sidebarListItem">Cooking</li>                  
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
