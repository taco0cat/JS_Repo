let year = 2000

function isLeapYear(year){
  let y4 = year % 4
  let y100 = year % 100
  let y400 = year % 400

  if (y4 == 0 && y100 == 0 && y400 == 0){
    return `${year} is a leap year.`
  }
  else if (y4 == 0 && y100 == 0 && y400 != 0){
    return `${year} is not a leap year.`
  }
  else if (y4 == 0 && y100 != 0){
    return `${year} is a leap year.`
  }
  else{
    return `${year} is not a leap year.`
  }
}

let result = isLeapYear(year)
console.log(result)