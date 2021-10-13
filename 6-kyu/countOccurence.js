// https://www.codewars.com/kata/52efefcbcdf57161d4000091/solutions/javascript

/**
 * Return occurren of every character in string
 * @param {*} string
 * @returns an object contain occurren of every character in str
 */

function count(string) {
  if (string === '') return {}
  return string.split('').reduce((prev, curr) => {
    if (curr in prev) {
      prev[curr]++
    } else {
      prev[curr] = 1
    }
    return prev
  }, {})
}

count('hoangpham')
