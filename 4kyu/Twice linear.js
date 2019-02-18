/*
https://www.codewars.com/kata/twice-linear/

Consider a sequence u where u is defined as follows:

The number u(0) = 1 is the first one in u.
For each x in u, then y = 2 * x + 1 and z = 3 * x + 1 must be in u too.
There are no other numbers in u.
Ex: u = [1, 3, 4, 7, 9, 10, 13, 15, 19, 21, 22, 27, ...]

1 gives 3 and 4, then 3 gives 7 and 10, 4 gives 9 and 13, then 7 gives 15 and 22 and so on...

Task:
Given parameter n the function dbl_linear (or dblLinear...) returns the element u(n) of the ordered (with <) sequence u.

Example:
dbl_linear(10) should return 22

Note:
Focus attention on efficiency
*/
function dblLinear(n) {
  var u = 1,
      x = [],
      y = [],
      xt, yt
  for (var i = 0; i < n; i++) {
    xt = u * 2 + 1
    yt = u * 3 + 1
    if (!y.includes(xt))
      x.push(xt)
    if (!x.includes(yt))
      y.push(yt)
    u=Math.min(x[0], y[0])
    x[0] < y[0] ? x.shift() : y.shift()
  }
  return u
}
