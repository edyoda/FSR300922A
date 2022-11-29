class Parent {
  constructor() {
    this.skinColor = "brown";
    this.eyeColor = "black";
    this.language = "hindi";
    this.religion = "Hindu";
  }
  getReligion() {
    return this.religion;
  }
}

class Child extends Parent {
  constructor(name, age, gender) {
    super();
    this.name = name;
    this.age = age;
    this.gender = gender;
  }
}

const c = new Child("Sai", 23, "M");

const p = new Parent();

console.log(c.getReligion());

class CompanyDetails {
  constructor() {
    this.companyName = "Hindustan Uniliver Pvt. Ltd.";
    //20 more properties
  }
}

class Shampoo extends CompanyDetails {}

class Soap extends CompanyDetails {}

class Oil extends CompanyDetails {}

class A {
  constructor() {
    this.a = "A";
  }
}
class B extends A {
  constructor() {
    super();
    this.b = "B";
  }
}
class C extends B {
  constructor() {
    super();
    this.c = "C";
  }
}

const c = new C();
const b = new B();

console.log(c, b);

obj.__proto__.__proto__.__proto__.__proto__.__proto__;

class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
}

class Doctor extends Person {
  constructor(...args) {
    super(...args);
    this.profession = "Doctor";
  }
}

const d = new Doctor("Sunidhi", 21);
console.log(d);
