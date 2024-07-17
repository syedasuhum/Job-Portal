import React from 'react'
import { Routes, Route } from 'react-router-dom';
import Header from './Home';
import Login from "./Login";
import Register from "./Register";
import JobListing from './JobListing';


const AllRoutes = () => {
  return (
    <div>
        <Routes>
          <Route path="/" element={<Header />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path='/joblisting' element={<JobListing/>}  />
        </Routes>
    </div>
  )
}

export default AllRoutes;