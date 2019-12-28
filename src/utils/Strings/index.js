/**
 * For split long texts
 * @param {String} text
 * @param {Number} maxSize
 * @returns {String} returns the transformed text
 * @example
 * // return 'This te...'
 * splitText('This text is very long', 10)
 */
export const splitText = (text = '', maxSize) => {
  const textSize = text.length
  return textSize > maxSize ? text.slice(0, maxSize - 3) + '...' : text
}

/**
 * For create a string params
 * @param {Object} params
 * @example
 * objetToUrlParams({ param1: 'hi' })
 * "param1=hi"
 */

export const objetToUrlParams = (params = {}) =>
  '?' + new URLSearchParams(params).toString()
