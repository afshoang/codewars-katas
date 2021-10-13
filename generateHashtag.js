// https://www.codewars.com/kata/52449b062fb80683ec000024/train/javascript

/**
 * Return a string that has:
 *  - start with '#'
 *  - first character every word must be capitalize
 * "    Hello     World   "  =>  "#HelloWorld"
 */

function generateHashtag(str) {
  // empty input
  if (str.length === 0 || !/[a-zA-Z]/.test(str)) return false
  // turn str into array, delete space character
  const result = str
    .split(' ') // ' hello world' => [' ', 'hello', ' ', 'world]
    .filter((word) => word != ' ') // delete space
    .map((word) => word.charAt(0).toUpperCase() + word.substring(1)) // turn first character into capitalize
    .reduce((prev, curr) => prev + curr, '#') // turn arr into str

  return result === '' || result.length > 140 ? false : result
}

generateHashtag(' Hello there thanks for trying my Kata')
