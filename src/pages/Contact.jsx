import React from 'react'
import { Helmet } from 'react-helmet-async'
import ContactSection from '../components/Home/ContactSection'

const Contact = () => {
  return (
    <>
      <Helmet>
        <title>Contact Us - DotEyeInfotech</title>
        <meta name="description" content="Get in touch with DotEyeInfotech. We're ready to help you build your next big project." />
      </Helmet>
      
      {/* Page Header */}
      <div className="bg-slate-50 dark:bg-[#0b1120] py-16 md:py-24 border-b border-slate-200 dark:border-slate-800">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold font-sora text-slate-900 dark:text-white mb-4">
            Contact <span className="text-gradient">Us</span>
          </h1>
          <p className="text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
            Have a project in mind? We'd love to hear about it. Send us a message and we'll respond as soon as possible.
          </p>
        </div>
      </div>

      <ContactSection />
    </>
  )
}

export default Contact
