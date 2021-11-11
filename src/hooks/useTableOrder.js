import React, { useState } from 'react'
/*
 * Example
 * const { sort, order, handleChangeOrder } = useTableOrder('name', 'asc')
 */
const useTableOrder = (defaultSort = '', defaultOrder = 'asc') => {
  const [sort, setSort] = useState(defaultSort)
  const [order, setOrder] = useState(defaultOrder)

  const handleChangeOrder = (item) => {
    if (item.key === sort) {
      setOrder(order === 'asc' ? 'desc' : 'asc')
    } else {
      setSort(item.key)
      setOrder('asc')
    }
  }
  return { sort, order, handleChangeOrder }
}

export default useTableOrder
