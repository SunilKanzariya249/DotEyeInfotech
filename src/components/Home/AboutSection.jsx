import React from 'react'
import { motion } from 'framer-motion'
import { CheckCircle2 } from 'lucide-react'

const AboutSection = () => {
  const skills = [
    { name: 'React.js', progress: 95 },
    { name: 'Node.js', progress: 85 },
    { name: 'Express.js', progress: 85 },
    { name: 'MongoDB', progress: 90 },
    { name: 'JavaScript', progress: 95 },
    { name: 'Tailwind CSS', progress: 95 },
  ]

  return (
    <section className="py-24 bg-white dark:bg-[#0b1120]" id="about">
      <div className="container mx-auto px-4 md:px-6">
        
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          {/* Left: Founder Info & Skills */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold font-sora text-slate-900 dark:text-white mb-6">
              About <span className="text-gradient">DotEyeInfotech</span>
            </h2>
            <p className="text-slate-600 dark:text-slate-400 font-inter mb-6 leading-relaxed">
              DotEyeInfotech is a modern software development company focused on delivering innovative digital solutions for businesses worldwide. We specialize in website development, mobile applications, custom software, and scalable web technologies using modern frameworks and industry best practices.
            </p>

            <div className="bg-slate-50 dark:bg-[#1e293b]/50 rounded-2xl p-6 md:p-8 border border-slate-100 dark:border-slate-800 mb-8">
              <h3 className="text-xl font-semibold font-sora text-slate-900 dark:text-white mb-4">
                Founder - Sunil Kanzariya
              </h3>
              <p className="text-slate-600 dark:text-slate-400 font-inter text-sm leading-relaxed mb-6">
                Sunil Kanzariya is a passionate MERN Stack Developer from Morbi, Gujarat, India. He completed B.E. in Computer Engineering from Government Engineering College Rajkot with 7.99 CGPA. He specializes in building modern, responsive, and user-friendly web applications.
              </p>

              <div className="grid grid-cols-2 gap-4">
                {['REST API', 'Responsive Web Design', 'Problem Solving', 'Clean Code'].map((item) => (
                  <div key={item} className="flex items-center gap-2 text-sm text-slate-700 dark:text-slate-300 font-medium">
                    <CheckCircle2 size={16} className="text-secondary dark:text-accent" />
                    {item}
                  </div>
                ))}
              </div>
            </div>

          </motion.div>

          {/* Right: Skills Progress */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <h3 className="text-2xl font-bold font-sora text-slate-900 dark:text-white mb-8">
              Core Expertise
            </h3>
            
            <div className="space-y-6">
              {skills.map((skill, index) => (
                <div key={skill.name}>
                  <div className="flex justify-between mb-2">
                    <span className="text-sm font-medium text-slate-700 dark:text-slate-300">{skill.name}</span>
                    <span className="text-sm font-medium text-secondary dark:text-accent">{skill.progress}%</span>
                  </div>
                  <div className="w-full bg-slate-200 dark:bg-slate-800 rounded-full h-2.5 overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${skill.progress}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 1, delay: index * 0.1 }}
                      className="bg-gradient-to-r from-secondary to-accent h-2.5 rounded-full"
                    ></motion.div>
                  </div>
                </div>
              ))}
            </div>

            {/* Experience Counters */}
            <div className="grid grid-cols-3 gap-6 pt-8 mt-8 border-t border-slate-200 dark:border-slate-800">
              <div className="text-center">
                <div className="text-3xl font-bold font-sora text-slate-900 dark:text-white mb-1">50+</div>
                <div className="text-xs text-slate-500 font-medium uppercase tracking-wider">Projects</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold font-sora text-slate-900 dark:text-white mb-1">30+</div>
                <div className="text-xs text-slate-500 font-medium uppercase tracking-wider">Clients</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold font-sora text-slate-900 dark:text-white mb-1">3+</div>
                <div className="text-xs text-slate-500 font-medium uppercase tracking-wider">Years Exp</div>
              </div>
            </div>

          </motion.div>

        </div>
      </div>
    </section>
  )
}

export default AboutSection
