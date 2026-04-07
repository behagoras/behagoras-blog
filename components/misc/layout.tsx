import React from 'react'
import Footer from './footer'
import Header from './header'

type Props = {
  children: React.ReactNode
}

const Layout = ({ children }: Props) => {
  return (
    <div className="flex flex-col min-h-screen overflow-hidden bg-white dark:bg-dark-bg text-gray-900 dark:text-dark-text transition-colors duration-200">
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:top-2 focus:left-2 focus:z-50 focus:px-4 focus:py-2 focus:bg-white focus:text-gray-900 focus:rounded focus:shadow-lg focus:outline-none focus:ring-2 focus:ring-[var(--coral,#e8604c)]"
      >
        Skip to main content
      </a>
      <Header />
      <main id="main-content" className="grow pt-16 md:pt-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          {children}
        </div>
      </main>
      <Footer />
    </div>
  )
}

export default Layout
