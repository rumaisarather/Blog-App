import "./App.css"
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Single from "./pages/Single";
import Setting from "./pages/Setting";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Write from "./pages/Write";
import {
    BrowserRouter as Router,
    Routes, Route, Link
} from "react-router-dom";
import { useContext } from "react";
import { Context } from "./context/Context";


function App() {
    const {user} = useContext(Context);
    return (
        <div className="App">
            <Router>
                <Navbar />
                <Routes>
                    <Route path="/" exact element={<Home />}></Route>
                    <Route path="/Register" element={user ? <Home /> : <Register />}></Route>
                    <Route path="/Login" element={user ? <Home /> : <Login />}></Route>
                    <Route path="/Write" element={user ? <Write /> : <Register />}></Route>
                    <Route path="/Setting" element={user ? <Setting /> : <Register />}></Route>
                    <Route path="/Post/:PostId" element={<Single />}></Route>
                </Routes>
            </Router>

        </div>
)
}

export default App;