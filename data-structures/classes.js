// simple class in es6+
class Student {
    constructor(firstName, lastName, year) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.year = year;
    }
}

let firstStudent = new Student('Louie', 'Williford', 2016);

console.log(firstStudent);