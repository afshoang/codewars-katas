// https://www.codewars.com/kata/559a28007caad2ac4e000083/train/javascript

function perimeter(n) {}

/**
 * return fibonaci of n
 * F(n) = f(n-1) + f(n-2)
 */
function fib(n) {
  if (n <= 1) return n
  return fib(n - 1) + fib(n - 2)
}

var num = fib(5)

console.log(num)
