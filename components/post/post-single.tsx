import React from 'react';
import Author from '../../interfaces/author';
import Backlinks from '../misc/backlinks';
import PostBody from './post-body';
import PostMeta from './post-meta';

type Props = {
  title: string,
  content: string,
  date?: string,
  author?: Author,
  backlinks: { [k: string]: {
      title: string,
      excerpt: string,
    }
  }
}

function PostSingle({
  title,
  date,
  author,
  content,
  backlinks
}: Props) {
  return (
    <section className="py-12">
      <div className="max-w-4xl mx-auto">
        <article>
          {/* Article header */}
          <header className="mb-8">
            <h1 className="text-4xl font-bold mb-6 text-gray-900 dark:text-dark-text leading-tight">
              {title}
            </h1>
            
            {/* Article meta */}
            {(author || date) && (
              <div className="border-b border-gray-200 dark:border-gray-700 pb-6 mb-8">
                <PostMeta author={author} date={date}/>
              </div>
            )}
          </header>

          {/* Article content */}
          <div className="mb-12">
            <PostBody content={content}/>
          </div>

          {/* Backlinks section */}
          {Object.keys(backlinks).length > 0 && (
            <aside className="border-t border-gray-200 dark:border-gray-700 pt-8">
              <h4 className="text-lg font-bold leading-snug tracking-tight mb-4 text-gray-900 dark:text-dark-text">
                Backlinks
              </h4>
              <Backlinks backlinks={backlinks} />
            </aside>
          )}
        </article>
      </div>
    </section>
  );
}

export default PostSingle;