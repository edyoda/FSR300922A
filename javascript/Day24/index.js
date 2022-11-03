var x = 1;

var y = ++x + x++;

console.log(y, x);

var x = 0;

var y = x++ + 2 + x;

console.log(y, x);

var a = 1;
var b = 2;

var c;
var d;

c = ++b;

d = a++;

c++;

b++;

++a;

console.log(a, b, c, d);

//a =3, b=4,c=4,d=1

var x = 10;

var y = x-- + x--;

console.log(x, y);

var x = 3;

var y = --x + --x + x++;

console.log(x, y);

var obj = {
  name: "utkarsh",
  age: 24,
  city: "Agra",
  isAdult: true,
};

console.log(obj);
var city = obj.city;

console.log(city);
console.log(obj["name"]);
obj.city = "Delhi";

console.log(obj);

var obj = {
  name: "utkarsh",
  age: 24,
  isAdult: true,
  addresses: {
    primary: {
      flatNo: "",
      street: "",
      landmark: "",
      state: "",
      pincode: "",
      country: "",
      city: "",
    },
    secondary: {
      flatNo: "",
      street: "",
      landmark: "",
      state: "",
      pincode: "",
      country: "",
      city: "",
    },
  },
};

var obj = {
  name: "utkarsh",
  age: 24,
  isAdult: true,
  father: {
    name: "Gandhi Ji",
    age: 65,
  },
  mother: {
    name: "Indira Gandhi",
    age: 40,
  },

  getName: function () {
    console.log("Utkarsh");
  },
};

obj.getName();
var obj2 = null;
//if you try to access the property which is not defined inside an existing object, you get undifined.

console.log(obj.sister.isAdult);

var user = {
  name: "utkarsh",
  age: 24,
  city: "Agra",
  isAdult: true,
};

console.log(user);

if (user.isAdult) {
  delete user.isAdult;
} else {
  console.log("User is not an Adult");
}
console.log(user);

var allValues = Object.values(user);

console.log(allValues);
var allKeys = Object.keys(user);

console.log(allKeys);

var obj2 = new Object(obj);

console.log(obj2);

var obj = {
  name: "Utkarsh",
};

var obj2 = new Object();
//obj2={}
var obj2 = new Object(obj);
//obj2={name:"Utkarsh"}

var obj3 = Object.create(null);
//obj3= {}

var obj3 = Object.create(obj);
//obj3={}, but you can access obj3.name
console.log(obj3);

Object.freeze(obj);
//can not update value after freezing
