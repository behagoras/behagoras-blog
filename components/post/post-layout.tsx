import { ReactNode } from 'react'
import Head from 'next/head'
import { TagList } from '../misc/tag-badge'
import { formatDate } from '../../lib/utils'

interface PostLayoutProps {
  title: string
  date?: string
  tags?: string[]
  excerpt?: string
  author?: string
  children: ReactNode
  backlinks?: Array<{
    slug: string
    title: string
    excerpt: string
  }>
}

export default function PostLayout({
  title,
  date,
  tags,
  excerpt,
  author,
  children,
  backlinks
}: PostLayoutProps) {
  return (
    <>
      <Head>
        <title>{title}</title>
        {excerpt && <meta name="description" content={excerpt} />}
        <meta property="og:title" content={title} />
        {excerpt && <meta property="og:description" content={excerpt} />}
        <meta property="og:type" content="article" />
        {date && <meta property="article:published_time" content={date} />}
        {author && <meta property="article:author" content={author} />}
        {tags && <meta property="article:tag" content={tags.join(', ')} />}
      </Head>

      <article className="max-w-4xl mx-auto px-4 py-8">
        {/* Post Header */}
        <header className="mb-8">
          <h1 className="text-4xl font-bold mb-4 text-gray-900 dark:text-gray-100">
            {title}
          </h1>
          
          <div className="flex flex-wrap items-center gap-4 text-sm text-gray-600 dark:text-gray-400">
            {date && (
              <time dateTime={date} className="flex items-center gap-1">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd" />
                </svg>
                {formatDate(date)}
              </time>
            )}
            
            {author && (
              <span className="flex items-center gap-1">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
                </svg>
                {author}
              </span>
            )}
          </div>
          
          {tags && tags.length > 0 && (
            <div className="mt-4">
              <TagList tags={tags} clickable />
            </div>
          )}
        </header>

        {/* Post Content */}
        <div className="prose prose-lg dark:prose-invert max-w-none">
          {children}
        </div>

        {/* Backlinks Section */}
        {backlinks && backlinks.length > 0 && (
          <section className="mt-12 pt-8 border-t border-gray-200 dark:border-gray-700">
            <h2 className="text-2xl font-semibold mb-4 text-gray-900 dark:text-gray-100">
              Referenced by
            </h2>
            <div className="grid gap-4 sm:grid-cols-2">
              {backlinks.map((link) => (
                <div 
                  key={link.slug}
                  className="p-4 border border-gray-200 dark:border-gray-700 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors"
                >
                  <h3 className="font-medium text-gray-900 dark:text-gray-100 mb-2">
                    <a 
                      href={`/posts/${link.slug}`}
                      className="hover:text-blue-600 dark:hover:text-blue-400"
                    >
                      {link.title}
                    </a>
                  </h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400 line-clamp-2">
                    {link.excerpt}
                  </p>
                </div>
              ))}
            </div>
          </section>
        )}
      </article>
    </>
  )
} 