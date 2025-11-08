function confirmEnding(str1, target){
  let start = str1.length - target.length
  let ending = str1.slice(start)
  if (ending === target){
    return true
  }
  else{
    return false
  }
}

confirmEnding("abc", "c")