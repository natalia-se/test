class Student {
  constructor(birthday, marks, firstName, lastName) {
    this.birthday = birthday;
    this.marks = marks;
    this.firstName = firstName;
    this.lastName = lastName;
  }
  getAge() {
    return 2021 - this.birthday;
  }
  getFullName() {
    return `${this.firstName} ${this.lastName}`;
  }
}

const student1 = new Student(2001, 19, "John", "Doe");

console.log(student1.getAge());
console.log(student1.getFullName());
