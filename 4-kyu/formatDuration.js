// https://www.codewars.com/kata/52742f58faf5485cae000b9a/train/javascript

/**
 * Turn number of seconds into (string) format years, days, hours, minutes and seconds
 * seconds == 0  return "now"
 * separate by ", " except last components separated by " and "
 * a component == 0 was not returned => 1 minute 0 second =>  return 1 minute
 * @param {int} seconds
 */

function formatDuration(seconds) {
  if (seconds === 0) return 'now'

  const oneMinute = 60
  const oneHour = oneMinute * 60
  const oneDay = oneHour * 24
  const oneYear = oneDay * 365

  var y = Math.floor(seconds / oneYear)
  var d = Math.floor((seconds % oneYear) / oneDay)
  var h = Math.floor((seconds % oneDay) / oneHour)
  var m = Math.floor((seconds % oneHour) / oneMinute)
  var s = Math.floor(seconds % oneMinute)

  var str = [y, d, h, m, s]
    .map((ele, idx) => {
      if (ele > 0) {
        if (idx === 0) return ele > 1 ? `${ele} years` : `${ele} year`
        if (idx === 1) return ele > 1 ? `${ele} days` : `${ele} day`
        if (idx === 2) return ele > 1 ? `${ele} hours` : `${ele} hour`
        if (idx === 3) return ele > 1 ? `${ele} minutes` : `${ele} minute`
        if (idx === 4) return ele > 1 ? `${ele} seconds` : `${ele} second`
      } else {
        return ''
      }
    })
    .filter((ele) => ele != '')

  if (str.length === 1) return str.join('')
  else if (str.length === 2) return str.join(' and ')

  return str
    .map((ele, idx, arr) => {
      if (idx === arr.length - 2) return ele + ' and '
      if (idx === arr.length - 1) return ele
      return `${ele}, `
    })
    .join('')
}

console.log(formatDuration(5454776657))
