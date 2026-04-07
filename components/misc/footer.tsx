const Footer = () => {
  return (
    <footer className="bg-neutral-50 dark:bg-gray-900 border-t border-neutral-200 dark:border-gray-700">
      <div className="container mx-auto px-5">
        <div className="py-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-gray-600 dark:text-gray-400">
          <p>&copy; {new Date().getFullYear()} David Behar. All rights reserved.</p>
          <nav aria-label="Social links">
            <ul className="flex items-center gap-4 list-none p-0 m-0">
              <li>
                <a
                  href="https://github.com/behagoras"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-gray-900 dark:hover:text-gray-100 transition-colors rounded focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--coral,#e8604c)] focus-visible:ring-offset-2"
                  aria-label="GitHub (opens in new tab)"
                >
                  GitHub
                </a>
              </li>
              <li>
                <a
                  href="https://linkedin.com/in/davidbehar"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-gray-900 dark:hover:text-gray-100 transition-colors rounded focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--coral,#e8604c)] focus-visible:ring-offset-2"
                  aria-label="LinkedIn (opens in new tab)"
                >
                  LinkedIn
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </footer>
  )
}

export default Footer
