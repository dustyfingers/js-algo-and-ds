class Student {
    // constructor method is used to instantiate Student objects
    constructor(firstName, lastName, year) {
        // the 'this' keyword inside a constructor is referring to
        // the instance of the object being created
        this.firstName = firstName;
        this.lastName = lastName;
        this.year = year;
        this.absences = 0;
        this.scores = [];
    }

    // ! instance methods - acts on the object created
    // eg firstStudent and secondStudent will return different values
    fullName() {
        return `Your full name is ${this.firstName} ${this.lastName}`;
    }

    markLate() {
        this.absences += 1;
        return `${this.firstName} ${this.lastName} has been marked as absent ${this.absences} times now.`;
    }

    addScore(score) {
        this.scores.push(score);
        return this.scores;
    }

    calculateAverage () {
        // sum all values of the array together
        let sum = this.scores.reduce((a, b) => a + b);
        return sum / this.scores.length;
    }

    // ! class methods - use the static keyword in front!
    // pertinent to the class but not necessarily to the individual instances
    // often used for utility functions not related to a particular instance
    // you'll see
    static EnrollStudents(...students) {
        // email administrators here
        // etc 
        return "Students enrolled!";
    }
}

let firstStudent = new Student("Louie", "Williford", "3");
let secondStudent = new Student("Big", "Bear", "3");

console.log(firstStudent.fullName());
console.log(secondStudent.fullName());

console.log(firstStudent.markLate());
console.log(firstStudent.addScore(95));
console.log(firstStudent.addScore(98));
console.log(firstStudent.addScore(76));
console.log(firstStudent.calculateAverage());

// !! this throws an error
// firstStudent.EnrollStudents({firstStudent, secondStudent});
// ? this does not
console.log(Student.EnrollStudents({firstStudent, secondStudent}));