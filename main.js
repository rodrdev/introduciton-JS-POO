class Person {
  firstName = "default";
  lastName = "default";
  age = 0;
  constructor(firstName, lastName, age) {
    console.log(this.firstName);
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
  }

  getFullName() {
    console.log(`${this.firstName} ${this.lastName}`);
  }

  // metodo statico não precisa usar nenhum dado do objeto.
  static speak() {
    console.log("hello world");
  }
}

const person = new Person("Rodrigo", "Ribeiro", 23);

person.getFullName();

Person.speak();
