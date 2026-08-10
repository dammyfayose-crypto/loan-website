function calculateLoan(){

let amount = parseFloat(document.getElementById("amount").value);

let interest = parseFloat(document.getElementById("interest").value);

let months = parseFloat(document.getElementById("months").value);

if(isNaN(amount) || isNaN(interest) || isNaN(months)){

document.getElementById("result").innerHTML =
"Please fill all fields.";

return;

}

let totalInterest = (amount * interest / 100);

let total = amount + totalInterest;

let monthly = total / months;

document.getElementById("result").innerHTML =

`
Monthly Payment: <br>

<b>₦${monthly.toFixed(2)}</b>

<br><br>

Total Repayment:

<br>

<b>₦${total.toFixed(2)}</b>

`;

}