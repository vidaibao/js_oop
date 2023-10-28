/* Parameter 'e' is the click Event */
function action(e) {
    /* Older IE browsers have a srcElement property,
    but other browsers have a 'target' property; 
    Set btn to whichever exists. */
    var btn = e.target || e.srcElement;
    
    /* Get the clicked element's innerHTML */
    const btnlbl = document.getElementById(btn.id).innerHTML;
    //console.log(btnlbl)
    document.getElementById("res").textContent += btnlbl;
}

/* Add a click event listener that calls action(e) when clicked */
document.getElementById('btn0').addEventListener('click', action);
document.getElementById('btn1').addEventListener('click', action);

document.getElementById('btnSum').onclick = action;
document.getElementById('btnSub').onclick = action;
document.getElementById('btnMul').onclick = action;
document.getElementById('btnDiv').onclick = action;

document.getElementById('btnClr').onclick = function() {
    document.getElementById("res").textContent = "";
};


document.getElementById('btnEql').onclick = function() {
    document.getElementById("res").textContent = Solving(document.getElementById("res").textContent);
    //console.log(Solving(document.getElementById("res").textContent))
};

function Solving(text) {
    const opes = "+-*/"
    const operator = [...opes].filter(x => text.includes(x))[0] // warning return value []
    const [operand1, operand2] = text.split(operator);
    
    return calculate(operand1, operand2, operator);
}

// Binary to Decimal conversion
function binaryToDecimal(binary) {
    return parseInt(binary, 2);
}

// Decimal to Binary conversion
function decimalToBinary(decimal) {
    return decimal.toString(2);
}

function calculate (operand1, operand2, operator){
    const decimal1 = binaryToDecimal(operand1);
    const decimal2 = binaryToDecimal(operand2);
    
    switch (operator) {
        case "+":
            return decimalToBinary(decimal1 + decimal2)
        case "-":
            return decimalToBinary(decimal1 - decimal2)
        case "*":
            return decimalToBinary(decimal1 * decimal2)
        case "/":
            if (decimal2 === 0) {
                return "Division by zero is not allowed.";
            }
            console.log(Math.floor(decimal1 / decimal2))
            return decimalToBinary(Math.floor(decimal1 / decimal2))
    }
}
