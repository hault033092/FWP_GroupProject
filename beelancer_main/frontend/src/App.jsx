import React from 'react'
import Footer from './components/Footer'
import Header from './components/Header'
import SignUp from './pages/SignUp'
import SignIn from './pages/SignIn'
import ForgotPassword from './pages/ForgotPassword'
import Pages from './pages/Pages'

const App = () => {
  return (
    <>
      <Header />
      <SignUp />
      <SignIn />
      <ForgotPassword />
      <Footer />
    </>
  )
}

export default App;
