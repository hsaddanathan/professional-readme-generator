const fs = require("fs");
const inquirer = require("inquirer");
const generateMarkdown  = require("./utils/generateMarkdown")

// array of questions for user
const questions = [
    {
        type: 'input',
        name: 'title',
        message: 'What is your title of your project?',
      },
    {
        type: 'input',
        name: 'description',
        message: 'Describe what your project does?',
      },
    {
        type: 'input',
        name: 'install',
        message: 'How do you install your project?',
      },
      {
        type: 'input',
        name: 'test',
        message: 'How do you test this project?',
      },
      {
        type: 'input',
        name: 'tech',
        message: 'What technology did you use?',
      },
      {
        type: 'input',
        name: 'url',
        message: 'Please share the complete URL to access your project.',
      },
      {
        type: 'input',
        name: 'contributers',
        message: 'Who contributed to your project?',
      },
      {
        type: 'input',
        name: 'github',
        message: 'What is your github username?',
      },
      {
        type: 'input',
        name: 'email',
        message: 'What is your email address?',
      },
      {
        type: 'list',
        name: 'license',
        message: 'Which license would you like to use?',
        choices: ["MIT", "Apache 2.0", "GNU AGPL v3","Mozilla Public License 2.0"]
      },

];

// function to write README file
// function writeToFile(fileName, data) {
    
// }

// function to initialize program
function init() {
    inquirer.prompt(questions).then((data)=>{
        const fileName = `${data.title.toLowerCase().split(" ").join("-")}-README.md`;
        fs.writeFile(fileName,generateMarkdown(data), (err) => err ? console.error(err) : console.log('Success!'));
    });
}

// function call to initialize program
init();
