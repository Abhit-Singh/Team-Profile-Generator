const Engineer = require('../lib/Engineer');

describe('Engineer class', () => {
  describe('Initialization', () => {
    it('should create an Engineer object with property of github', () => {
      const engineer = new Engineer('ExampleEngineer', '2', 'engineer@gmail.com', 'Engineer2')
      expect(engineer.github).toEqual('Engineer2');
    })
    it('Returns the github username of Engineer', () => {
      const githubName = new Engineer('ExampleEngineer', '2', 'engineer@gmail.com', 'Engineer2').getGithub();
      expect(githubName).toEqual('Engineer2');
    })
    it('Returns the role of Engineer', () => {
      const role = 'Engineer'
      const theRole = new Engineer('ExampleEngineer', '2', 'engineer@gmail.com', 'Engineer2').getRole();
      expect(theRole).toEqual(role);
    })

  })
}
)