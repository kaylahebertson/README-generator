// TODO: Include packages needed for this application
import inquirer from 'inquirer';
import fs from 'fs';
import path from 'path';
import generateMarkdown from './utils/generateMarkdown';
// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'title',
        message: 'What is the title of your project?',
    },
    {
        type: 'input',
        name: 'description',
        message: 'Write a brief description of your project.',
    },
    // TODO: figure out how to add a table of contents
    {
        type: 'input',
        name: 'table of contents',
        message: '',
    },
    {
        type: 'input',
        name: 'installation',
        message: 'What command is used to install dependencies?',
    },
    {
        type: 'input',
        name: 'usage',
        message: 'How is your project meant to be used?',
    },
    {
        type: 'input',
        name: 'license',
        message: 'Which license should your project have?',
        choices: ['MIT', 'Apache', 'GPL', 'None'],
    },
    {
        type: 'input',
        name: 'contributing',
        message: '',
    },
    {
        type: 'input',
        name: 'tests',
        message: 'What command is used to run tests?',
    },
    {
        type: 'input',
        name: 'github',
        message: 'What is your GitHub username?',
    },
    {
        type: 'input',
        name: 'email',
        message: 'What is your email address?',
    }
];


// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    return fs.writeFileSync(path.join(process.cwd(), fileName), data);
}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions)
        .then((answers) => {
            writeToFile('README.md', generateMarkdown(answers));
        });
}

// Function call to initialize app
init();
