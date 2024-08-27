console.log(window)
const title = window.document.title;

// Display an alert using the alert method
window.alert("Hello, world!");
// console.log(document) outputs the Document Object Model (DOM) of the currently loaded web page to the browser's developer console for debugging and inspection.
console.log(document)
var element = document.getElementsByTagName("h1").value;
console.log(element);

// document.getElementById: This function returns an element by its ID attribute.
var element_id =  document.getElementById("first_id").value;
console.log(element_id);
var element = document.getElementsByClassName("first_class");
console.log(element);


// document.querySelector: This function returns the first element that matches the specified CSS selector.
const myElement = document.querySelector(".queryselec");


// document.querySelectorAll: This function returns all elements that match the specified CSS selector as a NodeList.
const myElements = document.querySelectorAll(".queryselec");
console.log(myElements)
console.log(document.doctype);
console.log(document.documentElement);
console.log(document.forms);
console.log(document.head);
console.log(document.images);
console.log(document.implementation);
console.log(document.lastModified);
console.log(document.links);
console.log(document.readyState);