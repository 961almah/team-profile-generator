// TODO: Write code to define and export the Employee class

// The first class is an Employee parent class
class Employee {
    // Reference for constructors within classes: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes/constructor
    // Set up base level parameters in which user can input data to
    constructor(name, id, email) {
    // Parent class requires the following properties and methods:
        // Name
        this.name = name;
        // ID
        this.id = id;
        // Email
        this.email = email;
    }
    // getName()
    getName() {
        return this.name;
    }
    // getId()
    getId() {
        return this.id;
    }
    // getEmail()
    getEmail() {
        return this.email;
    }
    // getRole() // returns 'Employee'
    getRole() {
        return 'Employee';
    }
}

// Export module
module.exports = Employee;
