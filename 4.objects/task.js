function Student(name, gender, age) {
    this.name = name;
    this.gender = gender;
    this.age = age;
    this.marks = [];
}

Student.prototype.setSubject = function(subjectName) {
    this.subject = subjectName;
}

Student.prototype.addMarks = function(...mark) {
    if (this.hasOwnProperty("marks")) {
        this.marks = [...this.marks, ...mark];
    }
}

Student.prototype.getAverage = function() {
    if (this.hasOwnProperty("marks") && this.marks.length != 0) {
        return this.marks.reduce((a, b) => (a + b)) / this.marks.length;
    }
    return 0;
}
Student.prototype.exclude = function(reason) {
    this.excluded = reason;
    delete this.subject;
    delete this.marks;
}