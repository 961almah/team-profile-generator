// TODO: Write code to define and export the Manager class. HINT: This class should inherit from Employee.
// Require employee
const Employee = require('./Employee');

// Create manager class that extends employee
class Manager extends Employee {
    // Create constructor with parameters from employee, as well as officeNumber
    constructor(name, id, email, officeNum) {
        super(name, id, email);
        this.officeNumber = officeNum;
    }
    // getOfficeNumber()
    getOfficeNumber() {
        return this.officeNumber;
    }
    // getRole() // overridden to return manager
    getRole() {
        return 'Manager';
    }
}

// Export module
module.exports = Manager;