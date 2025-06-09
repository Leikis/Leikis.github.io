console.log("First Console log!")



/* const dayOfWeek = "Friday";

if (dayOfWeek === "Monday") {
    console.log("Monday worst day ever")
} 
else if (dayOfWeek === "Friday") {
    console.log("Yes! Finally weekend and time for Mikrobryggeriet!")
} */

/* const password = prompt("Please enter a new password:")

if (password.length >= 6 && password.indexOf(' ') === -1) {
    console.log("Password length good!")
} else {
    console.log("Password not long enough!")
} */


/* const age = 64;

if ((age >= 0 && age < 5) || age >= 65) {
    console.log("FREE");
} else if (age >= 5 && age < 10) {
    console.log("$10");
} else if (age >= 10 && age < 65) {
    console.log("$20");
} else {
    console.log("INVALID AGE")
} */

/* let firstName = prompt("enter your first name")
if (!firstName) {
    firstName = prompt("Try again");
} */

/* const age = 24;

if (!(age >= 0 && age < 5 || age >= 65)) {
    console.log("You are not a baby or senior");
} else {
    console.log("You are baby or senior")
} */

const day = 6;
switch (day) {
    case 1:
        console.log("Monday");
        break;
    case 2:
        console.log("Tuesday");
        break;
    case 3:
        console.log("Wednesday");
        break;
    case 4:
        console.log("Thursday");
        break;
    case 5:
        console.log("Friday");
        break;
    case 6:
    case 7:
        console.log("WEEKEND!");
        break;
    default:
        console.log("I Don't know that!")
}
