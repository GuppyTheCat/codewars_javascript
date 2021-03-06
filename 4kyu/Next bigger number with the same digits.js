/*
https://www.codewars.com/kata/next-bigger-number-with-the-same-digits/

You have to create a function that takes a positive integer number and returns the next bigger number formed by the same digits:

12 ==> 21
513 ==> 531
2017 ==> 2071
If no bigger number can be composed using those digits, return -1:

9 ==> -1
111 ==> -1
531 ==> -1
*/
function nextBigger(n) {
  var res = n + 1,
      n_str = numbers(n)
  if (n_str == n)
    return -1
  while (n_str != numbers(res))
    res++
  return res
}

function numbers(x) {
  return (x + '').split('').sort((a, b) => b - a).join('')
}
