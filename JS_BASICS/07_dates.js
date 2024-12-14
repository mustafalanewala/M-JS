// Dates in JavaScript 
// - JavaScript uses milliseconds for date calculations
// - Months are 0-indexed (0-11), but days are 1-indexed (1-31)

// Creating a Date object
let myDate = new Date()
console.log(myDate)
console.log(typeof myDate)

// Different date formats
console.log(myDate.toString()) // Full date string
console.log(myDate.toLocaleDateString()) // Date in local format
console.log(myDate.toLocaleString()) // Date and time in local format
console.log(myDate.toDateString()) // Date portion of the string

// Creating a date with a specific value
let createdDate = new Date("2004-08-30")
console.log(createdDate.toLocaleString())
console.log(createdDate.toString())

// Note: Months in JavaScript are 0-indexed (0-11)
let specificDate = new Date(2023, 5, 15, 12, 30, 0)
console.log(specificDate.toLocaleString())

// Working with timestamps
let myTimeStamp = Date.now()
console.log(myTimeStamp) // Milliseconds since Jan 1, 1970
console.log(createdDate.getTime()) // Get timestamp of a specific date
console.log(Math.floor(Date.now()/1000)) // Convert to seconds

// Getting components of a date
let newDate = new Date()
console.log(newDate.getFullYear()) 
console.log(newDate.getMonth()) 
console.log(newDate.getDate()) 
console.log(newDate.getDay()) 
console.log(newDate.getHours()) 
console.log(newDate.getMinutes()) 
console.log(newDate.getSeconds())

// Formatting dates
console.log(newDate.toLocaleString('default', {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
    timeZoneName: "short"
}))

// Setting date components
let setDate = new Date()
setDate.setFullYear(2025)
setDate.setMonth(11) // December
setDate.setDate(25)
console.log(setDate.toDateString()) // Christmas 2025

// Comparing dates
let date1 = new Date('2023-01-01')
let date2 = new Date('2023-12-31')
console.log(date2 > date1) // true
console.log(date2 - date1) // Difference in milliseconds

// Calculate days between dates
let daysBetween = (date2 - date1) / (1000 * 60 * 60 * 24)
console.log(`Days between: ${daysBetween}`)

// Working with UTC dates
console.log(newDate.getUTCHours()) // Hours in UTC

// ISO Date String
console.log(newDate.toISOString())
