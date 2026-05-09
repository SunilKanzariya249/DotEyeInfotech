import React from 'react'
import { motion } from 'framer-motion'
import { Zap, Shield, Smartphone, TrendingUp, DollarSign, Headphones, Code, Search } from 'lucide-react'

const features = [
  { icon: <Code />, title: 'Modern Technologies', desc: 'Built with the latest frameworks for optimal performance.' },
  { icon: <Zap />, title: 'Fast Delivery', desc: 'Agile methodology ensures quick turnaround times.' },
  { icon: <Smartphone />, title: 'Responsive Design', desc: 'Flawless experience across all devices and screen sizes.' },
  { icon: <TrendingUp />, title: 'Scalable Solutions', desc: 'Architecture that grows alongside your business.' },
  { icon: <Search />, title: 'SEO Friendly', desc: 'Optimized structure for better search engine rankings.' },
  { icon: <Shield />, title: 'Secure Development', desc: 'Industry standard security practices implemented.' },
  { icon: <DollarSign />, title: 'Affordable Pricing', desc: 'Competitive rates without compromising quality.' },
  { icon: <Headphones />, title: 'Dedicated Support', desc: '24/7 maintenance and technical support.' },
]

const WhyChooseUs = () => {
  return (
    <section className="py-24 bg-slate-50 dark:bg-[#0F172A]">
      <div className="container mx-auto px-4 md:px-6">
        
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-block px-4 py-1.5 rounded-full bg-secondary/10 text-secondary dark:text-accent font-medium text-sm mb-4"
          >
            Why Choose Us
          </motion.div>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl md:text-5xl font-bold font-sora text-slate-900 dark:text-white mb-6"
          >
            Your Partner for <span className="text-gradient">Digital Success</span>
          </motion.h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.1 }}
              className="p-6 rounded-2xl bg-white dark:bg-[#1e293b]/80 border border-slate-100 dark:border-slate-800 hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
            >
              <div className="w-12 h-12 rounded-xl bg-secondary/10 dark:bg-slate-800 flex items-center justify-center text-secondary dark:text-accent mb-4">
                {React.cloneElement(feature.icon, { size: 24 })}
              </div>
              <h3 className="text-lg font-bold font-sora text-slate-900 dark:text-white mb-2">
                {feature.title}
              </h3>
              <p className="text-sm text-slate-600 dark:text-slate-400">
                {feature.desc}
              </p>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  )
}

export default WhyChooseUs
