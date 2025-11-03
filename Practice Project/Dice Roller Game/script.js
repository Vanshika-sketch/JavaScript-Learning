// select DOM elements

const rollBtn = document.getElementById("rollBtn")
const resultSpan = document.getElementById("result")
const historyList = document.getElementById("history")

//Function that returns a random integer between min and max(inclusive)

function randomInt(min,max){
    return Math.floor(Math.random()*(max - min + 1)) + min
}

// Roll the die and update UI
function rollDie(){
    const value = randomInt(1,6)    // generate 1..6
    resultSpan.textContent = value;    // show latest result

}
//create  a new list item for history

const li= document.createElement("li")
li.textContent = `You rolled : $(value)` // set visible text