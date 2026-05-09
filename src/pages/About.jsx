import React from 'react'
import { Helmet } from 'react-helmet-async'
import AboutSection from '../components/Home/AboutSection'
import WhyChooseUs from '../components/Home/WhyChooseUs'
import TechStack from '../components/Home/TechStack'

const About = () => {
  return (
    <>
      <Helmet>
        <title>About Us - DotEyeInfotech</title>
        <meta name="description" content="Learn more about DotEyeInfotech, a modern software development company founded by Sunil Kanzariya." />
      </Helmet>
      
      {/* Page Header */}
      <div className="bg-slate-50 dark:bg-[#0b1120] py-16 md:py-24 border-b border-slate-200 dark:border-slate-800">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold font-sora text-slate-900 dark:text-white mb-4">
            About <span className="text-gradient">Us</span>
          </h1>
          <p className="text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
            Discover our journey, our team, and the core values that drive us to build powerful digital experiences.
          </p>
        </div>
      </div>

      <AboutSection />
      <WhyChooseUs />
      <TechStack />
    </>
  )
}

export default About
