import Sidebar from "./components/sidebar/Sidebar";
import Topbar from "./components/topbar/Topbar";
import "./app.css";
import Home from "./pages/home/home";
import { BrowserRouter as Router, Route, Routes, BrowserRouter } from "react-router-dom";
import UserList from "./pages/userList/UserList";
import User from "./pages/user/User";
import NewUser from "./pages/newPage/NewUser";
import ProductList from "./pages/productList/ProductList";
import Product from "./pages/product/Product";
import Transactions from "./pages/transactions/Transactions";

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
            <Routes>
            <Route path="/newUser" element={<NewUser/>}/>
            </Routes> 
            <Routes>
            <Route path="/products" element={<ProductList/>}/>
            </Routes> 
            <Routes>
            <Route path="/product/:productId" element={<Product/>}/>
            </Routes> 
            <Routes>
            <Route path="/newproduct" element={<NewUser/>}/>
            </Routes> 
            <Routes>
            <Route path="/transactions" element={<Transactions/>}/>
            </Routes> 
      </div>
    </BrowserRouter>
  );
}

export default App;
