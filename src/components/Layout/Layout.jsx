import React from 'react'
import Navbar from './Navbar'
import Footer from './Footer'
import CursorGlow from './CursorGlow'

const Layout = ({ children, theme, toggleTheme }) => {
  return (
    <>
      <CursorGlow />
      <Navbar theme={theme} toggleTheme={toggleTheme} />
      <main className="min-h-screen relative z-10">
        {children}
      </main>
      <Footer />
    </>
  )
}

export default Layout
