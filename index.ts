#! /usr/bin/env node
import inquirer from "inquirer";
const randomNumber = Math.floor(Math.random() *6+1);
const answer = await inquirer.prompt([
    {
        name: "userGuessedNumber",
        type: "number",
        message: "Please guess a number between 1 to 6: ",
    },
]);
if (answer.userGuessedNumber === randomNumber)
{
    console.log("Congratulations! you guess a right number");

}
else{
    console.log("You guess a wrong number");
}
