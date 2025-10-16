// access all elements from the html

const numberInput = document.getElementById('number')
const limitInput = document.getElementById('limit')
const generateBtn = document.getElementById('generate')
const resultDiv = document.getElementById('result')

// Create a function to generate the multiplication table

function generateTable(){
    // get the input values and convert them to numbers
    const n = Number(numberInput.value)
    const limit = Number(limitInput.value)

    // checks if inputs are valid
    if(isNaN(n) || isNaN(limit) || limit < 1){
        resultDiv.innerHTML = "Please enter valid numbers."
        return;
    }


let tableHTML = ''

for(let i = 1; i <= limit ;i++) {
    tableHTML += `${n} x ${i} = ${n*i}<br>`
}

resultDiv.innerHTML = tableHTML
}

generateBtn.addEventListener('click',generateTable)

