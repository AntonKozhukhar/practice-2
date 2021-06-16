export default function sum(...values) {
  return values.reduce((acc, curr) => acc + curr)
}
