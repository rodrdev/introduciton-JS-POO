class Animal {
  constructor(name) {
    this.name = name;
  }
  speak() {
    console.log(`${this.name} made some noise!`);
  }
}

class Dog extends Animal {
  constructor(name) {
    super(name);
  }
  speak() {
    console.log(` dog ${this.name} barked`);
  }
}

class Cat extends Animal {
  constructor(name) {
    super(name);
  }
  speak() {
    console.log(`The cat ${this.name} meowed`);
  }
}

const animal = new Animal("Simba");
const dog = new Dog("bob");
const cat = new Cat("petunia");

dog.speak();
animal.speak();
cat.speak();
