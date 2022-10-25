const Employee = require('../lib/employee.classes');

describe('Employee', () => {
    describe('constructor', () =>{
        it('should return an object with three values when called with new keyword', () => {
            const obj = new Employee();

            expect('name' in obj).toEqual(true);
            expect('id' in obj).toEqual(true);
            expect('email' in obj).toEqual(true);
        });
        it('should set name, id, and email when created', () => {
            const name = 'Curran';
            const id = '508';
            const email = 'test@test.com';

            const obj = new Employee(name, id, email);

            expect(obj.name).toEqual(name);
            expect(obj.id).toEqual(id);
            expect(obj.email).toEqual(email);
        });
    });

    describe('getName', () => {
        it('should return employee name', () => {
            const name = 'Curran';

            const newName = new Employee(name, '508', 'test@test.com').getName();

            expect(name).toEqual(newName);
        });
    });

    describe('getId', () => {
        it('should return an employee id', () => {
            const id = '508';

            const newId = new Employee('Curran', id, 'test@test.com').getId();

            expect(id).toEqual(newId);
        });
    });

    describe('getEmail', () => {
        it('should return an employee email', () => {
            const email = 'test@test.com';

            const newEmail = new Employee('Curran', '508', email).getEmail();

            expect(email).toEqual(newEmail);
        });
    });

    describe('getRole', () => {
        it('should return employee role', () => {
            const role = 'Employee';

            const newRole = new Employee().getRole();

            expect(role).toEqual(newRole);
        })
    })
});