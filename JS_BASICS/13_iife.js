// Immediately Invoked Function Expression (IIFE)

(function DB() {
  // Named IIFE
  console.log("DB CONNECTED");
})(); // Semi-Colon is Imp to end

(() => {
  // Simple IIFE
  console.log("DB CONNECTED...");
})();

((name) => {
  // Simple IIFE With Parameters
  console.log(`${name} DB CONNECTED...`);
})("Mustafa");

// It is used to create private variables
let ans = (function () {
  let privateKey = 53;

  return {
    getter: function () {
      console.log(privateKey);
    },
    setter: function (val) {
      privateKey = val;
    },
  };
})();