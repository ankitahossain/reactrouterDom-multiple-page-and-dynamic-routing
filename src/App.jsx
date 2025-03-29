import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router";

import Home from './Pages/Home';
import About from './Pages/About';
import Contact from './Pages/Contact';
import Service from './Pages/Service';
import Blog from './Pages/Blog';
import Product from './Pages/Product';
import CommonLayout from './Component/CommonLayout';
import Error from './Component/Error'
import ProductDetails from './Pages/ProductDetails';



const App = () => {
  return (
    <BrowserRouter>
      <Routes>

        <Route path='/' element={<CommonLayout />}>
          <Route index  element={<Home />}></Route>
          <Route path='/about' element={<About />}></Route>
          <Route path='/contact' element={<Contact />}></Route>
          <Route path='/service' element={<Service />}></Route>
          <Route path='/blog' element={<Blog />}></Route>
          <Route path='/product' element={<Product />}></Route>
          <Route path='/product/:id' element ={<ProductDetails/>}></Route>
          <Route path='*' element = {<Error/>}></Route>

        </Route>

      </Routes>

    </BrowserRouter>
  )
}

export default App
