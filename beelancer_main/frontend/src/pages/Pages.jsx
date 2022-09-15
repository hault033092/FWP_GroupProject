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
import JobList from '../JobList/JobList'
import ProfileSetting from './ProfileSetting'
import FreelancerProfile from './FreelancerProfile'

const Pages = () => {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/AboutUs' element={<AboutUs />} />
      <Route path='/JobList' element={<JobList />} />
      <Route path='/SignIn' element={<SignIn />} />
      <Route path='/SignUp' element={<SignUp />} />
      <Route path='/ForgotPassword' element={<ForgotPassword />} />
      <Route path='/JobPost' element={<JobPost />} />
      <Route path='/ContactUs' element={<ContactUs />} />
      <Route path='/profileSetting' element={<ProfileSetting />} />
      <Route path='/FreelancerProfile' element={<FreelancerProfile />} />
      {/* <Route path='/Rating' element={<Rating />} /> */}
    </Routes>
  )
}

export default Pages
