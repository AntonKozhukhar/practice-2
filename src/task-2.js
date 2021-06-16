export default function createCounter(n) {
  let i = -n
  return () => (i += n)
}
