// calls employee class from files
const Employee = require('./employee.classes')
// creates a class for engineer
class Engineer extends Employee {
    // adds constructor for each value
    constructor(name,id,email, github){
        super(name,id,email);
        this.github = github;
    }
    // method in order to return values 
    getRole(){
        return 'Engineer';
    }
    getGithub(){
        return this.github;
    }
}
// allows engineer to be exported into index.js
module.exports = Engineer;