const inquirer = require('inquirer');
const fs = require('fs');

inquirer
    .prompt([
        {
            type: 'input',
            message: 'Enter project title:',
            name: 'title'
        },

        {
            type: 'input',
            message: 'Enter a description:',
            name: 'descrip'
        },
        
        {
            type: 'input',
            message: 'Write your installation instructions:',
            name: 'install'
        },

        {
            type: 'input',
            message: 'Write your usage information:',
            name: 'usage'
        },

        {
            type: 'input',
            message: 'Write your contribution guidelines:',
            name: 'cont'
        },

        {
            type: 'input',
            message: 'Write your test instructions:',
            name: 'test'
        },

        {
            type: 'list',
            message: 'Which license would you like to choose for your application?',
            choices: [
                'Academic Free License v3.0',
                'Creative Commons Attribution 4.0',
                'MIT',
                'Open Software License 3.0',
                'The Unlicense'
            ],
            name: 'license'
        },

        {
            type: 'input',
            message: 'Enter your GitHub username:',
            name: 'user'
        },

        {
            type: 'input',
            message: 'Enter your email address:',
            name: 'email'
        }
    ])

    .then((response) => {
        let arg = {
            title: response.title,
            descrip: response.descrip,
            install: response.install,
            usage: response.usage,
            cont: response.cont,
            test: response.test,
            license: response.license,
            user: response.user,
            email: response.email
        };

        let readme;
    });