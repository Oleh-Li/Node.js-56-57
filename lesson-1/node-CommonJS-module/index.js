// CommonJS
// const nodemon = require("nodemon");

const obj = require("./users");
console.log(obj);

const {getCurrentMonth, isLeapYear} = require("./date")
// console.log("HERE", require("./date"))
console.log(`here month: ${getCurrentMonth()}`)
isLeapYear(2024)

const {admins, clients} = require("./users");
// console.log(admins, clients);

// const {getCurrentMonth} = require("./date");
// const currentMonth = getCurrentMonth();
// console.log(`Now ${currentMonth} month`);

const currentMonth = require("./date").getCurrentMonth();

// const isLeapYear = require("./date").isLeapYear(2024)
// console.log(`Is leap year: ${isLeapYear}`)

console.log(`Now ${currentMonth} month`);
























