
let container = document.createElement("div");
container.className = "container";
document.body.appendChild(container);

let heading = document.createElement("h1");
heading.textContent = "Interactive Calculator";
container.appendChild(heading);

let number1 = document.createElement("input");
number1.type = "text";
number1.placeholder = "Enter first number";
container.appendChild(number1);

let number2 = document.createElement("input");
number2.type = "text";
number2.placeholder = "Enter second number";
container.appendChild(number2);

let number3 = document.createElement("input");
number3.type = "text";
number3.placeholder = "Enter third number";
container.appendChild(number3);

let email = document.createElement("input");
email.type = "email";
email.placeholder = "Enter your email";
container.appendChild(email);

let button = document.createElement("button");
button.textContent = "Calculate Sum";
container.appendChild(button);

let result = document.createElement("p");
result.id = "result";
result.textContent = "The result will appear here.";
container.appendChild(result);

button.addEventListener("click", function() {

    let num1 = Number(number1.value);
    let num2 = Number(number2.value);
    let num3 = Number(number3.value);

    let sum = num1 + num2 + num3;

    result.textContent = "The sum is: " + sum;
});

