import React from 'react'
import Hero from '../myComponent/Hero'
import WhyUs from '../myComponent/WhyUs'
import TopPoints from '../myComponent/TopPoints'
import WhyTrueAdBlocker from '../myComponent/WhyTrueAdBlocker'
import FeaturesOfTrueAdBlocker from '../myComponent/FeaturesOfTrueAdBlocker'
import Benefits from '../myComponent/Benefits'
import Use from '../myComponent/Use'
import AboutTrueAdBlocker from '../myComponent/AboutTrueAdBlocker'
import FrequentlyAskedQuestion from '../myComponent/FrequentlyAskedQuestion'
import Reviews from '../myComponent/Reviews'
import Footer from '../myComponent/Footer'


const Home = () => {
  return (
    <>
      <Hero/>
      <WhyUs/>
      <TopPoints/>
      <WhyTrueAdBlocker/>
      <FeaturesOfTrueAdBlocker/>
      <Benefits/>
      <Use/>
      <AboutTrueAdBlocker/>
      <FrequentlyAskedQuestion/>
      <Reviews/>
      <Footer/>
    </>
  )
}

export default Home