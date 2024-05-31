#!/usr/bin/env/node
"use strict";
// this line is shebang it tells to run as node.js
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const inquirer_1 = __importDefault(require("inquirer"));
const answer = await inquirer_1.default.prompt([
    {
        name: "sentence",
        type: "input",
        message: "Enter your sentence to count the word:",
    }
]);
const words = answer.sentence.trim().split("");
console.log(words);
console.log(`your sentence word count is ${words.length} `);
