var element = document.getElementById("demo");

// Retrieve the text content
var textContent = element.innerText;
element.innerText = "Updated text content.";
 

// Inner HTML
// Get the element by its ID
var element = document.getElementById("container");

// Retrieve the HTML content
var htmlContent = element.innerHTML;
element.innerHTML = "<p>Updated <em>HTML</em> content.</p>";
var num1 = Number(document.getElementById("one").innerText);
var num2 = Number(document.getElementById("two").innerText);
var opr = document.getElementById("operation").innerText;
const res = (a, b, opr) => {
    switch (opr) {
        case "Addition":
            return a + b;
        case "Subtraction":
            return a - b;
        case "Multiplication":
            return a * b;
        case "Division":
            return a / b;
        default:
            return "Invalid operation";
    }
};

var result = res(num1, num2, opr);
document.getElementById("result").innerHTML = `<strong> Result was ${result} </strong>`;