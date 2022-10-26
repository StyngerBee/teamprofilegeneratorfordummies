// calls employee class from files
const Employee = require('./employee.classes')
// creates a class for intern
class Intern extends Employee {
    // adds constructor for each value
    constructor(name,id,email, school){
        super(name,id,email);
        this.school = school;
    }
    // method in order to return values 
    getRole(){
        return 'Intern';
    }
    getSchool(){
        return this.school;
    }
}
// allows intern to be exported into index.js
module.exports = Intern;