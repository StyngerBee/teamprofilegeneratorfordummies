// pulls in intern class from classes file
const Intern = require('../lib/intern.classes');

// tests a whole suite
describe('Intern', () => {
     //begins individual test for methods, getRole
    describe('getRole', () => {
        it('should return employee role', () => {
            const role = 'Intern';

            const newRole = new Intern().getRole();

            expect(role).toEqual(newRole);
        });
    });
//begins individual test for methods, getSchool
    describe('getSchool', () => {
        it('should return intern school', () => {
            const school = 'UCF';

            const newSchool = new Intern('1','2','3', school).getSchool();

            expect(school).toEqual(newSchool);
        });
    });
});