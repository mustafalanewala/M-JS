// DOM In JavaScript

// 1. Selecting Elements
// Select an element by its ID
const elementById = document.getElementById("myId"); // Returns the element with the specified ID

// Select all elements with a specific class name (HTMLCollection - live collection)
const elementsByClass = document.getElementsByClassName("myClass");

// Select all elements with a specific tag name (HTMLCollection - live collection)
const elementsByTag = document.getElementsByTagName("div");

// Select the first element matching a CSS selector (static NodeList)
const elementByQuery = document.querySelector(".myClass");

// Select all elements matching a CSS selector (static NodeList)
const allElementsByQuery = document.querySelectorAll(".myClass");

// 2. Modifying Element Content
// Change the text content of an element
const element = document.getElementById("myElement");
element.textContent = "New text content"; // Sets plain text content

// Change the HTML content of an element
element.innerHTML = "<strong>New HTML content</strong>";

// 3. Changing Element Styles
// Modify individual styles directly on an element
element.style.color = "red";
element.style.backgroundColor = "yellow";
element.style.fontSize = "20px";

// 4. Adding and Removing Classes
// Add a new class to an element
element.classList.add("newClass");

// Remove an existing class from an element
element.classList.remove("oldClass");

// Toggle a class on or off based on its current state
// Useful for implementing dynamic UI changes
element.classList.toggle("toggleClass");

// 5. Creating New Elements
// Create a new paragraph element and append it to the document body
const newParagraph = document.createElement("p");
newParagraph.textContent = "This is a new paragraph";
document.body.appendChild(newParagraph);

// 6. Removing Elements
// Remove a child element from its parent
const parentElement = document.getElementById("parent");
const childElement = document.getElementById("child");
parentElement.removeChild(childElement); // Removes 'childElement' from 'parentElement'

// 7. Event Handling
// Attach an event listener to an element
const button = document.getElementById("myButton");
button.addEventListener("click", function (event) {
  console.log("Button clicked!");
  event.preventDefault(); 
});

// 8. Accessing and Modifying Attributes
// Get and set attributes on an element
const link = document.getElementById("myLink");
const href = link.getAttribute("href"); // Get the current 'href' attribute value
link.setAttribute("href", "https://www.example.com"); // Update the 'href' attribute

// 9. Traversing the DOM
// Navigate between nodes in the DOM tree
const parent = element.parentNode; // Access the parent node
const children = element.childNodes; // Access all child nodes (including text nodes)
const nextSibling = element.nextSibling; // Access the next sibling node
const previousSibling = element.previousSibling; // Access the previous sibling node

// 10. Checking if an Element Has a Class
// Check if an element contains a specific class
const hasClass = element.classList.contains("myClass");


// Advanced DOM Manipulation

// Creating and Manipulating Elements
// Create a new div element, set its content, and append it to the document body
const newDiv = document.createElement("div");
newDiv.textContent = "This is a new div";
newDiv.classList.add("new-class");
document.body.appendChild(newDiv);

// Shadow DOM
// Encapsulate styles and content using Shadow DOM
const hostElement = document.getElementById("shadowHost");
const shadowRoot = hostElement.attachShadow({ mode: "open" });
shadowRoot.innerHTML = `
      <style>
          p { color: red; }
      </style>
      <p>This is inside the shadow DOM</p>
    `;

// NodeList and HTMLCollection
// NodeList is a static collection of nodes
const nodeList = document.querySelectorAll(".myClass");
console.log(nodeList);

// HTMLCollection is a live collection of elements
const htmlCollection = document.getElementsByClassName("myClass");
console.log(htmlCollection);

// Templist
const tempList = Array.from(nodeList);
console.log(tempList);

// Use array methods on the converted list
tempList.forEach((element) => {
  element.textContent = "Modified text";
});

console.log(nodeList); // Original NodeList remains unchanged
console.log(tempList); // Array reflects the modifications

// Cloning Elements
// Create a deep copy of an element, including its descendants
const originalElement = document.getElementById("original");
const clone = originalElement.cloneNode(true); // Pass 'true' to clone with child nodes
document.body.appendChild(clone);

// Document Fragments
// Improve performance by appending multiple elements at once
const fragment = document.createDocumentFragment();
for (let i = 0; i < 5; i++) {
  const listItem = document.createElement("li");
  listItem.textContent = `Item ${i + 1}`;
  fragment.appendChild(listItem);
}
document.getElementById("myList").appendChild(fragment);
