import React from 'react'
import { Helmet } from 'react-helmet-async'

const TermsConditions = () => {
  return (
    <>
      <Helmet>
        <title>Terms & Conditions - DotEyeInfotech</title>
        <meta name="robots" content="noindex, follow" />
      </Helmet>
      
      <div className="bg-slate-50 dark:bg-[#0b1120] py-16 md:py-24 border-b border-slate-200 dark:border-slate-800">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-3xl md:text-5xl font-bold font-sora text-slate-900 dark:text-white mb-4">
            Terms & <span className="text-gradient">Conditions</span>
          </h1>
          <p className="text-slate-600 dark:text-slate-400">Last updated: October 2023</p>
        </div>
      </div>

      <section className="py-16 bg-white dark:bg-[#0F172A]">
        <div className="container mx-auto px-4 max-w-4xl prose dark:prose-invert prose-slate">
          <h2>1. Agreement to Terms</h2>
          <p>By accessing our website, you agree to be bound by these Terms and Conditions and agree that you are responsible for the agreement with any applicable local laws.</p>
          
          <h2>2. Use License</h2>
          <p>Permission is granted to temporarily download one copy of the materials on DotEyeInfotech's website for personal, non-commercial transitory viewing only.</p>

          <h2>3. Disclaimer</h2>
          <p>The materials on DotEyeInfotech's website are provided on an 'as is' basis. DotEyeInfotech makes no warranties, expressed or implied, and hereby disclaims and negates all other warranties including, without limitation, implied warranties or conditions of merchantability, fitness for a particular purpose, or non-infringement of intellectual property or other violation of rights.</p>

          <h2>4. Limitations</h2>
          <p>In no event shall DotEyeInfotech or its suppliers be liable for any damages (including, without limitation, damages for loss of data or profit, or due to business interruption) arising out of the use or inability to use the materials on DotEyeInfotech's website.</p>
        </div>
      </section>
    </>
  )
}

export default TermsConditions
