// Events In JavaScript

// Basic Event Listener (Click Event)
const clickButton = document.getElementById("click-me");
clickButton.addEventListener("click", (event) => {
  alert("Button clicked!");

  // Logging event properties
  console.log("Event Type:", event.type); // Event type (click)
  console.log("Timestamp:", event.timeStamp); // Timestamp when the event was triggered
  console.log("Default Prevented:", event.defaultPrevented); // Check if the default action was prevented
  console.log("Target Element:", event.target); // Element that triggered the event
  console.log("Current Target:", event.currentTarget); // Element the event listener is attached to
});

// Keydown Event
const keyInput = document.getElementById("key-input");
keyInput.addEventListener("keydown", (event) => {
  console.log(`Key pressed: ${event.key}`);
  // console.log('Event Type:', event.type); // Keydown
});

// Mouseover and Mouseout Events
const hoverArea = document.getElementById("hover-area");
hoverArea.addEventListener("mouseover", (event) => {
  hoverArea.classList.add("hovered"); // Add hover effect
  hoverArea.textContent = "You are hovering!";
  console.log("Event Type:", event.type); // Event type (mouseover)
  console.log("ClientX:", event.clientX, "ClientY:", event.clientY); // Mouse position
});
hoverArea.addEventListener("mouseout", (event) => {
  hoverArea.classList.remove("hovered"); // Remove hover effect
  hoverArea.textContent = "Hover over this text";
  console.log("Event Type:", event.type); // Event type (mouseout)
  console.log("ClientX:", event.clientX, "ClientY:", event.clientY); // Mouse position
});

// Dynamic Event Listeners
const addItemButton = document.getElementById("add-item");
const itemList = document.getElementById("item-list");

addItemButton.addEventListener("click", (event) => {
  const newItem = document.createElement("li");
  newItem.textContent = "New Item";
  newItem.classList.add("list-item");
  itemList.appendChild(newItem);
  console.log("New Item Added");
});

// Using Event Delegation for dynamically added items
itemList.addEventListener("click", (event) => {
  if (event.target.tagName === "LI") {
    alert(`You clicked on: ${event.target.textContent}`);
    console.log("Event Target:", event.target); // The actual clicked list item
  }
});

// Event Propagation: Bubbling and Capturing
document.body.addEventListener(
  "click",
  () => {
    console.log("Body clicked!"); // This will run in the bubbling phase
  },
  true
); // true means capturing phase

itemList.addEventListener("click", (event) => {
  event.stopPropagation(); // Stop the event from propagating further
  console.log("List clicked!"); // This will run when clicking on the item list
});

// Prevent Default Behavior
keyInput.addEventListener("keydown", (event) => {
  if (event.key === "Enter") {
    event.preventDefault(); // Prevent default behavior of pressing Enter
    alert("Enter key press prevented!");
  }
});

// Custom Event
const dynamicDiv = document.createElement("div");
dynamicDiv.id = "dynamic-element";
dynamicDiv.textContent = "Click me to trigger a custom event";
document.body.appendChild(dynamicDiv);

// Define the custom event
const customEvent = new Event("customEvent");

// Add a listener for the custom event
dynamicDiv.addEventListener("customEvent", (event) => {
  console.log("Custom event triggered!");
  alert("Custom event triggered!");
});

// Trigger the custom event on click
dynamicDiv.addEventListener("click", () => {
  dynamicDiv.dispatchEvent(customEvent);
});
