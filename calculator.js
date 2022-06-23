num1 = parseFloat(prompt("Enter the first number:"));
num2 = parseFloat(prompt("Enter the second number:"));
opr = prompt("Enter an operator (+, -, /, *): ");


if (opr == "+") {
    result = num1 + num2;
    alert("The sum of the given numbers is " + result)

}
else if (opr == "-") {
    result = num1 - num2;
    alert("The difference of the given numbers is " + result)

}

else if (opr == "*") {
    result = num1 * num2;
    alert("The product of the given number is " + result)

}

else if (opr == "/") {
    result = num1 / num2;
    alert("The division of the given number is " + result)

}

else {
    alert("Entered operator is invalid")
}


    