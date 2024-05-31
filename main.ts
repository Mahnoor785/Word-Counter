#!/usr/bin/env/node
// this line is shebang it tells to run as node.js

import inquirer from "inquirer";
const answer :{
    sentence :string

}= await inquirer.prompt([
    {
        name : "sentence",
        type : "input",
        message :"Enter your sentence to count the word:",
    }
])
const words = answer . sentence . trim().split("")
console.log(words)

console.log(`your sentence word count is ${words.length} `);