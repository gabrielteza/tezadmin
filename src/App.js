import Sidebar from "./components/sidebar/Sidebar";
import Topbar from "./components/topbar/Topbar";
import "./app.css";
import Home from "./pages/home/home";
import { BrowserRouter as Router, Route, Routes, BrowserRouter } from "react-router-dom";
import UserList from "./pages/userList/UserList";
import User from "./pages/user/User";

function App() {
  return (
    <BrowserRouter>
      <Topbar />
      <div className="container">
        <Sidebar />
          <Routes>
            <Route exact path="/" element={<Home/>}/>
            </Routes> 
            <Routes>
            <Route path="/users" element={<UserList/>}/>
            </Routes> 
            <Routes>
            <Route path="/user/:userId" element={<User/>}/>
            </Routes> 
      </div>
    </BrowserRouter>
  );
}

export default App;
