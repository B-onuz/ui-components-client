const usePagination = () => {
  const handleChangeNext = () => {
    const nextPage = currentPage + 1
    if (nextPage <= (((data || {}).services || {}).pagination || {}).pagesAmount || 0) {
      setCurrentPage(nextPage)
    }
  }

  const handleChangePrev = () => {
    const prevPage = currentPage - 1
    if (prevPage > 0) {
      setCurrentPage(currentPage - 1)
    }
  }
}

export default usePagination
