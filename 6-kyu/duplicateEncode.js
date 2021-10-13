// https://www.codewars.com/kata/54b42f9314d9229fd6000d9c/train/javascript

function duplicateEncode(word) {
  var copyWord = word.toLowerCase()
  var result = ''
  const countChars = copyWord.split('').reduce(function count(allChar, char) {
    if (char in allChar) {
      allChar[char]++
    } else {
      allChar[char] = 1
    }
    return allChar
  }, {})
  for (let char of copyWord) {
    if (countChars[char] > 1) result += ')'
    else result += '('
  }
  return result
}

duplicateEncode('Success')
