const lunches = ["apples"]

function addLunchToEnd(arr1, str1){
  arr1.push(str1)
  console.log(`${str1} added to the end of the lunch menu.`)
  return arr1
}

function addLunchToStart(arr2, str2){
  arr2.unshift(str2)
  console.log(`${str2} added to the start of the lunch menu.`)
  return arr2
}

function removeLastLunch(arr3){
  if (arr3.length === 0){
    console.log("No lunches to remove.")
  }
  else{
    let rem = arr3.pop()
    console.log(`${rem} removed from the end of the lunch menu.`)
  }
  return arr3
}

function removeFirstLunch(arr5){
  if (arr5.length === 0){
    console.log("No lunches to remove.")
  }
  else{
    let rem = arr5.shift()
    console.log(`${rem} removed from the start of the lunch menu.`)
  }
  return arr5
}

function getRandomLunch(arr5){
  if (arr5.length === 0){
    console.log("No lunches available.")
  }
  else{
    let rn_index = Math.floor(Math.random() * arr5.length)
    console.log(`Randomly selected lunch: ${arr5[rn_index]}`)
  }
}

function showLunchMenu(arr6){
  if (arr6.length === 0){
    console.log("The menu is empty.")
  }
  else{
    console.log(`Menu items: ${arr6.join(', ')}`)
  }
}