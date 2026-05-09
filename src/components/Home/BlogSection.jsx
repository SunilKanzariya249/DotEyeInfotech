import React from 'react'
import { motion } from 'framer-motion'
import { Calendar, ArrowRight } from 'lucide-react'
import { Link } from 'react-router-dom'

const blogs = [
  {
    id: 1,
    title: 'Future of Web Development in 2024',
    category: 'Technology',
    date: 'Oct 15, 2023',
    image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&q=80&w=800',
    excerpt: 'Explore the latest trends shaping the future of web development, from AI integration to new frameworks.'
  },
  {
    id: 2,
    title: 'Why Businesses Need Modern Websites',
    category: 'Business',
    date: 'Sep 28, 2023',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800',
    excerpt: 'A deep dive into why an outdated website might be costing your business potential clients.'
  },
  {
    id: 3,
    title: 'MERN Stack vs Mean Stack',
    category: 'Development',
    date: 'Sep 10, 2023',
    image: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&q=80&w=800',
    excerpt: 'Comparing the two most popular JavaScript stacks for building modern web applications.'
  }
]

const BlogSection = () => {
  return (
    <section className="py-24 bg-white dark:bg-[#0b1120]" id="blog">
      <div className="container mx-auto px-4 md:px-6">
        
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 gap-6">
          <div className="max-w-2xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="inline-block px-4 py-1.5 rounded-full bg-secondary/10 text-secondary dark:text-accent font-medium text-sm mb-4"
            >
              Latest Insights
            </motion.div>
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-3xl md:text-5xl font-bold font-sora text-slate-900 dark:text-white"
            >
              Our <span className="text-gradient">Blog</span>
            </motion.h2>
          </div>
          <Link to="/blog" className="px-6 py-2.5 rounded-full border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300 font-medium hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors hidden md:block">
            View All Posts
          </Link>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogs.map((blog, idx) => (
            <motion.article
              key={blog.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="group bg-slate-50 dark:bg-[#1e293b]/50 rounded-2xl overflow-hidden border border-slate-100 dark:border-slate-800"
            >
              <div className="relative h-56 overflow-hidden">
                <img 
                  src={blog.image} 
                  alt={blog.title} 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-4 left-4 px-3 py-1 bg-white/90 dark:bg-slate-900/90 backdrop-blur-sm rounded-full text-xs font-semibold text-secondary dark:text-accent uppercase tracking-wider">
                  {blog.category}
                </div>
              </div>
              <div className="p-6">
                <div className="flex items-center gap-2 text-slate-500 dark:text-slate-400 text-sm mb-3">
                  <Calendar size={14} />
                  {blog.date}
                </div>
                <h3 className="text-xl font-bold font-sora text-slate-900 dark:text-white mb-3 group-hover:text-secondary dark:group-hover:text-accent transition-colors line-clamp-2">
                  <Link to="/blog">{blog.title}</Link>
                </h3>
                <p className="text-sm text-slate-600 dark:text-slate-400 mb-6 line-clamp-3">
                  {blog.excerpt}
                </p>
                <Link to="/blog" className="inline-flex items-center gap-2 text-sm font-semibold text-secondary dark:text-accent group-hover:gap-3 transition-all">
                  Read More <ArrowRight size={16} />
                </Link>
              </div>
            </motion.article>
          ))}
        </div>
        
        <div className="mt-10 text-center md:hidden">
          <Link to="/blog" className="px-6 py-2.5 rounded-full border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300 font-medium hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors inline-block">
            View All Posts
          </Link>
        </div>

      </div>
    </section>
  )
}

export default BlogSection
