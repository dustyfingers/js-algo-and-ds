// simple class in es6+
class Student {
    constructor(firstName, lastName, year) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.year = year;
        this.tardies = 0;
        this.scores = [];
    }
    fullName() {
        return `This student's full name is ${this.firstName} ${this.lastName}`;
    }
    makeLate() {
        this.tardies += 1;
        if (this.tardies >= 3) return `${this.firstName} ${this.lastName} has been expelled!`;
        if (this.tardies === 1) return `${this.firstName} ${this.lastName} has been late ${this.tardies} time.`;
        return `${this.firstName} ${this.lastName} has been late ${this.tardies} times.`;
    }
    addScore(score) {
        this.scores.push(score);
        return this.scores;
    }
    calculateAverage() {
        if (this.scores.length === 0) return 'There are no scores to average';
        let sum = this.scores.reduce((a, b) => a + b);
        return Math.round(sum / this.scores.length);
    }
}

let firstStudent = new Student('Louie', 'Williford', 2016);

console.log(firstStudent);
console.log(firstStudent.fullName());
console.log(firstStudent.makeLate());
console.log(firstStudent.makeLate());
console.log(firstStudent.addScore(100));
console.log(firstStudent.addScore(87));
console.log(firstStudent.addScore(94));
console.log(firstStudent.calculateAverage());
console.log(firstStudent);