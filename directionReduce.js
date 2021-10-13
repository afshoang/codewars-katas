// https://www.codewars.com/kata/550f22f4d758534c1100025a/train/javascript

/**
 * Take an array of strings, and recude the derection if (W <> E, N <> S)
 * ['NORTH', 'SOUTH', 'WEST','EAST', 'NORTH'] => ['NORTH']
 * @param {*} arr of string
 */
function dirReduc(arr) {
  const stack = []

  const dicOfDirec = {
    NORTH: 'SOUTH',
    SOUTH: 'NORTH',
    WEST: 'EAST',
    EAST: 'WEST',
  }

  for (const dir of arr) {
    if (stack[stack.length - 1] === dicOfDirec[dir]) {
      stack.pop()
    } else {
      stack.push(dir)
    }
  }
  return stack
}

console.log(dirReduc(['NORTH', 'SOUTH', 'EAST', 'WEST', 'EAST', 'WEST']))
