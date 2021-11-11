import React, { useState } from 'react'

/**
 * @example
 * const [searchTerm, lazySearchTerm, { handleChangeSearchTerm }] = useSearchTerm('defaultValue', 400)
 */
const useSearchTerm = (value = '', delay = 500) => {
  const [searchTerm, setSearchTerm] = useState(value)
  const [lazyKey, setLazyKey] = useState()
  const [lazySearchTerm, setLazySearchTerm] = useState('')

  const handleChangeSearchTerm = (value) => {
    clearTimeout(lazyKey)
    setSearchTerm(value)
    setLazyKey(
      setTimeout(() => {
        setLazySearchTerm(value)
      }, delay)
    )
  }

  return [searchTerm, lazySearchTerm, { handleChangeSearchTerm }]
}

export default useSearchTerm
