// pulls in engineer class from classes file
const Manager = require('../lib/manager.classes');

// tests a whole suite
describe('Manager', () => {
    
    //begins individual test for methods, getRole
    describe('getRole', () => {
        it('should return employee role', () => {
            const role = 'Manager';

            const newRole = new Manager().getRole();

            expect(role).toEqual(newRole);
        });
    });
});