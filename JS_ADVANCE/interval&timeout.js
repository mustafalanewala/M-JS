let intervalId; // For setInterval
let timeoutId; // For setTimeout

// Function to start a repeating task using setInterval
function startInterval() {
  // Clear any existing interval to avoid multiple intervals running simultaneously
  if (intervalId) {
    clearInterval(intervalId);
  }

  // Start a new interval that runs every 2 seconds (2000 ms)
  intervalId = setInterval(() => {
    console.log("Repeating task: This message logs every 2 seconds.");
  }, 2000);

  console.log("Interval started. Logs every 2 seconds.");
}

// Function to stop the repeating task using clearInterval
function stopInterval() {
  // Clear the interval using its ID
  clearInterval(intervalId);
  console.log("Interval stopped.");
}

// Function to start a one-time delayed task using setTimeout
function startTimeout() {
  // Clear any existing timeout to avoid overlap
  if (timeoutId) {
    clearTimeout(timeoutId);
  }

  // Start a new timeout that runs after 5 seconds (5000 ms)
  timeoutId = setTimeout(() => {
    console.log("One-time task: This message logs after 5 seconds.");
  }, 5000);

  console.log("Timeout set for 5 seconds.");
}

// Function to cancel the one-time delayed task using clearTimeout
function cancelTimeout() {
  // Clear the timeout using its ID
  clearTimeout(timeoutId);
  console.log("Timeout canceled.");
}
