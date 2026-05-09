import React from 'react'
import { Helmet } from 'react-helmet-async'
import BlogSection from '../components/Home/BlogSection'

const Blog = () => {
  return (
    <>
      <Helmet>
        <title>Blog - DotEyeInfotech</title>
        <meta name="description" content="Read our latest articles, insights, and news about technology, business, and web development." />
      </Helmet>
      
      {/* Page Header */}
      <div className="bg-slate-50 dark:bg-[#0b1120] py-16 md:py-24 border-b border-slate-200 dark:border-slate-800">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold font-sora text-slate-900 dark:text-white mb-4">
            Our <span className="text-gradient">Blog</span>
          </h1>
          <p className="text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
            Insights, updates, and expert opinions on software development and digital transformation.
          </p>
        </div>
      </div>

      <BlogSection />
    </>
  )
}

export default Blog
