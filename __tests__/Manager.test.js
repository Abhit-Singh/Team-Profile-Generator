const Manager = require('../lib/Manager');

describe('Manager class', () => {
  describe('Initialization', () => {
    it('should create an Manager object with property of officeNumber', () => {
      const manager = new Manager('ManagerExample', '3', 'manager@gmail.com', '1')
      expect(manager.officeNumber).toEqual('1');
    })
    it('Returns the role of Manager', () => {
      const role = 'Manager'
      const theRole = new Manager('ManagerExample', '3', 'manager@gmail.com', 1).getRole();
      expect(theRole).toEqual(role);
    })

  })
}
)