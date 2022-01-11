var items = ["rock", "paper", "scissors"];

console.log(items);

var count = 0;
var pcCount = 0;

console.log("Hello");

console.log(pcCount, count);

function game(choice, count, pcCount) {
  var pcChoice = items[Math.floor(Math.random() * 3)];
  console.log(pcChoice);
  if (choice == pcChoice) {
    console.log("Draw");
    return 0;
  } 
  else {
    if (choice == "rock") {
      if (pcChoice == items[1]) {
        pcCount = pcCount + 1;
        console.log("pc won with paper");
      } else {
        count = count + 1;
        console.log("you won with scissors");
      }
    } else if (choice == "paper") {
      if (pcChoice == items[2]) {
        pcCount = pcCount + 1;
        console.log("pc won with scissors");
      } else {
        count = count + 1;
      }
    } else if (choice == "scissors") {
      if (pcChoice == items[0]) {
        pcCount = pcCount + 1;
        console.log("pc won with rock");
      } else {
        count = count + 1;
      }
    } else console.log("Enter a valid number0w0");
  }
  console.log(count, pcCount);
  if(count>pcCount){
  return 1;
  }
  else{
      return 0;
  }
}

for (let index = 0; index <= 4; index++) {
  console.log(count);
  let choice = prompt("Enter your choice here : ");
  count = count + game(choice, count, pcCount);
  console.log(count);
}

document.getElementById("result").innerHTML= "<b>TEST</b>";

if(count>=3){
    // console.log("Player won");
    document.getElementById("result").innerHTML= "You Won!";

}
else{
    // console.log("PC won");
    document.getElementById("result").innerHTML="PC won";
}

