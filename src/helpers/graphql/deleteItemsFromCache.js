import escapeStringRegexp from 'escape-string-regexp'

/**
 * @example
 * deleteItemsFromCache('ListItem')
 * @returns {Function} Returns a update function
 */
export default (typeKey) => (cache) => {
  Object.keys(cache.data.data).forEach((key) => {
    const rgx = new RegExp(`/^${escapeStringRegexp(typeKey)}/`)
    return key.match(rgx) && cache.data.delete(key)
  })
}
