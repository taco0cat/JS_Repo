function maskEmail(email){

  // Splitting the Email at "@"
  let x = email.indexOf("@")
  let y = email.slice(0, x)

  // Saving the rest after "@"
  let rem = email.slice(x)

  // Calculating number of "*" to replace characters
  let star = "*".repeat(y.slice(1, -1).length)

  // Replacing characters with "*"
  let z = y.replace(y.slice(1, -1), star)

  // Concatenating entire email
  let masked = z + rem

  return masked
}

let email = "abc@gmail.com"

console.log(maskEmail("apple.pie@example.com"))
console.log(maskEmail("freecodecamp@example.com"))
console.log(maskEmail("info@test.dev"))
console.log(maskEmail("user@domain.org"))
console.log(maskEmail(email))