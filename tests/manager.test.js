const Manager = require('../lib/manager.classes');

describe('Manager', () => {
    
    describe('getRole', () => {
        it('should return employee role', () => {
            const role = 'Manager';

            const newRole = new Manager().getRole();

            expect(role).toEqual(newRole);
        });
    });
});