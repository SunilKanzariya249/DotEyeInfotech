import React from 'react'
import { Helmet } from 'react-helmet-async'
import Hero from '../components/Home/Hero'
import AboutSection from '../components/Home/AboutSection'
import ServicesSection from '../components/Home/ServicesSection'
import ProjectsSection from '../components/Home/ProjectsSection'
import WhyChooseUs from '../components/Home/WhyChooseUs'
import TechStack from '../components/Home/TechStack'
import Testimonials from '../components/Home/Testimonials'
import BlogSection from '../components/Home/BlogSection'
import ContactSection from '../components/Home/ContactSection'

const Home = () => {
  return (
    <>
      <Helmet>
        <title>DotEyeInfotech - Transforming Ideas Into Digital Solutions</title>
        <meta name="description" content="DotEyeInfotech delivers scalable websites, mobile apps, and custom software solutions for startups and businesses." />
      </Helmet>
      
      <Hero />
      <AboutSection />
      <ServicesSection />
      <ProjectsSection />
      <WhyChooseUs />
      <TechStack />
      <Testimonials />
      <BlogSection />
      <ContactSection />
    </>
  )
}

export default Home
