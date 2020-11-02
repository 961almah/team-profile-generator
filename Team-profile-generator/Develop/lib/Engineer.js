// TODO: Write code to define and export the Engineer class.  HINT: This class should inherit from Employee.
const Employee = require('./Employee');
// For reference using extends: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes/extends
class Engineer extends Employee {
    constructor(name, id, email, github) {
        // For reference using super: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/super
        // In addition to Employee's properties and methods, Engineer will also have:
        // github // GitHub username
        super(name, id, email);
        this.github = github;
    }
    
    // getGithub()
    getGithub() {
        return this.github;
    }
    
    // getRole() // Overridden to return 'Engineer'
    getRole() {
        return 'Engineer';
    }
}

// Export module
module.exports = Engineer;