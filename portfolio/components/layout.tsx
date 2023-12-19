import React from 'react';
import Footer from './footer';
import Projects from './projects'
import { MantineProvider } from '@mantine/core';
 
export default function Layout({ children }) {
  return (
    <>
    
      <main>
        {children}
        <MantineProvider><Projects /></MantineProvider>
      </main>
      <Footer />
    </>
  )
}