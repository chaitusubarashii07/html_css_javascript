// let random = Math.random();
// if (random < 0.5) {
//     console.log("Your number is less than 0.5")
//     console.log(random);
// }

// if (random >= 0.5) {
//     console.log("Your number is greater than 0.5")
// }








// 0-5 : You are a baby
// 5-10: You are a child
// 10-20: You are still a kid 
// 20-30: You are an adult 

// const age = 29;

// if (age < 5) {
//     console.log("You are a baby");
// } else if (age < 10) {
//     console.log("You are a child");
// } else if (age < 20) {
//     console.log("You are still a kid");
// } else if (age < 30) {
//     console.log("You are an adult");
// }








// const dayOfWeek = prompt("Enter a day: ");

// if (dayOfWeek === "monday") {
//     console.log("Its obviously a boring day!")
// } else if (dayOfWeek === "tuesday") {
//     console.log("Not a bad day!")
// } else if (dayOfWeek === "wednesday") {
//     console.log("What to say?!?!")
// } else if (dayOfWeek === "thursday") {
//     console.log("Horrible day!")
// } else if (dayOfWeek === "friday") {
//     console.log("Horrible day!")
// } else if (dayOfWeek === "saturday") {
//     console.log("Horrible day!")
// } else if (dayOfWeek === "sunday") {
//     console.log("Horrible day!")
// }

// console.log("INSTEAD OF WRITING ELSE IF MANY TIMES FROM THURSDAY TO SUNDAY, WE CAN USE ELSE TO STATE THAT EVERYTHING ELSE SHOULD BE A HORRIBLE DAY!");


// const dayOfWeek = prompt("Enter a day: ").toLowerCase();

// if (dayOfWeek === "monday") {
//     console.log("Its obviously a boring day!")
// } else if (dayOfWeek === "tuesday") {
//     console.log("Not a bad day!")
// } else if (dayOfWeek === "wednesday") {
//     console.log("What to say?!?!")
// } else {
//     console.log("Horrible day!")
// } 









// NESTING

// const password = prompt("Enter the password: ");

// if (password.length >= 6) {
//     console.log("Good Password length!")
// } else {
//     console.log("Your password is too short! Please try again.")
// }


// if (password.indexOf(" ") === -1) {
//     console.log("Good Password without spaces!")
// } else {
//     console.log("Password cannot contain spaces. Please try again.")
// }


// IN NESTING WE CAN DO THE SAME ABOVE BY NESTING THE CONDITIONAL INSIDE A CONDITIONAL 

// const password = prompt("Enter the password: ");

// if (password.length >= 6) {
//     if (password.indexOf(" ") === -1) {
//         console.log("Valid Password!")
//     } else {
//         console.log("Password cannot contain spaces. Please try again.")
//     }

// } else {
//     console.log("Your password is too short! Please try again.")
// }







// USING LOGICAL OPERATORS

const password = prompt("Enter the password: ");

if (password.length >= 6 && password.indexOf(" ") === -1) {
    console.log("VALID PASSWORD!")
} else {
    console.log("INVALID PASSWORD. PLEASE TRY AGAIN!")
}




