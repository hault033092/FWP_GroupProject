import React from 'react'
import { Routes, Route } from 'react-router-dom'
import AboutUs from './AboutUs'
import Home from './Home'
import SignIn from './SignIn'
import SignUp from './SignUp'
import ForgotPassword from './ForgotPassword'
import JobPost from './JobPost'
import ContactUs from './ContactUs'
import Rating from './Rating'

const Pages = () => {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/AboutUs' element={<AboutUs />} />
      <Route path='/SignIn' element={<SignIn />} />
      <Route path='/SignUp' element={<SignUp />} />
      <Route path='/ForgotPassword' element={<ForgotPassword />} />
      <Route path='/JobPost' element={<JobPost />} />
      <Route path='/ContactUs' element={<ContactUs />} />
      {/* <Route path='/Rating' element={<Rating />} /> */}
    </Routes>
  )
}

export default Pages
