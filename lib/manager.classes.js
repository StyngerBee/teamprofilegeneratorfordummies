// calls employee class from files
const Employee = require('./employee.classes')
// creates a class for Manager
class Manager extends Employee {
    // adds constructor for each value
    constructor(name,id,email, officeNumber){
        super(name,id,email);
        this.officeNumber = officeNumber;
    }
    // method in order to return values 
    getRole(){
        return 'Manager';
    }
}
// allows manager to be exported into index.js
module.exports = Manager;