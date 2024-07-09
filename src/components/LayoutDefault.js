import React from 'react'
import Header from './header/header'
import Footer from './footer/footer'

const LayoutDefault = ({children}) => {
  return (
    <div>
      <Header />
      <main className="min-h-screen">
        {children}
      </main>
      <Footer />
    </div>
  )
}

export default LayoutDefault
