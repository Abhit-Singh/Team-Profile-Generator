const inquirer = require('inquirer');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const Manager = require('./lib/Manager');
const fs = require('fs');

const generateFunctions = require("./src/scripts");

const managerQuestions = [
    {
        type: "input",
        name: "name",
        message: "Enter the Managers name: ",
    },
    {
        type: "input",
        name: "employeeID",
        message: "Enter your Employee ID: ",
    },
    {
        type: "input",
        name: "emailAddress",
        message: "Enter your Email: ",
    },
    {
        type: "input",
        name: "officeNumber",
        message: "Please enter your office number",
    },
];

const roleQuestions = {
    type: "list",
    name: "role",
    message: "Please select which employee you like to continue with or Exit",
    choices: ["Engineer", "Intern", "Exit"],
};

const engineerQuestions = [
    {
        type: "input",
        name: "name",
        message: "Enter Engineer's name: ",
    },
    {
        type: "input",
        name: "employeeID",
        message: "Enter Engineer's Employee ID: ",
    },
    {
        type: "input",
        name: "emailAddress",
        message: "Enter Engineer's Email: ",
    },
    {
        type: "input",
        name: "githubName",
        message: "Enter Engineer's github: ",
    },
];

const internQuestions = [
    {
        type: "input",
        name: "name",
        message: "Enter intern's name: ",
    },
    {
        type: "input",
        name: "employeeID",
        message: "Enter intern's Employee ID: ",
    },
    {
        type: "input",
        name: "emailAddress",
        message: "Enter intern's Email: ",
    },
    {
        type: "input",
        name: "school",
        message: "Enter intern's school name:",
    },
];

let generatedHtml = [];

function init() {
    inquirer.prompt(managerQuestions).then((answers) => {
        const { name, employeeID, emailAddress, officeNumber } = answers;
        let mng = new Manager(name, employeeID, emailAddress, officeNumber);
        generatedHtml.push(generateFunctions.generateManager(mng));
    }).then((ans) => {
        rolePrompt();
    });
}

function rolePrompt() {
    inquirer.prompt(roleQuestions).then((answers) => {
        const { role } = answers;
        switch (role) {
            case 'Engineer':
                engineerPrompt();
                break;
            case 'Intern':
                internPrompt();
                break;
            case 'Exit':
                generateHtml();
        }
    })
}
function engineerPrompt() {
    inquirer.prompt(engineerQuestions).then((answers) => {
        const { name, employeeID, emailAddress, githubName } = answers;//destruture reponse to get the value of each input by entering the name of the property;
        const engineer = new Engineer(name, employeeID, emailAddress, githubName)
        generatedHtml.push(generateFunctions.generateEngineer(engineer));
    }).then((ans) => {
        rolePrompt();
    });
}
function internPrompt() {
    inquirer.prompt(internQuestions).then((answers) => {
        const { name, employeeID, emailAddress, school } = answers;
        const intern = new Intern(name, employeeID, emailAddress, school)

        generatedHtml.push(generateFunctions.generateIntern(intern));
    }).then((ans) => {
        rolePrompt();
    })
}
function generateHtml() {
    const teamCards = generatedHtml.join('');
    const pageHtml = generateFunctions.generateBody(teamCards);

    fs.writeFile('./dist/index.html', pageHtml, (err) => {
        err ? console.log(err) : console.log('Sucessfully generate the html file!')
    })
}

init();