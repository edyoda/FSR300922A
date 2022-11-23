localStorage.setItem("name", "Utkarsh");
localStorage.setItem("age", 32);
localStorage.setItem("isEligible", true);

//JSON

let user = {
  name: "Ajay",
  city: "Kanpur",
};

localStorage.setItem("user", JSON.stringify(user));

const name = localStorage.getItem("name");

console.log(name);

const userDetails = JSON.parse(localStorage.getItem("user"));

console.log(userDetails);

document.getElementById("details").innerHTML = JSON.stringify(userDetails);

// sessionStorage.getItem()
// sessionStorage.setItem()

localStorage.removeItem("name");
localStorage.removeItem("city");
// sessionStorage.removeItem('')

localStorage.clear();

let obj = {
  name: "utkarsh",
  age: 23,
};

for (let key in obj) {
  console.log(obj[key]);
}

let arr = [1, 2, 3, 4];

for (let i of arr) {
  console.log(i);
}
for (let i = 0; i < arr.length; i++) {}
