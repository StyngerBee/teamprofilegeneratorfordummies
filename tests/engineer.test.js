// pulls in engineer class from classes file
const Engineer = require('../lib/engineer.classes');

// tests a whole suite
describe('Engineer', () => {
    //begins individual test for methods, getRole
    describe('getRole', () => {
        it('should return employee role', () => {
            const role = 'Engineer';

            const newRole = new Engineer().getRole();

            expect(role).toEqual(newRole);
        });
    });
    //begins individual test for methods, getGithub
    describe('getGithub', () => {
        it('should return employee github', () => {
            const github = 'StyngerBee';
            
            const newGithub = new Engineer('1','2','3', github).getGithub();

            expect(github).toEqual(newGithub);
        });
    });
});