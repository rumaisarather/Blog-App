import {Link} from "react-router-dom";
import "./navbar.css"
import Logo from "../Assets/blog2.jpg";
function Navbar() {
  const user = true;
  return (
    <div className="navbar">
      <div className="leftSide">
        <i className="Icon fab fa-facebook-square"></i>
        <i className="Icon fab fa-twitter-square"></i>
        <i className="Icon fab fa-pinterest-square"></i>
        <i className="Icon fab fa-instagram-square"></i>
      </div>

      <div className="center">
<ul className="centerList">
<li className="centerListItem">
  <Link className="link" to="/"> Home</Link></li>
<li className="centerListItem"><Link className="link" to="/">About</Link></li>
<li className="centerListItem"><Link className="link" to="/">Contact</Link></li>
<li className="centerListItem"><Link className="link" to="/Write">Write</Link></li>
<li className="centerListItem">{user && "Logout"}</li>
</ul>
</div>
     <div className="rightSide">
        {
          user ?(
          <img src={Logo} alt="" />
          ) : (
            <ul className="centerList">
              <li className="centerListItem">
            <Link className="link" to="/Login">Login</Link></li>
            <li className="centerListItem">
            <Link className="link" to="/Register">Register</Link></li>
            </ul>
          )
        }
       <i className="search fas fa-search"></i>
        </div>
     </div>
  );
}
 
export default Navbar;

