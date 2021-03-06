/*
https://www.codewars.com/kata/automorphic-number-special-numbers-series-number-6/

Definition
A number is called Automorphic number if and only if its square ends in the same digits as the number itself.

Task
Given a number determine if it Automorphic or not .

Warm-up (Highly recommended)
Playing With Numbers Series
Notes
The number passed to the function is positive

Single-digit numbers are considered Automorphic number.

Input >> Output Examples
1- autoMorphic (25) -->> return "Automorphic"
Explanation:
25 squared is 625 , Ends with the same number's digits which are 25 .
2- autoMorphic (13) -->> return "Not!!"
Explanation:
13 squared is 169 , Not ending with the same number's digits which are 69 .
3- autoMorphic (76) -->> return "Automorphic"
Explanation:
76 squared is 5776 , Ends with the same number's digits which are 76 .
5- autoMorphic (225) -->> return "Not!!"
Explanation:
225 squared is 50625 , Not ending with the same number's digits which are 225 .
4- autoMorphic (625) -->> return "Automorphic"
Explanation:
625 squared is 390625 , Ends with the same number's digits which are 625 .
6- autoMorphic (1) -->> return "Automorphic"
Explanation:
1 squared is 1 , Ends with the same number's digits which are 1 .
7- autoMorphic (6) -->> return "Automorphic"
Explanation:
6 squared is 36 , Ends with the same number's digits which are 6
*/
function automorphic(n){
  var s1=n+'',s2=(n**2)+'';
  for(var i=0;i<s1.length;i++)
    {
      if (s1[s1.length-i-1]!=s2[s2.length-i-1])
        return "Not!!"
    }
    return "Automorphic"
}
//Alternative
automorphic=(n)=>(n**2+'').endsWith(n) ? "Automorphic" : "Not!!"
