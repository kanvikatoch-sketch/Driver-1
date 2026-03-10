function sendMessage(){

let input = document.getElementById("userInput").value.toLowerCase();
let chatbox = document.getElementById("chatbox");

chatbox.innerHTML += "<p class='user'><b>You:</b> " + input + "</p>";

let response = "I am not sure about that.";

if(input.includes("motivation")){
response = "I am motivated by flexible income and choosing platforms with lower commission.";
}

else if(input.includes("pain") || input.includes("problem")){
response = "My biggest problems are high commission, rating systems, and unstable ride demand.";
}

else if(input.includes("need")){
response = "I need a portable digital identity and fair reputation system across platforms.";
}

else if(input.includes("platform")){
response = "I usually switch between Uber, Rapido, and InDrive depending on commission.";
}

chatbox.innerHTML += "<p class='bot'><b>Jass Singh:</b> " + response + "</p>";

document.getElementById("userInput").value="";
}
