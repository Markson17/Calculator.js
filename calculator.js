let num1 = parseFloat(prompt("Enter the first number:"));
let num2 = parseFloat(prompt("Enter the second number:"));
let opr = prompt("Enter an operator (+, -, /, *): ");


if (opr == "+") {
    let result = num1 + num2;
    alert("The sum of the given numbers is " + result)

}
else if (opr == "-") {
    let result = num1 - num2;
    alert("The difference of the given numbers is " + result)

}

else if (opr == "*") {
    let result = num1 * num2;
    alert("The product of the given number is " + result)

}

else if (opr == "/") {
    let result = num1 / num2;
    alert("The division of the given number is " + result)

}

else {
    alert("Entered operator is invalid")
}


    
