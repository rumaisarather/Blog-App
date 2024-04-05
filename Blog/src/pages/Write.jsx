import "./write.css"
import wrte from "../Assets/view.jpg";
import { useContext ,useState } from "react";
import axios from "axios";
import{Context} from "../context/Context";

function Write() {
  const [title,setTitle] = useState("");
  const [desc,setDesc] = useState("");
  const [file,setFile] = useState(null);
const {user} = useContext(Context);

  const handleSubmit = async(e)=>{
  e.preventDefault(); 
  const newPost= {
    username:user.username,
    title,
    desc,
  };
  if(file){
    const data = new FormData();
    const filename = Date.now() + file.name;
    data.append("name",filename);
    data.append("file",file);
    newPost.photo = filename;
    try{
await axios.post("http://localhost:3000/api/upload",data);
    }catch(err){}
  }
  try{
    const res = await axios.post("http://localhost:3000/api/posts", newPost);
    window.location.replace("/");
  }catch(err){}
  };
  
  return (
    <div className="write">
      {file && (
      <img src={URL.createObjectURL(file)} alt="" />
      )}
      
      <form className="writeForm" onSubmit={handleSubmit}>
        <div className="writeFormGroup">
          <label htmlFor="fileInput">
            <i className="icon fas fa-plus"></i>
          </label>
          <input type="file" id="fileInput" style={{ display: "none" }} onChange={(e)=> setFile(e.target.files[0])}/>
          <input type="text" placeholder="Title" className="writeInput" autoFocus={true} onChange={(e)=> setTitle(e.target.value)}/>
        </div>
        <div className="writeFormGroup">
          <textarea placeholder="Tell your story..." type="text" className="writeInputText" onChange={(e)=> setDesc(e.target.value)}></textarea>
        </div>
        <button className="writeSubmit" type="submit">Publish</button>
      </form>
    </div>
  )
}

export default Write;
