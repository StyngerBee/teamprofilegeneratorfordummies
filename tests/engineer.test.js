const Engineer = require('../lib/engineer.classes');

describe('Engineer', () => {
    
    describe('getRole', () => {
        it('should return employee role', () => {
            const role = 'Engineer';

            const newRole = new Engineer().getRole();

            expect(role).toEqual(newRole);
        });
    });
    
    describe('getGithub', () => {
        it('should return employee github', () => {
            const github = 'StyngerBee';
            
            const newGithub = new Engineer('1','2','3', github).getGithub();

            expect(github).toEqual(newGithub);
        });
    });
});