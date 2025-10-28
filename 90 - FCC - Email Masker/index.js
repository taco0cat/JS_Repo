function maskEmail(email){

  // Splitting the Email at "@"
  let split = email.indexOf("@")
  let username = email.slice(0, split)

  // Saving the rest after "@"
  let rem = email.slice(split)

  // Calculating number of "*" to replace characters
  let star = "*".repeat(username.slice(1, -1).length)

  // Replacing characters with "*"
  let masked_username = username.replace(username.slice(1, -1), star)

  // Concatenating entire email
  let masked = masked_username + rem

  return masked
}

let email = "abc@gmail.com"

console.log(maskEmail("apple.pie@example.com"))
console.log(maskEmail("freecodecamp@example.com"))
console.log(maskEmail("info@test.dev"))
console.log(maskEmail("user@domain.org"))
console.log(maskEmail(email))