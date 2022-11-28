//constructor function
function Person(name,age,gender="Male"){
    //properties
    this.name =name;
    this.age = age;
    this.gender= gender;
  }
  
  
  //instantiating
  const a = new Person("Utkars",24);
  const b = new Person("Ahemad",22);
  const c = new Person("Satyam",23);
  const d = new Person("Lakhan",32);
  const e = new Person("Sunidhi",22,"female");
  //instance
  
  console.log(a,b,c,d,e)
  //Object


  class Person{
    constructor(name,age){
      this.name = name;
      this.age =age;
    }
    getName(){
      console.log(this.name)
    }
  }
  
  
  const person1 = new Person('Ram',23)
  const person2 = new Person('Athira',21)
  
  person2.getName();



  
  
  person1.game = "Boxing"
  
  
  person2.makeup = "nykaa";
  
  
  console.log(person1,person2)