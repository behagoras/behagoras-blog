import PreviewLink from "./preview-link"

const Footer = () => {
  return (
    <footer className="bg-neutral-50 dark:bg-gray-900 border-t border-neutral-200 dark:border-gray-700">
      <div className="container mx-auto px-5">
        <div className="py-28 flex flex-col lg:flex-row items-center">
          {/* <PreviewLink href="/statically-generated">Statically Generated</PreviewLink> with Next.js. */}
        </div>
      </div>
    </footer>
  )
}

export default Footer