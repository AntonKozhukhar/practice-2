
export default function getPolynomial(...coefficients) {
  let res = ''
  let i = coefficients.length - 1

  if (!coefficients.length) return '0'
  if (coefficients.every(el => el === 0)) return '0'

  coefficients.map(num => {
    if (num != 0) {
      if (num > 0 && res.length > 0) res += '+'

      if (i === 1) num === 1 ? (res += 'x') : (res += `${num}*x`)

      else if (num === -1) res += `-x^${i}`
      else if (i === 0) res += `${num}`
      else if (num === 1) res += `x^${i}`
      else res += `${num}*x^${i}`
      i--
    } else i--
  })
  return res
}
