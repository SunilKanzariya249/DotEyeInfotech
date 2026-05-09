import React from 'react'
import { motion } from 'framer-motion'

const techList = [
  { name: 'React.js', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg' },
  { name: 'Node.js', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg' },
  { name: 'MongoDB', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg' },
  { name: 'Express.js', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg' },
  { name: 'JavaScript', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg' },
  { name: 'Tailwind CSS', icon: 'https://upload.wikimedia.org/wikipedia/commons/d/d5/Tailwind_CSS_Logo.svg' },
  { name: 'Bootstrap', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg' },
  { name: 'MySQL', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg' },
  { name: 'GitHub', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg' },
]

const TechStack = () => {
  return (
    <section className="py-20 bg-white dark:bg-[#0b1120] overflow-hidden">
      <div className="container mx-auto px-4 md:px-6 mb-10 text-center">
        <h2 className="text-2xl md:text-3xl font-bold font-sora text-slate-900 dark:text-white">
          Technologies We Use
        </h2>
      </div>

      {/* Marquee Animation */}
      <div className="relative w-full flex overflow-hidden">
        <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-white dark:from-[#0b1120] to-transparent z-10"></div>
        <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-white dark:from-[#0b1120] to-transparent z-10"></div>
        
        <motion.div 
          animate={{ x: ["0%", "-50%"] }}
          transition={{ repeat: Infinity, duration: 20, ease: "linear" }}
          className="flex whitespace-nowrap items-center gap-12 px-6"
          style={{ width: "max-content" }}
        >
          {/* Double the list for seamless loop */}
          {[...techList, ...techList].map((tech, idx) => (
            <div key={idx} className="flex flex-col items-center justify-center gap-3 grayscale hover:grayscale-0 opacity-50 hover:opacity-100 transition-all duration-300">
              <img src={tech.icon} alt={tech.name} className="h-16 w-16 object-contain" />
              <span className="text-sm font-medium text-slate-600 dark:text-slate-400">{tech.name}</span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

export default TechStack
