import React from 'react'
import { Helmet } from 'react-helmet-async'
import ProjectsSection from '../components/Home/ProjectsSection'

const Projects = () => {
  return (
    <>
      <Helmet>
        <title>Our Projects - DotEyeInfotech</title>
        <meta name="description" content="View our portfolio of successful projects including E-commerce websites, personal portfolios, and custom web applications." />
      </Helmet>
      
      {/* Page Header */}
      <div className="bg-slate-50 dark:bg-[#0b1120] py-16 md:py-24 border-b border-slate-200 dark:border-slate-800">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold font-sora text-slate-900 dark:text-white mb-4">
            Our <span className="text-gradient">Portfolio</span>
          </h1>
          <p className="text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
            A showcase of our recent work and the digital solutions we've crafted for our clients.
          </p>
        </div>
      </div>

      <ProjectsSection />
    </>
  )
}

export default Projects
