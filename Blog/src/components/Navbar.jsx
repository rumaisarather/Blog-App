import { Link } from "react-router-dom";
import "./navbar.css";

import logo from "../Assets/user.jpg";
import { Context } from "../context/Context";
import { useRef, useContext } from "react";

function Navbar() {

  const { user, dispatch } = useContext(Context);
  const handleLogout =()=>{
    dispatch({type:"LOGOUT"});
  }
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
            <Link className="link" to="/"> My Blog</Link></li>
          <li className="centerListItem"><Link className="link" to="/Write">Write</Link></li>
          <li className="centerListItem" onClick={handleLogout}>{user && "logout"}</li>
        </ul>
      </div>
      <div className="rightSide">
        {
          user ? (
            <Link to ="/setting">
            <img src={logo} alt="" /> </Link>
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

