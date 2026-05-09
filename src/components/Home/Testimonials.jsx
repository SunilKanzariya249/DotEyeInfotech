import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Quote, ChevronLeft, ChevronRight } from 'lucide-react'

const testimonials = [
  {
    id: 1,
    content: "DotEyeInfotech transformed our business with a stunning e-commerce platform. Their attention to detail and modern design approach completely exceeded our expectations.",
    author: "Rahul Sharma",
    role: "CEO, Girija Quartz",
    avatar: "https://i.pravatar.cc/150?img=11"
  },
  {
    id: 2,
    content: "The team at DotEyeInfotech is incredibly talented. They delivered our custom SaaS dashboard ahead of schedule and the code quality was exceptional.",
    author: "Priya Patel",
    role: "Founder, TechNova",
    avatar: "https://i.pravatar.cc/150?img=5"
  },
  {
    id: 3,
    content: "Outstanding service and communication throughout the entire mobile app development process. I highly recommend them for any tech startup.",
    author: "Amit Desai",
    role: "CTO, QuickDelivery",
    avatar: "https://i.pravatar.cc/150?img=8"
  }
]

const Testimonials = () => {
  const [current, setCurrent] = useState(0)

  const next = () => setCurrent((current + 1) % testimonials.length)
  const prev = () => setCurrent((current - 1 + testimonials.length) % testimonials.length)

  return (
    <section className="py-24 bg-slate-50 dark:bg-[#0F172A] relative overflow-hidden">
      {/* Background Decor */}
      <div className="absolute top-1/2 left-0 w-64 h-64 bg-secondary/10 dark:bg-secondary/5 rounded-full blur-3xl -translate-y-1/2 -translate-x-1/2"></div>
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-block px-4 py-1.5 rounded-full bg-secondary/10 text-secondary dark:text-accent font-medium text-sm mb-4"
          >
            Client Reviews
          </motion.div>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl md:text-5xl font-bold font-sora text-slate-900 dark:text-white"
          >
            What Our <span className="text-gradient">Clients Say</span>
          </motion.h2>
        </div>

        <div className="max-w-4xl mx-auto relative">
          
          <div className="relative min-h-[300px] flex items-center justify-center">
            <AnimatePresence mode="wait">
              <motion.div
                key={current}
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -50 }}
                transition={{ duration: 0.4 }}
                className="bg-white dark:bg-[#1e293b] p-8 md:p-12 rounded-3xl shadow-xl border border-slate-100 dark:border-slate-800 text-center relative w-full"
              >
                <Quote className="absolute top-8 left-8 text-slate-200 dark:text-slate-800 w-16 h-16 opacity-50" />
                
                <p className="text-xl md:text-2xl text-slate-700 dark:text-slate-300 font-inter italic leading-relaxed mb-8 relative z-10">
                  "{testimonials[current].content}"
                </p>
                
                <div className="flex flex-col items-center justify-center gap-3">
                  <img 
                    src={testimonials[current].avatar} 
                    alt={testimonials[current].author} 
                    className="w-16 h-16 rounded-full object-cover border-2 border-secondary dark:border-accent"
                  />
                  <div>
                    <h4 className="text-lg font-bold font-sora text-slate-900 dark:text-white">
                      {testimonials[current].author}
                    </h4>
                    <p className="text-sm text-slate-500 dark:text-slate-400">
                      {testimonials[current].role}
                    </p>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Controls */}
          <div className="flex justify-center gap-4 mt-8">
            <button 
              onClick={prev}
              className="w-12 h-12 rounded-full bg-white dark:bg-[#1e293b] border border-slate-200 dark:border-slate-700 flex items-center justify-center text-slate-600 dark:text-slate-300 hover:bg-secondary hover:text-white dark:hover:bg-secondary transition-colors shadow-sm"
            >
              <ChevronLeft size={24} />
            </button>
            <button 
              onClick={next}
              className="w-12 h-12 rounded-full bg-white dark:bg-[#1e293b] border border-slate-200 dark:border-slate-700 flex items-center justify-center text-slate-600 dark:text-slate-300 hover:bg-secondary hover:text-white dark:hover:bg-secondary transition-colors shadow-sm"
            >
              <ChevronRight size={24} />
            </button>
          </div>

        </div>

      </div>
    </section>
  )
}

export default Testimonials
