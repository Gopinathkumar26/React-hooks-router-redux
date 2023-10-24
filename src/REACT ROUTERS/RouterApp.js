import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from './Home';
import About from './About';
import Navbar from './Navbar';
import OrderSummary from './OrderSummary';
import NoMatch from './NoMatch';
import Products from './Products';
import FeaturedProducts from './FeaturedProducts';
import NewProducts from './NewProducts';
import Users from './DYNAMIC ROUTES/Users';
import UserDetails from './DYNAMIC ROUTES/UserDetails';
import Admin from './DYNAMIC ROUTES/Admin';
import Profile from './Profile';
import { AuthProvider } from './Auth';
import Login from './Login';
import { RequireAuth } from './RequireAuth';

function RouterApp() {
  return (
    // configuring routes
    <div>
      <AuthProvider>
        <Navbar/>
        <Routes>
            <Route path='/' element={<Home/>} />            
            <Route path='about' element={<About/>} />
            <Route path='order-summary' element={<OrderSummary/>} />
            {/* Nested Routes */}
            <Route path='products' element={<Products/>} >
              {/* Index Route */}
               <Route index element={<FeaturedProducts/>} />
               <Route path='featuredproducts' element={<FeaturedProducts/>} />
               <Route path='newproducts' element={<NewProducts/>} />
            </Route>
            <Route path='users' element={<Users/>} >
              <Route path=':userId' element={<UserDetails/>} />
              <Route path='admin' element={<Admin/>} />
              {/* <Route path='users/1' element={<UserDetails/>} />
              <Route path='users/2' element={<UserDetails/>} />
              <Route path='users/3' element={<UserDetails/>} /> */}
            </Route>
            <Route path='profile' element={<RequireAuth><Profile/></RequireAuth>} />
            <Route path='login' element={<Login/>} />
            {/* NoMatch Routes */}
            <Route path='*' element={<NoMatch/>} />
        </Routes>
      </AuthProvider>
    </div>
   
  )
}

export default RouterApp