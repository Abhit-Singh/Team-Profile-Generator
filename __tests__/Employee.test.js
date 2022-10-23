const Employee = require('../lib/Employee');

describe('Employee class', () => {
 describe('Initialization', () => {
   test ('should create an Employee object with property of name, id and email', () => {
    const employee = new Employee('Example', '1', 'test@gmail.com')
     expect(employee.name).toEqual('Example');
    expect(employee.id).toEqual('1');
     expect(employee.email).toEqual('test@gmail.com');
   })
   it('Returns Employee name', () => {
     const name = new Employee('Example', '1', 'test@gmail.com').getName();
     expect(name).toEqual('Example');
   })
   it('Returns Employee id', () => {
     const id = new Employee('Example', '1', 'test@gmail.com').getId();
    expect(id).toEqual('1');
   })
   it('Returns Employee email', () => {
     const email = new Employee('Example', '1', 'test@gmail.com').getEmail();
    expect(email).toEqual('test@gmail.com');
   })
   it('Returns Employee role', () => {
    const role = "Employee";
     const theRole = new Employee('Example', '1', 'test@gmail.com').getRole();
    expect(theRole).toEqual(role);
   })
 })
})