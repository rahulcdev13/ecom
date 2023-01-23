import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./Home";
import About from "./About";
import Products from "./Products";
import Contact from "./Contact";
import Cart from "./Cart";

import SingleProduct from './SingleProduct'

const App = () => {
  return <> 
  <Router>
  <Routes>
      <Route path='/' element={<Home />}></Route>ssss
      <Route path='/about' element={<About />}></Route> 
      <Route path='/products' element={<Products />}></Route> 
      <Route path='/contact' element={<Contact />}></Route> 
      <Route path='/singleproduct/:id' element={<SingleProduct />}></Route> 
      <Route path='/cart' element={<Cart />}></Route>
      <Route></Route>

    </Routes>
  </Router>
  </>;
};

export default App;
