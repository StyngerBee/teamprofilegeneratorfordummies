const Engineer = require('../lib/engineer.classes');

describe('Engineer', () => {
    describe('constructor', () => {
        it('should return an object of engineer with three values with new keyword', () => {
            const obj = new Engineer();

            expect('name' in obj).toEqual(true);
            expect('id' in obj).toEqual(true);
            expect('email' in obj).toEqual(true);
        });
        it('should set name, id, and email when created', () => {
            const name = 'Curran';
            const id = '508';
            const email = 'test@test.com';
            
            const employee = new Engineer(name,id,email)
            const obj = new Engineer(name, id, email);

            expect(obj.name).toEqual(name);
            expect(obj.id).toEqual(id);
            expect(obj.email).toEqual(email);
        });
    });

    describe('getRole', () => {
        it('should return employee role', () => {
            const role = 'Employee';

            const newRole = new Engineer().getRole();

            expect(role).toEqual(newRole);
        });
    });
    
    describe('getGithub', () => {
        it('should return employee github', () => {
            const github ='StyngerBee';
            
            const newGithub = new Engineer().getGithub();

            expect(github).toEqual(newGithub)
        });
    });
});