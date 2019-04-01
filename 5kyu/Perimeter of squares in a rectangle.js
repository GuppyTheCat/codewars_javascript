/*
https://www.codewars.com/kata/perimeter-of-squares-in-a-rectangle/

The drawing shows 6 squares the sides of which have a length of 1, 1, 2, 3, 5, 8. It's easy to see that the sum of the perimeters of these squares is : 4 * (1 + 1 + 2 + 3 + 5 + 8) = 4 * 20 = 80

Could you give the sum of the perimeters of all the squares in a rectangle when there are n + 1 squares disposed in the same manner as in the drawing:

alternative text

#Hint: See Fibonacci sequence

#Ref: http://oeis.org/A000045

The function perimeter has for parameter n where n + 1 is the number of squares (they are numbered from 0 to n) and returns the total perimeter of all the squares.

perimeter(5)  should return 80
perimeter(7)  should return 216
NOTE: due to a misspelling in the reference solution for random tests, have an outer auxiliary function that calculates Fibonacci numbers, name this outer function fib. (More than 500 CW passed the kata so it is now impossible to change the random tests).
*/
function perimeter(n) {
  var arr = []
  for (var i = 0; i <= n + 1; i++) {
    arr.push(i == 0 ? 0 : i == 1 ? 1 : arr[i - 1] + arr[i - 2])
  }
  return arr.reduce((a, b) => a + b) * 4
}
//Alternative for n>2
function perimeter(n) {
  var arr = [1, 1]
  for (var i = 0; i < n - 1; i++) {
    arr.push(arr[i] + arr[i + 1])
  }
  return arr.reduce((a, b) => a + b) * 4
}
