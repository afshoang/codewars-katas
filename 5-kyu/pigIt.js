// Simple Pig Latin
// https://www.codewars.com/kata/520b9d2ad5c005041100000f/train/javascript

/**
 * Move first character of each word to the end, then add 'ay'. Leave '!' untouched.
 * @param {*} str
 */
function pigIt(str) {
  // turn str to arr, each word is indices
  const arrayWord = str.split(' ') // "Hoang Pham !" => ['Hoang',' ', 'Pham', ' ', '!']
  return (modifiedArr = arrayWord
    .map((ele) => {
      let arrOfStr = ele.split('')
      if (!/[a-zA-Z]/.test(arrOfStr[0])) return arrOfStr
      arrOfStr.push(arrOfStr.shift(), 'ay')
      return arrOfStr.join('')
    })
    .join(' '))
}

pigIt('Hoang Pham ?') //
