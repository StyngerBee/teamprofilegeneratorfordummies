const Employee = require('./employee.classes')

class Manager extends Employee {
    constructor(name,id,email, github){
        super(name,id,email);
        this.officeNumber = officeNumber;
    }
    getRole(){
        return 'Manager';
    }
}
module.export = Manager;