import React from 'react'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { Code, Smartphone, Database, ArrowRight } from 'lucide-react'

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Background Gradients */}
      <div className="absolute inset-0 bg-gradient-premium opacity-50 z-0"></div>
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-secondary/20 dark:bg-secondary/10 rounded-full blur-3xl z-0 animate-pulse"></div>
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent/20 dark:bg-accent/10 rounded-full blur-3xl z-0 animate-pulse" style={{ animationDelay: '2s' }}></div>

      <div className="container mx-auto px-4 md:px-6 relative z-10 grid lg:grid-cols-2 gap-12 items-center">
        
        {/* Content */}
        <div className="max-w-2xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-slate-100 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700 text-sm font-medium text-secondary dark:text-accent mb-6"
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-secondary opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-secondary"></span>
            </span>
            Transforming Ideas Into Digital Solutions
          </motion.div>
          
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold font-sora text-slate-900 dark:text-white leading-[1.1] tracking-tight mb-6"
          >
            Building Powerful <br />
            <span className="text-gradient">Digital Experiences</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-lg text-slate-600 dark:text-slate-400 font-inter mb-8 leading-relaxed max-w-xl"
          >
            DotEyeInfotech delivers scalable websites, mobile apps, and custom software solutions for startups and businesses worldwide.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex flex-wrap items-center gap-4"
          >
            <Link to="/contact" className="px-8 py-4 rounded-full bg-secondary hover:bg-blue-700 text-white font-medium transition-all shadow-lg shadow-blue-500/30 hover:shadow-blue-500/50 flex items-center gap-2 group">
              Get Started
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link to="/projects" className="px-8 py-4 rounded-full bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-900 dark:text-white font-medium hover:bg-slate-50 dark:hover:bg-slate-700 transition-colors shadow-sm">
              View Projects
            </Link>
          </motion.div>
        </div>

        {/* Visual / Floating Elements */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="relative h-[500px] hidden lg:flex items-center justify-center"
        >
          <div className="relative w-full max-w-md aspect-square">
            <div className="absolute inset-0 bg-gradient-to-br from-secondary to-accent rounded-full opacity-20 blur-3xl"></div>
            
            {/* Center abstract shape */}
            <div className="absolute inset-8 rounded-full border-2 border-dashed border-slate-300 dark:border-slate-700 animate-spin-slow"></div>
            
            {/* Floating Icons */}
            <motion.div
              animate={{ y: [0, -20, 0] }}
              transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
              className="absolute top-10 left-10 w-16 h-16 glass rounded-2xl flex items-center justify-center text-secondary dark:text-accent shadow-xl"
            >
              <Code size={32} />
            </motion.div>
            
            <motion.div
              animate={{ y: [0, 20, 0] }}
              transition={{ repeat: Infinity, duration: 5, ease: "easeInOut" }}
              className="absolute top-1/2 -right-4 w-20 h-20 glass rounded-2xl flex items-center justify-center text-secondary dark:text-accent shadow-xl"
            >
              <Smartphone size={40} />
            </motion.div>

            <motion.div
              animate={{ y: [0, -15, 0] }}
              transition={{ repeat: Infinity, duration: 4.5, ease: "easeInOut" }}
              className="absolute bottom-10 left-1/3 w-14 h-14 glass rounded-2xl flex items-center justify-center text-secondary dark:text-accent shadow-xl"
            >
              <Database size={28} />
            </motion.div>

            {/* Central illustration placeholder (glassy card) */}
            <div className="absolute inset-1/4 glass rounded-3xl p-6 flex flex-col justify-between shadow-2xl z-10 border border-white/40 dark:border-slate-700/50">
              <div className="flex gap-2">
                <div className="w-3 h-3 rounded-full bg-red-400"></div>
                <div className="w-3 h-3 rounded-full bg-yellow-400"></div>
                <div className="w-3 h-3 rounded-full bg-green-400"></div>
              </div>
              <div className="space-y-3 mt-4">
                <div className="h-2 bg-slate-200 dark:bg-slate-700 rounded w-3/4"></div>
                <div className="h-2 bg-slate-200 dark:bg-slate-700 rounded w-full"></div>
                <div className="h-2 bg-slate-200 dark:bg-slate-700 rounded w-5/6"></div>
              </div>
              <div className="mt-auto flex justify-between items-end">
                <div className="w-12 h-12 bg-secondary/20 rounded-full"></div>
                <div className="w-20 h-8 bg-accent/20 rounded-lg"></div>
              </div>
            </div>
            
          </div>
        </motion.div>

      </div>
    </section>
  )
}

export default Hero
