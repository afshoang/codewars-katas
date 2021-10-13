//https://www.codewars.com/kata/515de9ae9dcfc28eb6000001/train/javascript/614d7da79da984003b16c66c

/**
 *
 * @param {*} str
 * @returns an array of pairs of 2 character, if string.length == 1 + '_'
 * 'abc' => ['ab','c_']
 */

function solution(str) {
  var arr = []
  if (str.length == 0) return arr // return [] if empty str
  if (str.length < 3)
    // str.length == 1 or 2
    return str.split(' ').map((str) => (str.length < 2 ? str + '_' : str))
  for (let i = 0; i < str.length; i += 2) {
    let copyStr = str.substring(i, i + 2)
    arr.push(copyStr)
  }
  var lastStr = arr[arr.length - 1]
  if (lastStr.length % 2 != 0) arr[arr.length - 1] += '_'
  return arr
}

solution('M')

solution('abcdef')

solution('hoangpham')
solution('abc') // should return ['ab', 'c_']
solution('abcdef') // should return ['ab', 'cd', 'ef']
