/*
Training JS #31: methods of arrayObject---isArray() indexOf() and toString()
*/
function blackAndWhite(arr){
  if (!Array.isArray(arr))
    return "It's a fake array"
  else if (arr.indexOf(5)!=-1 && arr.indexOf(13)!=-1)
    return "It's a black array"
  else
    return "It's a white array"
}
