// https://www.codewars.com/kata/530e15517bc88ac656000716/train/javascript

function rot13(message) {
  return message
    .split('')
    .map((char) => {
      let charCode = char.charCodeAt(0)
      if (charCode > 96 && charCode < 123) {
        if (charCode > 109) {
          charCode = charCode - 122 + 13 + 97 - 1
        } else charCode += 13
      } else if (charCode > 64 && charCode < 90) {
        if (charCode > 77) charCode = charCode - 90 + 13 + 65 - 1
        else charCode += 13
      }
      return String.fromCharCode(charCode)
    })
    .join('')
}

console.log(rot13('Test'))
