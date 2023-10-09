const inquirer = require('inquirer');
const fs = require('fs');

inquirer
    .prompt([
        {
            type: 'input' ,
            message: 'Enter up to 3 characters for your logo: ' ,
            name: 'text',
        },
        {
            type: 'input',
            message: 'Select a color for your text: ',
            name: 'textColor',
        },
        {
            type:'list',
            message: 'choose a shape: ',
            name: 'shape',
            choices: [
                'Circle',
                'Triangle',
                'Square',
            ]
        },
        {
            type: 'input',
            message: 'Select a color for your shape: ',
            name: 'shapeColor',
        },
    ])
    .then((response) => {
        console.log(` You selected ${response.text} to be ur text and a ${response.shapeColor} ${response.shape} to be your shape.`);
    });