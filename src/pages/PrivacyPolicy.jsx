import React from 'react'
import { Helmet } from 'react-helmet-async'

const PrivacyPolicy = () => {
  return (
    <>
      <Helmet>
        <title>Privacy Policy - DotEyeInfotech</title>
        <meta name="robots" content="noindex, follow" />
      </Helmet>
      
      <div className="bg-slate-50 dark:bg-[#0b1120] py-16 md:py-24 border-b border-slate-200 dark:border-slate-800">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-3xl md:text-5xl font-bold font-sora text-slate-900 dark:text-white mb-4">
            Privacy <span className="text-gradient">Policy</span>
          </h1>
          <p className="text-slate-600 dark:text-slate-400">Last updated: October 2023</p>
        </div>
      </div>

      <section className="py-16 bg-white dark:bg-[#0F172A]">
        <div className="container mx-auto px-4 max-w-4xl prose dark:prose-invert prose-slate">
          <h2>1. Introduction</h2>
          <p>Welcome to DotEyeInfotech. We respect your privacy and are committed to protecting your personal data.</p>
          
          <h2>2. Data We Collect</h2>
          <p>We may collect, use, store and transfer different kinds of personal data about you which we have grouped together as follows:</p>
          <ul>
            <li>Identity Data includes first name, last name, username or similar identifier.</li>
            <li>Contact Data includes email address and telephone numbers.</li>
            <li>Technical Data includes internet protocol (IP) address, your login data, browser type and version.</li>
          </ul>

          <h2>3. How We Use Your Data</h2>
          <p>We will only use your personal data when the law allows us to. Most commonly, we will use your personal data in the following circumstances:</p>
          <ul>
            <li>Where we need to perform the contract we are about to enter into or have entered into with you.</li>
            <li>Where it is necessary for our legitimate interests (or those of a third party) and your interests and fundamental rights do not override those interests.</li>
          </ul>

          <h2>4. Contact Us</h2>
          <p>If you have any questions about this privacy policy or our privacy practices, please contact us at kanzariyasunil249@gmail.com.</p>
        </div>
      </section>
    </>
  )
}

export default PrivacyPolicy
