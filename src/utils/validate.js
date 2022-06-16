/**
 * Created by PanJiaChen on 16/11/18.
 */

/**
 * @param {string} path
 * @returns {Boolean}
 */
export function isExternal(path) {
  return /^(https?:|mailto:|tel:)/.test(path)
}

/**
 * @param {string} str
 * @returns {Boolean}
 */
export function validUsername(str) {
  //这里后续需要修改校验规则。可用正则来校验
  const valid_map = ['admin', 'editor']
  return valid_map.indexOf(str.trim()) >= 0
}
