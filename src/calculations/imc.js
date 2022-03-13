export default function imc(weight, height) {
  console.log(weight)
  return Number(weight) / (Number(height)/100) ^ 2
}
