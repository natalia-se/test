// Lesson 6
class Animal {
  constructor(name, legs) {
    this.name = name;
    this.legs = legs;
  }
  speech() {
    return `${this.name} makes a nose`;
  }
  numberOfLegs() {
    return `This animal has ${this.legs} legs`;
  }
}

const dog = new Animal("dog", 4);
console.log(dog.speech());
console.log(dog.numberOfLegs());
