import Link from 'next/link'
import { useState } from 'react'

interface WikiLinkProps {
  href: string
  title?: string
  children: React.ReactNode
  preview?: {
    title: string
    excerpt: string
  }
}

export default function WikiLink({ href, title, children, preview }: WikiLinkProps) {
  const [showPreview, setShowPreview] = useState(false)

  return (
    <span 
      className="relative inline-block"
      onMouseEnter={() => setShowPreview(true)}
      onMouseLeave={() => setShowPreview(false)}
    >
      <Link 
        href={href} 
        className="text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 underline decoration-dotted hover:decoration-solid transition-colors"
        title={title}
      >
        {children}
      </Link>
      
      {preview && showPreview && (
        <div className="absolute z-10 p-4 mt-2 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-600 rounded-lg shadow-lg max-w-xs w-max">
          <h4 className="font-semibold text-gray-900 dark:text-gray-100 mb-2">
            {preview.title}
          </h4>
          <p className="text-sm text-gray-600 dark:text-gray-300 line-clamp-3">
            {preview.excerpt}
          </p>
        </div>
      )}
    </span>
  )
}

// Utility function to parse [[wikilink]] syntax
export function parseWikiLinks(content: string): string {
  return content.replace(/\[\[([^\]]+)\]\]/g, (match, linkText) => {
    const [title, displayText] = linkText.split('|')
    const slug = title.toLowerCase().replace(/\s+/g, '-')
    const display = displayText || title
    
    return `<WikiLink href="/posts/${slug}" title="${title}">${display}</WikiLink>`
  })
}

// Convert [[Link]] to proper URLs
export function convertWikiLinksToUrls(content: string): string {
  return content.replace(/\[\[([^\]]+)\]\]/g, (match, linkText) => {
    const [title] = linkText.split('|')
    const slug = title.toLowerCase()
      .replace(/\s+/g, '-')
      .replace(/[^a-z0-9-]/g, '')
    
    return `/posts/${slug}`
  })
} 