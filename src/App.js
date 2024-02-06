

import {  Route, createBrowserRouter, createRoutesFromElements, RouterProvider, useLoaderData } from "react-router-dom";
import './App.css';
import Layout from "./components/Layout";
import Home from "./pages/Home"
import Gallery from "./pages/Gallery";
import Aboutus from "./pages/Aboutus";
import Login from "./pages/Auth/Login";
import Register from "./pages/Auth/Register";
import Itemdetails from "./pages/Itemdetails";
import Dashboard from "./components/Product/Dashboard";
import Price from "./components/Product/Price";
import Review from "./components/Product/Review";
import api, { getItem, isLoggedIn } from "./Api";
import Error from "./pages/Error";
import Cart from "./user/Cart";
import {action as loginAction} from "./Api";
import Protected from './Host/Protected'

let router=createBrowserRouter(createRoutesFromElements(

          <Route path="/" loader={getItem} element={<Layout />}>
            <Route index loader={api} element={<Home />} />
            <Route path="*" element={<Error />}  />
            <Route path="gallery" loader={api} element={<Gallery />} />

            <Route path="gallery/:id" element={<Itemdetails  />} loader={api}>
              <Route index element={<Dashboard />} />
              <Route path="dashboard" element={<Dashboard />} />
              <Route path="price" element={<Price />} />
              <Route path="review" element={<Review />} />
            </Route>
            <Route path="aboutus" loader={api} element={<Aboutus />} />
            <Route path="cart" loader={getItem} element={<Cart />} />
            <Route path="login"  action={loginAction} element={<Login />} />
            <Route path="register" element={<Register />} />
            <Route path="protected" loader={isLoggedIn} element={<Protected/>}/>
          </Route>
      
))
function App() {


  return (
    <div className="App">

<RouterProvider router={router} />
    </div>
  );
}

export default App;
