// TODO: Write code to define and export the Intern class.  HINT: This class should inherit from Employee.
// TODO: Write code to define and export the Engineer class.  HINT: This class should inherit from Employee.
const Employee = require('./Employee');
// TODO: Write code to define and export the Intern class.  HINT: This class should inherit from Employee.
// Require employee
const Employee = require('./Employee');

// Create intern class that extends employee
class Intern extends Employee {
    // Create constructor with parameters from employee, as well as school
    constructor(name,  id, email, school) {
        super(name, id, email);
        this.school = school; 
    }
    // getSchool()
    getSchool() {
        return this.school;
    }
    // getRole() // overridden to return intern
    getRole() {
        return 'Intern';
    }
}

// Export module
module.exports = Intern;
