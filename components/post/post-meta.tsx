import Author from "../../interfaces/author"
import DateFormatter from "../misc/date-formatter"

type Props = {
  author?: Author,
  date?: string,
}

const PostMeta = ({
  author,
  date
}: Props) => {
  if (!(author || date)) return null;
  return (
    <>
      <div className="flex items-center">
        {author?.picture && (
          <div className="flex shrink-0 mr-3">
            <span className="relative">
              <span className="absolute inset-0 -m-px" aria-hidden="true"><span className="absolute inset-0 -m-px bg-white dark:bg-gray-800 rounded-full"></span></span>
              <img className="relative rounded-full" src={author.picture} width="32" height="32" alt={`${author.name}'s avatar`} />
            </span>
          </div>
        )}
        <div>
          {author && (
            <>
              <span className="text-gray-600 dark:text-gray-400">By </span>
              <span className="font-medium text-gray-900 dark:text-gray-100">{author.name}</span>
            </>
          )}
          {(author && date) && <span className="text-gray-600 dark:text-gray-400"> · </span>}
          {date && (<span className="text-gray-600 dark:text-gray-400"><DateFormatter dateString={date} /></span>)}
        </div>
      </div>
    </>
  )
}

export default PostMeta;