// creates a class for employee
class Employee {
    // adds constructor for each value
    constructor(name, id, email) {
        this.name = name;
        this.id = id;
        this.email = email;
    }
    // method in order to return values 
    getName() {
        return this.name;
    }
    getId() {
        return this.id;
    }
    getEmail(){
        return this.email;
    }
    getRole(){
        return 'Employee';
    }
}

// allows employee to be exported into other classes
module.exports = Employee
