// Promise In JavaScript

// Basic Promise with asynchronous task
new Promise(function (resolve, reject) {
  // Do an async task
  // Ex - DB calls , cyrptography, network
  setTimeout(() => {
    console.log("Async task 1");
    resolve();
  }, 2000);
}).then(function () {
  console.log("Promise One Resolved!");
});

// Another Promise with a different async task
new Promise(function (resolve, reject) {
  setTimeout(function () {
    console.log("Async task 2");
    resolve();
  }, 3000);
}).then(function () {
  console.log("Promise Two Resolved!");
});

// Resolving promise with user data
const promiseOne = new Promise(function (resolve, reject) {
  setTimeout(function () {
    resolve({ username: "Mustafa", email: "Mustafa@example.com" });
  }, 1000);
});

promiseOne.then(function (user) {
  console.log("User details: ", user);
});

// Rejecting a promise with an error
const promiseTwo = new Promise(function (resolve, reject) {
  setTimeout(function () {
    let error = true;
    if (!error) {
      resolve({ username: "Mustafa Lanewala", password: "Mustafa" });
    } else {
      reject("Failed to fetch user details");
    }
  }, 2000);
});

promiseTwo
  .then((user) => {
    console.log("User details: ", user);
    return user.username;
  })
  .then((username) => {
    console.log("User's username: ", username);
  })
  .catch((error) => {
    console.log(error);
  })
  .finally(() => console.log("The promise is either resolved or rejected"));

// Promise with error handling using async/await
const promiseThree = new Promise((resolve, reject) => {
  setTimeout(function () {
    let error = true;
    if (!error) {
      resolve({ username: "Hello", password: "123" });
    } else {
      reject("ERROR: Something went wrong");
    }
  }, 1000);
});

async function consumePromiseThree() {
  try {
    const response = await promiseThree;
    console.log(response);
  } catch (error) {
    console.log(error);
  }
}

consumePromiseThree();

// Fetching data from an API and handling promises Using try/catch
// async function getAllUsers() {
//   try {
//     const response = await fetch(
//       "https://api.github.com/users/mustafalanewala"
//     );
//     const data = await response.json();
//     console.log(data);
//   } catch (error) {
//     console.log("E", error);
//   }
// }

// getAllUsers();

// Fetching data from an API and handling promises Using .then
fetch("https://api.github.com/users/mustafalanewala")
  .then((response) => {
    return response.json();
  })
  .then((data) => {
    console.log(data);
  })
  .catch((error) => console.log(error));

// Best Practices - Using Promise.all to fetch multiple data
const fetchData1 = fetch("https://api.example.com/data1").then((res) =>
  res.json()
);
const fetchData2 = fetch("https://api.example.com/data2").then((res) =>
  res.json()
);

Promise.all([fetchData1, fetchData2])
  .then(([data1, data2]) => {
    console.log("Data1:", data1);
    console.log("Data2:", data2);
  })
  .catch((error) => {
    console.error("Error fetching data");
  });
