let number = 7; 

function checkNumber() {
    if (number % 2 === 0) {
        document.getElementById("output1").innerText = number + " is Even ✅";
    } else {
        document.getElementById("output1").innerText = number + " is Odd ❌";
    }
}

function greetUser() {
    let name = prompt("Enter your name:");
    document.getElementById("output2").innerText = "Hello, " + name + "! 👋";
}

function multiply(a, b) {
    return a * b;
}
console.log("5 x 3 =", multiply(5, 3));
let fruits = ["Apple", "Banana", "Mango", "Orange"];

function listFruits() {
    let list = document.getElementById("fruitList");
    list.innerHTML = ""; 

    for (let i = 0; i < fruits.length; i++) {
        let li = document.createElement("li");
        li.innerText = fruits[i];
        list.appendChild(li);
    }
}

let counter = 0;
while (counter < 3) {
    console.log("Counter is at:", counter);
    counter++;
}





