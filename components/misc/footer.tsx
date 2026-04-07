const Footer = () => {
  return (
    <footer className="bg-neutral-50 dark:bg-gray-900 border-t border-neutral-200 dark:border-gray-700">
      <div className="container mx-auto px-5">
        <div className="py-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-gray-600 dark:text-gray-400">
          <p>&copy; {new Date().getFullYear()} David Behar. All rights reserved.</p>
          <div className="flex items-center gap-4">
            <a
              href="https://github.com/behagoras"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-gray-900 dark:hover:text-gray-100 transition-colors"
              aria-label="GitHub"
            >
              GitHub
            </a>
            <a
              href="https://linkedin.com/in/davidbehar"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-gray-900 dark:hover:text-gray-100 transition-colors"
              aria-label="LinkedIn"
            >
              LinkedIn
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
