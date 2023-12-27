import "./setting.css"
import Sidebar from "../components/Sidebar";
import view from "../Assets/view.jpg";
function Setting() {
  return (
    <div className="setting">
      <div className="settingWrapper">
        <div className="settingTitle">
            <span className="updateTitle">Update your Account</span>
            <span className="deleteTitle">Delete Account</span>
        </div>
        <form className="settingForm">
            <label>Profile Picture</label>
            <div className="settingPP">
                <img src={view} alt=""/>
                <label htmlFor="fileInput">
                <i className="settingPPIcon fa-regular fa-user"></i>
                </label>
                <input type="file" id="fileInput" style={{display:"none"}}/>
            </div>
            <label>Username</label>
            <input type="text" placeholder="Enter your Name"/>
            <label>Email</label>
            <input type="email" placeholder="Enter your Email"/>
            <label>Password</label>
            <input type="password" placeholder="Enter your Password"/>
            <button className="settingsubmit">Update</button>
        </form>
      </div>
      <Sidebar/>
    </div>
  )
}

export default Setting;
