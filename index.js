const inquirer = require('inquirer');
const fs = require('fs');
const Manager = require('./lib/manager.classes');
const Engineer = require('./lib/engineer.classes');
const Intern = require('./lib/intern.classes');

const managerQuestions = [
    {
        type: 'input',
        message: `What is your manager's name?`,
        name: 'managerName',
        validate: answer => (answer.length === 0) ? 'Please input a valid answer.' : true
    },
    {
        type: 'input',
        message:  `What is your manager's ID?`,
        name: 'managerId',
        validate: answer => (answer.length === 0) ? 'Please input a valid answer.' : true
    },
    {
        type: 'input',
        message: `What is your manager's email?`,
        name: 'managerEmail',
        validate: answer => (answer.length === 0) ? 'Please input a valid answer.' : true
    },
    {
        type: 'input',
        message: `What is your manager's office number?`,
        name: 'officeNumber',
        validate: answer => (answer.length === 0) ? 'Please input a valid answer.' : true
    },
]

const employeeQuestions = [
    {
        type: 'list',
        message: 'What position is your new team member?',
        choices: ['Engineer', 'Intern', 'I do not have more members to add at this time'],
        name: 'roleChoice'
    },
    {
        type: 'input',
        message:`What is your engineer's name?`,
        name: 'engineerName',
        validate: answer => (answer.length === 0) ? 'Please input a valid answer.' : true,
        when: answers => answers.choice === 'Engineer'
    },
    {
        type: 'input',
        message:`What is your engineer's ID?`,
        name: 'engineerId',
        validate: answer => (answer.length === 0) ? 'Please input a valid answer.' : true,
        when: answers => answers.choice === 'Engineer'
    },
    {
        type: 'input',
        message:`What is your engineer's email?`,
        name: 'engineerEmail',
        validate: answer => (answer.length === 0) ? 'Please input a valid answer.' : true,
        when: answers => answers.choice === 'Engineer'
    },
    {
        type: 'input',
        message:`What is your engineer's Github username?`,
        name: 'githubUsername',
        validate: answer => (answer.length === 0) ? 'Please input a valid answer.' : true,
        when: answers => answers.choice === 'Engineer'
    },
    {
        type: 'input',
        message:`What is your intern's name?`,
        name: 'internName',
        validate: answer => (answer.length === 0) ? 'Please input a valid answer.' : true,
        when: answers => answers.choice === 'Intern'
    },
    {
        type: 'input',
        message:`What is your intern's ID?`,
        name: 'internId',
        validate: answer => (answer.length === 0) ? 'Please input a valid answer.' : true,
        when: answers => answers.choice === 'Intern'
    },
    {
        type: 'input',
        message:`What is your intern's email?`,
        name: 'internEmail',
        validate: answer => (answer.length === 0) ? 'Please input a valid answer.' : true,
        when: answers => answers.choice === 'Intern'
    },
    {
        type: 'input',
        message:`What school does your intern go to?`,
        name: 'school',
        validate: answer => (answer.length === 0) ? 'Please input a valid answer.' : true,
        when: answers => answers.choice === 'Intern'
    },

]

const init = async () => {
    const data1 = await inquirer.prompt(managerQuestions);
    let data2 = {};
    let team = [];

    
    // do {
    //     data2 = await inquirer.prompt(employeeQuestions);
    //     team.push(data2);
    // } while (data2.choice !== 'I do not have more members to add at this time');
    
    fs.writeFile('./dist/index.html', generateHTML(generateManager(data1), generateEngineer(team), generateIntern(team)), err => err ? console.log(err) : console.log('Your file has been created.'));
}

const generateManager = (data) => {
    const manager = new Manager(data.managerName, data.managerId, data.managerEmail, data.officeNumber);
    return `<!----- Card 1 ----->         
                    <div class="card col">
                        <div class="card-header">
                            ${manager.getName()}, ${manager.getRole()}
                        </div>
                        <div class="card-body">
                            <ul class="list-group">
                                <li class="list-group-item">ID: ${manager.getId()} </li>
                                <li class="list-group-item">Email: ${manager.getEmail()}</li>
                                <li class="list-group-item">Office Number: ${manager.officeNumber}</li>
                            </ul>
                        </div>
                    </div>`
}

const generateEngineer = (arr) => {
    let engineers = '';
    for (member of arr) {
        if (member.choice === 'Engineer') {
            let engineer = new Engineer(member.engineerName, member.engineerId, member.engineerEmail, member.githubUsername);
            engineers += `<!----- Card 2 ----->
                                    <div class="card col">    
                                        <div class="card-header">
                                            ${engineer.getName()}, ${engineer.getRole()}
                                        </div>
                                        <div class="card-body">
                                            <ul class="list-group">
                                                <li class="list-group-item">ID: ${engineer.getId()}</li>
                                                <li class="list-group-item">Email: ${engineer.getEmail()}</li>
                                                <li class="list-group-item">GitHub: ${engineer.getGithub()}</li>
                                            </ul>
                                        </div>
                                    </div>`
        }
    }
    return engineers;
}

const generateIntern = (arr) => {
    let interns = '';
    for (member of arr) {
        if (member.choice === 'Intern') {
            let intern = new Intern(member.internName, member.internId, member.internEmail, member.school);
            interns += `<!----- Card 3 ----->
                                <div class="card col">
                                    <div class="card-header">
                                        ${intern.getName()}, ${intern.getRole()}
                                    </div>
                                    <div class="card-body">
                                        <ul class="list-group">
                                            <li class="list-group-item">ID: ${intern.getId()}</li>
                                            <li class="list-group-item">Email: ${intern.getEmail()}</li>
                                            <li class="list-group-item">School: ${intern.getSchool()}</li>
                                        </ul>
                                    </div>        
                                </div>

                            </div>`
        }
    }
    return interns;
}

const generateHTML = (func1, func2, func3) => {
    return `<!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Team Profile Generator</title>
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.6.2/dist/css/bootstrap.min.css">
        <link rel="stylesheet" href="../dist/style.css">
    </head>
    <body>
    <!----- Jumbotron ----->    
        <div class="jumbotron jumbotron-fluid">
            <div class="container">
              <h1 class="display-4">My Team</h1>
            </div>
        </div>
    <!----- Team Cards -----> 
        <div class="d-flex justify-content-center"> 
                <div class="row container-fluid">
            ${func1}
            
            ${func2}
            
            ${func3}

        </div>    
            
              
    
        
    </body>
    </html>`
}

init();