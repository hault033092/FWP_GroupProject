import React from 'react'
import {Routes, Route} from 'react-router-dom'
import AboutUs from './AboutUs'
import BeFreelancer from './BeFreelancer'
import FindFreelancer from './FindFreelancer'
import Home from './Home'
import SignIn from './SignIn'
import SignUp from './SignUp'
import ForgotPassword from './ForgotPassword'


const Pages = () => {
  return (
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/AboutUs' element={<AboutUs/>}/>
      <Route path='/SignIn' element={<SignIn/>}/>
      <Route path='/SignUp' element={<SignUp/>}/>
      <Route path='/ForgotPassword' element={<ForgotPassword/>}/>
      <Route path='/FindFreelancer' element={<FindFreelancer/>}/>
      <Route path='/BeFreelancer' element={<BeFreelancer/>}/>
    </Routes>
  )
}

export default Pages