//linking inquirer,fs, and generate markdown
const inquirer = require("inquirer");
const fs = require("fs");
const generateMarkdown = require("./utils/generateMarkdown")

//console log for errors and creating new file
function writeReadme(fileName, data) {

    fs.writeFile(fileName, data, function (error) {
        if (error) {
            return console.log(error);
        }
        console.log("New Readme Created!");
    })
}

function init() {
    //inquirer prompts for user input
    inquirer.prompt([
        {
            type: "input",
            name: "github",
            message: "Please enter your username for github!"
          },{
            type: "input",
            name: "email",
            message: "Please enter your email!"
          },
        {
            type: "input",
            name: "title",
            message: "What is the title of your project?"
        },
        {
            type: "input",
            name: "description",
            message: "Enter a brief description of the project."
        },
        {
            type: "input",
            name: "installation",
            message: "Describe technologies used or explain steps for installation."
        },
        {
            type: "input",
            name: "use",
            message: "What will the user be using this application for?"
        },
        {
            type: "input",
            name: "contributors",
            message: "If someone would like to reach you for collaboration, how would they do so?"
        },
        {
            type: "input",
            name: "tests",
            message: "Whar testing was used to create final application"
        },
        {
            type: "list",
            name: "license",
            message: "Select a license for your README file.",
            choices: ["GNU GPL v2", "GNU GPL v3", "GNU LGPL v3", "MIT", "No License"]
        },
        //grabbing data from generate markdown and using user input data to create finished new readme
        ]).then(function (response) {
            const data = generateMarkdown(response);
            
            writeReadme("newreadme.md", data);
        })

}

init();
