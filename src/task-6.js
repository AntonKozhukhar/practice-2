
export default function findPath(obj) {
  let res = ''
  for (const key in obj) {
    if (obj[key] === 15) res = key
    if (typeof obj[key] === 'object') {
      if (res = findPath(obj[key])) {
        res = key + '.' + res
      }
    }
  }
  return res || null
}
