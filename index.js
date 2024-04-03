#! /usr/bin/env node
import inquirer from "inquirer";
const randomNumber = Math.floor(Math.random() * 10 + 1);
const answer = await inquirer.prompt([
    { message: "Please guess a number between 1 to 10.",
        type: "number",
        name: "userGuessNumber" },
]);
if (answer.userGuessNumber === randomNumber) {
    console.log("CONGRATULATIONS! you guess right number.");
}
else {
    console.log("You guess a wrong number.");
}
;
