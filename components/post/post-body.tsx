type Props = {
  content: string
}

const PostBody = ({ content }: Props) => {
  return (
    <div
      className="prose prose-lg dark:prose-invert max-w-none prose-headings:text-gray-900 dark:prose-headings:text-gray-100 prose-p:text-gray-700 dark:prose-p:text-gray-300 prose-a:text-blue-600 dark:prose-a:text-blue-400 prose-strong:text-gray-900 dark:prose-strong:text-gray-100 prose-code:text-gray-900 dark:prose-code:text-gray-100 prose-pre:bg-gray-100 dark:prose-pre:bg-gray-800 prose-blockquote:text-gray-700 dark:prose-blockquote:text-gray-300"
      dangerouslySetInnerHTML={{ __html: content }}
    />
  )
}

export default PostBody
