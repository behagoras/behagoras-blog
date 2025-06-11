import React from 'react'
import Footer from './footer'
import Header from './header'

type Props = {
  children: React.ReactNode
}

const Layout = ({ children }: Props) => {
  return (
    <div className="flex flex-col min-h-screen overflow-hidden bg-white dark:bg-dark-bg text-gray-900 dark:text-dark-text transition-colors duration-200">
      <Header />
      <main className="grow pt-16 md:pt-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          {children}
        </div>
      </main>
      <Footer />
    </div>
  )
}

export default Layout
