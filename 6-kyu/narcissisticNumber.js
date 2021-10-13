// https://www.codewars.com/kata/5287e858c6b5a9678200083c/train/javascript

/**
 *
 * @param {*} value positive number
 * @returns return true nếu mỗi số của @value mũ số digits === chính value, otherwise false
 * 153 = 1^3 + 5^3 + 3^3 == 153
 */
function narcissistic(value) {
  const arrOfValue = Number(value).toString().split('') // value =>  ['1','2','3']
  var numOfDigits = arrOfValue.length // number of digit value == arraOfValue.length
  var total = 0
  for (const str of arrOfValue) {
    let num = Number(str) // cast str to number
    total += Math.pow(Number(num), numOfDigits)
  }
  return total === value
}

narcissistic(153)
narcissistic(1652)
