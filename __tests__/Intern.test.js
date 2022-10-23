const Intern = require('../lib/Intern');

describe('Intern class', () => {
  describe('Initialization', () => {
    it('should create an Intern object with property of school', () => {
      const intern = new Intern('ExampleIntern', '4', 'intern@gmail.com', 'InternTest')
      expect(intern.school).toEqual('InternTest');
    })
    it('Returns the role of Intern', () => {
      const role = 'Intern'
      const theRole = new Intern('ExampleIntern', '4', 'intern@gmail.com', 'InternTest').getRole();
      expect(theRole).toEqual(role);
    })

  })
}
)