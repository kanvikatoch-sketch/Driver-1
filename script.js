const button = document.querySelector("button");
const input = document.querySelector("input");

button.addEventListener("click", function () {
    const userInput = input.value.toLowerCase();
    let response = "";

    if (userInput.includes("hello") || userInput.includes("hi")) {
        response = "Haan ji, bolo. Ride chahiye kya?";
    } 
    else if (userInput.includes("income") || userInput.includes("earning")) {
        response = "Income fixed nahi hai. Din ka 800-1200 mil jata hai agar demand acchi ho.";
    } 
    else if (userInput.includes("uber") || userInput.includes("ola")) {
        response = "Jahan commission kam hota hai, main wahan kaam karta hoon.";
    } 
    else if (userInput.includes("cancel") || userInput.includes("reject")) {
        response = "Agar location ya distance sahi nahi lagta, toh ride reject kar deta hoon.";
    } 
    else {
        response = "Samajh nahi aaya, thoda simple bolo.";
    }

    alert(response); // shows reply
});
