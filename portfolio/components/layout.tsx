import React from 'react';
import Footer from './footer';
import Projects from './projects'
 
export default function Layout({ children }) {
  return (
    <>
      <main>
        {children}
        <Projects />
      </main>
      <Footer />
    </>
  )
}