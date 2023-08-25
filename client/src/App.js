import "./App.css";
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import TopBar from "./components/TopBar";
import About from "./components/About";
import Contact from "./components/Contact";
import Policy from "./components/Policy";
import NavBar from "./components/NavBar";
import HomeScreen from "./screens/HomeScreen";
import CartScreen from "./screens/CartScreen";
import Registe from "./screens/Registe";
import Login from "./screens/Login";
import OrderScreen from "./screens/OrderScreen";
import AdminScreen from "./screens/AdminScreen";
import Pizzalist from "./components/Admin/Pizzalist";
import Userlist from "./components/Admin/Userlist";
import AddNewPizza from "./components/Admin/AddNewPizza";
import OrderList from "./components/Admin/OrderList";
import EditPizza from "./components/Admin/EditPizza";

function App() {
  return (
    <BrowserRouter>
      <React.StrictMode>
        <TopBar />
        <NavBar />
        <Routes> 
          <Route path="/admin/*" element={<AdminScreen />} />
          <Route path="/admin/userlist" element={<Userlist />} />
          <Route path="/admin/editpizza/:pizzaId" element={<EditPizza />} />
          <Route path="/admin/pizzalist" element={<Pizzalist />} />
          <Route path="/admin/addnewpizza" element={<AddNewPizza />} />
          <Route path="/admin/orderlist" element={<OrderList />} />
          <Route path="/orders" element={<OrderScreen />} exact />
          <Route path="/login" element={<Login />} exact />
          <Route path="/register" element={<Registe />} exact />
          <Route path="/cart" element={<CartScreen />} exact />
          <Route path="/about" element={<About />} exact />
          <Route path="/contact" element={<Contact />} exact />
          <Route path="/policy" element={<Policy />} exact />
          <Route path="/" element={<HomeScreen />} exact />
        </Routes>
      </React.StrictMode>
    </BrowserRouter>
  );
}

export default App;
