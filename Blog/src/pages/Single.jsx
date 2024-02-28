import Sidebar from "../components/Sidebar";
import "./single.css"
import SinglePost from "../components/SinglePost";
function Single() {
  return (
    <div className="single">
      <SinglePost />
      <Sidebar />
    </div>
  )
}

export default Single;
