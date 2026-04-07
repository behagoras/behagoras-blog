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
      <div className="flex justify-center mb-10">
          <ul className="inline-flex -space-x-px">
            <li key="previous">
              {(currPage === 1) ? (
                <a className="bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-600 text-gray-500 dark:text-gray-400 ml-0 rounded-l-lg leading-tight py-2 px-3 cursor-default">Previous</a>
              ): (
                <a href={`/posts/${currPage - 1}`}
                  className="bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-600 text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 hover:text-gray-700 dark:hover:text-gray-200 ml-0 rounded-l-lg leading-tight py-2 px-3">Previous</a>
              )}
            </li>
            {paginationArr.map((i) => (i === currPage) ? (
              <li key={i}>
                <a href="" aria-current="page"
                  className="bg-blue-50 dark:bg-blue-900 border border-gray-300 dark:border-gray-600 text-blue-600 dark:text-blue-300 hover:bg-blue-100 dark:hover:bg-blue-800 hover:text-blue-700 dark:hover:text-blue-200 py-2 px-3">{i}</a>
              </li>
            ) : (
              <li key={i}>
                <a href={`/posts/${i}`}
                  className="bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-600 text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 hover:text-gray-700 dark:hover:text-gray-200 leading-tight py-2 px-3">{i}</a>
              </li>
            ))}
            <li key="next">
              {(currPage === maxPage) ? (
                <a className="bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-600 text-gray-500 dark:text-gray-400 rounded-r-lg leading-tight py-2 px-3 cursor-default">Next</a>
              ): (
                <a href={`/posts/${currPage + 1}`}
                  className="bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-600 text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 hover:text-gray-700 dark:hover:text-gray-200 rounded-r-lg leading-tight py-2 px-3">Next</a>
              )}
            </li>
          </ul>
      </div>
    )
  }

  export default Pagination;
