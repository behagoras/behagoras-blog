type Props = {
    currPage: number
    maxPage: number
  }

  function getPaginationArr(currPage: number, maxPage: number, numItems: number = 5) {
    const pageList = [currPage]
    while (pageList.length < numItems) {
      const leftDelta = Math.abs(pageList[0] - currPage);
      const rightDelta = Math.abs(pageList[pageList.length - 1] - currPage);
      if ((leftDelta <= rightDelta || pageList[pageList.length - 1] == maxPage) && pageList[0] > 1) {
        pageList.unshift(pageList[0] - 1);
      } else if ((leftDelta > rightDelta || pageList[0] == 1) && pageList[pageList.length - 1] < maxPage) {
        pageList.push(pageList[pageList.length - 1] + 1);
      } else {
        break;
      }
    }
    return pageList;
  }

  function Pagination({ currPage, maxPage }: Props) {
    const paginationArr = getPaginationArr(currPage, maxPage);
    return (
      <nav aria-label="Blog pagination" className="flex justify-center mb-10">
          <ul className="inline-flex -space-x-px">
            <li key="previous">
              {(currPage === 1) ? (
                <span className="bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-600 text-gray-500 dark:text-gray-400 ml-0 rounded-l-lg leading-tight py-2 px-3 cursor-default" aria-disabled="true">Previous</span>
              ): (
                <a href={`/posts/${currPage - 1}`}
                  className="bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-600 text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 hover:text-gray-700 dark:hover:text-gray-200 ml-0 rounded-l-lg leading-tight py-2 px-3 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--coral,#e8604c)]" rel="prev">Previous</a>
              )}
            </li>
            {paginationArr.map((i) => (i === currPage) ? (
              <li key={i}>
                <span aria-current="page" aria-label={`Page ${i}, current page`}
                  className="bg-blue-50 dark:bg-blue-900 border border-gray-300 dark:border-gray-600 text-blue-600 dark:text-blue-300 py-2 px-3 font-semibold">{i}</span>
              </li>
            ) : (
              <li key={i}>
                <a href={`/posts/${i}`} aria-label={`Page ${i}`}
                  className="bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-600 text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 hover:text-gray-700 dark:hover:text-gray-200 leading-tight py-2 px-3 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--coral,#e8604c)]">{i}</a>
              </li>
            ))}
            <li key="next">
              {(currPage === maxPage) ? (
                <span className="bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-600 text-gray-500 dark:text-gray-400 rounded-r-lg leading-tight py-2 px-3 cursor-default" aria-disabled="true">Next</span>
              ): (
                <a href={`/posts/${currPage + 1}`}
                  className="bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-600 text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 hover:text-gray-700 dark:hover:text-gray-200 rounded-r-lg leading-tight py-2 px-3 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--coral,#e8604c)]" rel="next">Next</a>
              )}
            </li>
          </ul>
      </nav>
    )
  }

  export default Pagination;
