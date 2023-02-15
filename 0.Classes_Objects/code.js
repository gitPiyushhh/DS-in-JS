class Student {
    constructor(name, branch, position) {
        this.name = name;
        this.branch = branch;
        this.position = position;
    }

    // Instance methods {work on every separate instances}
    getName() {
        return `Name is: ${this.name}`;
    }
    
    // Class methods {work on classes not instances}
    static enrollStudents() {
        console.log('Enrolling Students');
    }

}

const s1 = new Student('Piyush', 'IT', 'Intern');

console.log(s1.branch);
console.log(s1.getName());
Student.enrollStudents(); // Will not run with any instances