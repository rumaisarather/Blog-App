import "./register.css"
import { Link } from "react-router-dom";
function Register()  {
  return (
    <div className="register">
        <span className="registerTitle">Register</span>
      <form className="registerForm">
      <label>Username</label>
        <input type="text" className="loginInput" placeholder="Enter your username.."/>
        <label>Email</label>
        <input type="email" className="loginInput" placeholder="Enter your email.."/>
        <label>Password</label>
        <input type="password" className="loginInput" placeholder="Enter your password.."/>
        <button className="registerButton">Register</button>
      </form>
      <button className="registerLoginButton">Login</button>
      <Link className="link" to ="/Login">Login</Link>
    </div>
  )
}

export default Register;
