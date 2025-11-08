function truncateString(str1, idx1){
  if (str1.length > idx1){
    let trnc1 = str1.slice(0, idx1)
    let dots = ".".repeat(3)
    let final = trnc1 + dots 
    return final
  }
  else{
    return str1
  }
}

let result = truncateString("abcdefg", 8)
console.log(result)