import React from 'react'
import Footer from './components/Footer'
import Header from './components/Header'
import Pages from './pages/Pages'
import ContactUs from './pages/ContactUs'
import FreelancerProfile from './pages/FreelancerProfile'
import ClientProfile from './pages/ClientProfile'
import JobPost from './pages/JobPost'
import Rating from './pages/Rating'

const App = () => {
  return (
    <>
      <Header />
      {/* <ClientProfile /> */}
      {/* <FreelancerProfile /> */}
      <Pages />
      {/* <Rating /> */}
      {/* <JobPost /> */}
      <Footer />
    </>
  )
}

export default App
