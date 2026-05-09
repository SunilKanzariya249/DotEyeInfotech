import React from 'react'
import { motion } from 'framer-motion'
import { MonitorPlay, Smartphone, Code2, Database, LayoutTemplate, ShoppingCart, Activity, Search } from 'lucide-react'

const services = [
  {
    icon: <MonitorPlay className="w-8 h-8" />,
    title: 'Website Development',
    description: 'Custom, responsive websites built with modern frameworks to establish your online presence.'
  },
  {
    icon: <Smartphone className="w-8 h-8" />,
    title: 'Mobile App Development',
    description: 'High-performance iOS and Android applications providing seamless user experiences.'
  },
  {
    icon: <Code2 className="w-8 h-8" />,
    title: 'Software Development',
    description: 'Scalable and secure custom software solutions tailored to your business needs.'
  },
  {
    icon: <Database className="w-8 h-8" />,
    title: 'MERN Stack Solutions',
    description: 'Full-stack web applications using MongoDB, Express.js, React.js, and Node.js.'
  },
  {
    icon: <LayoutTemplate className="w-8 h-8" />,
    title: 'UI/UX Design',
    description: 'Intuitive and engaging user interfaces that delight users and drive conversions.'
  },
  {
    icon: <ShoppingCart className="w-8 h-8" />,
    title: 'E-Commerce Solutions',
    description: 'Robust online stores with secure payment gateways and inventory management.'
  },
  {
    icon: <Activity className="w-8 h-8" />,
    title: 'API Integration',
    description: 'Seamless integration of third-party APIs to extend your application functionality.'
  },
  {
    icon: <Search className="w-8 h-8" />,
    title: 'SEO & Optimization',
    description: 'Technical SEO and performance tuning to rank higher on search engines.'
  }
]

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
}

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5 }
  }
}

const ServicesSection = () => {
  return (
    <section className="py-24 bg-slate-50 dark:bg-[#0F172A] relative" id="services">
      {/* Background elements */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-slate-100 to-transparent dark:from-[#1e293b]/30 dark:to-transparent pointer-events-none"></div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        
        <div className="text-center max-w-2xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-block px-4 py-1.5 rounded-full bg-secondary/10 text-secondary dark:text-accent font-medium text-sm mb-4"
          >
            What We Offer
          </motion.div>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl md:text-5xl font-bold font-sora text-slate-900 dark:text-white mb-6"
          >
            Premium IT <span className="text-gradient">Services</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-slate-600 dark:text-slate-400"
          >
            We provide end-to-end software development services using modern technologies to help your business grow and succeed in the digital world.
          </motion.p>
        </div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="bg-white dark:bg-[#1e293b]/50 p-8 rounded-2xl border border-slate-100 dark:border-slate-800 hover:border-secondary dark:hover:border-accent transition-all duration-300 group hover:-translate-y-2 shadow-sm hover:shadow-xl"
            >
              <div className="w-16 h-16 rounded-2xl bg-slate-50 dark:bg-slate-800 flex items-center justify-center text-secondary dark:text-accent mb-6 group-hover:scale-110 transition-transform duration-300 group-hover:bg-gradient-to-br group-hover:from-secondary group-hover:to-accent group-hover:text-white">
                {service.icon}
              </div>
              <h3 className="text-xl font-semibold font-sora text-slate-900 dark:text-white mb-3">
                {service.title}
              </h3>
              <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed mb-6">
                {service.description}
              </p>
              <button className="text-sm font-medium text-secondary dark:text-accent flex items-center gap-2 group-hover:gap-3 transition-all">
                Learn More <span className="opacity-0 group-hover:opacity-100 transition-opacity">→</span>
              </button>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  )
}

export default ServicesSection
