const Intern = require('../lib/intern.classes');

describe('Intern', () => {

    describe('getRole', () => {
        it('should return employee role', () => {
            const role = 'Intern';

            const newRole = new Intern().getRole();

            expect(role).toEqual(newRole);
        });
    });

    describe('getSchool', () => {
        it('should return intern school', () => {
            const school = 'UCF';

            const newSchool = new Intern('1','2','3', school).getSchool();

            expect(school).toEqual(newSchool);
        });
    });
});