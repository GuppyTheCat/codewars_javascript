/*
https://www.codewars.com/kata/shortest-word/

Simple, given a string of words, return the length of the shortest word(s).
String will never be empty and you do not need to account for different data types.
*/
findShort=(s)=>Math.min.apply(null,s.split(' ').map((a,_)=>a.length))
