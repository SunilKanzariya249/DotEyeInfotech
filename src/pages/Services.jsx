import React from 'react'
import { Helmet } from 'react-helmet-async'
import ServicesSection from '../components/Home/ServicesSection'
import WhyChooseUs from '../components/Home/WhyChooseUs'

const Services = () => {
  return (
    <>
      <Helmet>
        <title>Our Services - DotEyeInfotech</title>
        <meta name="description" content="Explore our premium IT services including Web Development, Mobile Apps, and Custom Software." />
      </Helmet>
      
      {/* Page Header */}
      <div className="bg-slate-50 dark:bg-[#0b1120] py-16 md:py-24 border-b border-slate-200 dark:border-slate-800">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold font-sora text-slate-900 dark:text-white mb-4">
            Our <span className="text-gradient">Services</span>
          </h1>
          <p className="text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
            Comprehensive digital solutions tailored to help your business thrive in the modern landscape.
          </p>
        </div>
      </div>

      <ServicesSection />
      <WhyChooseUs />
    </>
  )
}

export default Services
