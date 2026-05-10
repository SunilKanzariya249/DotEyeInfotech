import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ExternalLink } from 'lucide-react'
import { FaGithub as Github } from 'react-icons/fa'

const projects = [
  {
    id: 1,
    title: 'Girija Quartz',
    category: 'E-Commerce',
    tech: ['React.js', 'Node.js', 'Express.js', 'MongoDB', 'Tailwind CSS'],
    description: 'Developed a modern and responsive business website for Girija Quartz focused on showcasing products with a premium UI and smooth user experience.',
    image: 'https://images.unsplash.com/photo-1563861826100-9cb868fdbe1c?auto=format&fit=crop&q=80&w=800',
    liveLink: '#',
    githubLink: '#'
  },
  {
    id: 2,
    title: 'Portfolio Website',
    category: 'Portfolio',
    tech: ['React.js', 'Tailwind CSS', 'JavaScript'],
    description: 'Created a professional personal portfolio website with modern responsive UI and interactive project showcases.',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800',
    liveLink: '#',
    githubLink: '#'
  },
  {
    id: 3,
    title: 'SaaS Dashboard UI',
    category: 'Web App',
    tech: ['React.js', 'Framer Motion', 'Tailwind CSS'],
    description: 'A comprehensive analytics dashboard for SaaS companies featuring real-time data visualization and complex state management.',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=800',
    liveLink: '#',
    githubLink: '#'
  }
]

const categories = ['All', 'E-Commerce', 'Portfolio', 'Web App']

const ProjectsSection = () => {
  const [filter, setFilter] = useState('All')

  const filteredProjects = filter === 'All' 
    ? projects 
    : projects.filter(project => project.category === filter)

  return (
    <section className="py-24 bg-white dark:bg-[#0b1120]" id="projects">
      <div className="container mx-auto px-4 md:px-6">
        
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 gap-6">
          <div className="max-w-2xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="inline-block px-4 py-1.5 rounded-full bg-secondary/10 text-secondary dark:text-accent font-medium text-sm mb-4"
            >
              Our Portfolio
            </motion.div>
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-3xl md:text-5xl font-bold font-sora text-slate-900 dark:text-white"
            >
              Featured <span className="text-gradient">Projects</span>
            </motion.h2>
          </div>

          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex flex-wrap gap-2"
          >
            {categories.map(cat => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={`px-5 py-2 rounded-full text-sm font-medium transition-all ${
                  filter === cat 
                    ? 'bg-secondary text-white shadow-md' 
                    : 'bg-slate-100 dark:bg-[#1e293b] text-slate-600 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-800'
                }`}
              >
                {cat}
              </button>
            ))}
          </motion.div>
        </div>

        <motion.div layout className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence>
            {filteredProjects.map(project => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
                className="group rounded-2xl overflow-hidden bg-slate-50 dark:bg-[#1e293b]/50 border border-slate-200 dark:border-slate-800"
              >
                {/* Image Box */}
                <div className="relative h-60 overflow-hidden">
                  <div className="absolute inset-0 bg-slate-900/20 group-hover:bg-slate-900/40 transition-colors z-10"></div>
                  <img 
                    src={project.image} 
                    alt={project.title} 
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity z-20 gap-4">
                    <a href={project.liveLink} className="w-12 h-12 rounded-full bg-white text-secondary flex items-center justify-center hover:bg-secondary hover:text-white transition-colors transform translate-y-4 group-hover:translate-y-0 duration-300">
                      <ExternalLink size={20} />
                    </a>
                    <a href={project.githubLink} className="w-12 h-12 rounded-full bg-white text-slate-900 flex items-center justify-center hover:bg-slate-900 hover:text-white transition-colors transform translate-y-4 group-hover:translate-y-0 duration-300 delay-75">
                      <Github size={20} />
                    </a>
                  </div>
                </div>

                {/* Content Box */}
                <div className="p-6">
                  <div className="text-xs font-semibold text-secondary dark:text-accent mb-2 tracking-wider uppercase">
                    {project.category}
                  </div>
                  <h3 className="text-xl font-bold font-sora text-slate-900 dark:text-white mb-3 group-hover:text-secondary dark:group-hover:text-accent transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-sm text-slate-600 dark:text-slate-400 mb-6 line-clamp-2">
                    {project.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech, i) => (
                      <span key={i} className="px-2.5 py-1 text-xs font-medium bg-slate-200 dark:bg-slate-800 text-slate-700 dark:text-slate-300 rounded-md">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

      </div>
    </section>
  )
}

export default ProjectsSection
