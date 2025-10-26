// .checked = checks status of an HTML radio button or checkbox

const myCheckBox = document.getElementById("myCheckBox")
const visaBtn = document.getElementById("visaBtn")
const mastercardBtn = document.getElementById("mastercardBtn")
const paypal = document.getElementById("paypal")
const mySubmit = document.getElementById("mySubmit")

const checkoutResult = document.getElementById("checkoutResult")
const paymentResult = document.getElementById("paymentResult")

mySubmit.onclick = function(){

    if (myCheckBox.checked){
        checkoutResult.textContent = "You are in checkout mode";
    }
    else{
        checkoutResult.textContent = "You are not in checkout mode";
    }

    if (visaBtn.checked){
        paymentResult.textContent = "You are paying with Visa"
    }
    else if (mastercardBtn.checked){
        paymentResult.textContent = "You are paying with Mastercard"
    }
    else if (paymentResult.checked){
        paymentResult.textContent = "You are paying with PayPal"
    }
    else{
        paymentResult.textContent = "Select a Payment Type"
    }
}