/**
 * 验证
 */

export function isExternal(path) {
  return /^(https?:|mailto:|tel:)/.test(path)
}
