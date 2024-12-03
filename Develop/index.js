import inquirer from 'inquirer';
import fs from 'fs';
import path from 'path';
import generateMarkdown from './utils/generateMarkdown';

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
        message: 'What should the user know about contributing to the project?',
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

function writeToFile(fileName, data) {
    return fs.writeFileSync(path.join(process.cwd(), fileName), data);
}

function init() {
    inquirer.prompt(questions)
        .then((answers) => {
            writeToFile('README.md', generateMarkdown(answers));
        });
}

// Function call to initialize app
init();
