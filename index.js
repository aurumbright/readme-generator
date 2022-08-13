const inquirer = require('inquirer');
const fs = require('fs');
// this links the generateMarkdown script
const generateMarkdown = require('./utils/generateMarkdown');

const questions = [
    {
        type: 'input',
        name: 'person',
        message: 'What is your name?',
    },
    {
        type: 'input',
        name: 'name',
        message: 'What is the name of your project?',
    },
    {
        type: 'input',
        name: 'description',
        message: 'Please describe this project.',
    },
    {
        type: 'input',
        name: 'installation',
        message: 'Enter the installation instructions.',
    },
    {
        type: 'input',
        name: 'usage',
        message: 'Enter the usage instructions.',
    },
    {
        type: 'input',
        name: 'contributing',
        message: 'Enter the contribution guidelines.',
    },
    {
        type: 'input',
        name: 'tests',
        message: 'Enter the test instructions.',
    },
    {
        type: 'input',
        name: 'github',
        message: 'Enter your GitHub username.',
    },
    {
        type: 'list',
        name: 'license',
        message: 'Choose the license for your application.',
        choices: [
            "MIT",
            "Apache 2.0",
            "GNU GPLv3",
            "ISC License",
            "Mozilla Public License 2.0",
            "Boost Software License 1.0",
            "The Unilicense",
        ]
    },
    {
        type: 'input',
        name: 'year',
        message: 'What year should the copyright date be?',
    },
    {
        type: 'input',
        name: 'email',
        message: 'Enter your email address so people can contact you with questions about the app.',
    },
];

// function runs questions and writes README file upon answer return
function init() {
    return inquirer
        .prompt(questions)
        // prompt returns a promise - passed as answers
        .then((answers) => {
            const readMeFile = generateMarkdown(answers);

            fs.writeFile('README-generated.md', readMeFile, (err) =>
                err ? console.log(err) : console.log('Successfully created README!')
            );
        });
}

// Function call to initialize app
init();


