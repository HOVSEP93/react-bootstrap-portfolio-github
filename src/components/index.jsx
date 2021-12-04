import React from 'react'
import Navbar from './navbar'
import Header from './header'
import About from './about'
import ProgressBarComponent from './progressbar'
import Resume from './resume'
import Portfolio from './portfolio'
import Serivces from './services'
import Testimonials from './testimonials'
import Contacts from './contacts'
import Footer from './footer'

const Main = () => {
  return (
    <>
      <Navbar />
      <Header />
      <About />
      <ProgressBarComponent />
      <Resume />
      <Portfolio />
      <Serivces />
      <Testimonials />
      <Contacts />
      <Footer />
    </>
  )
}

export default Main
