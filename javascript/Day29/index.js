let x = 0;

while (x < 3) {
  console.log("Hello" + " " + x);
  x++;
}
console.log(x);

while (x < 5) {
  console.log(x);
  if (x == 3) {
    break;
  }
  x++;
}

let array = [
  "Ajay",
  "Swetha",
  "Sunidhi",
  "Vignesh",
  "Sowjanya",
  "Utkarsh",
  "Aathira",
];
let curr_index = 0;

while (curr_index < array.length) {
  const student = array[curr_index];

  console.log(student);

  curr_index++;
}
let target = "Utkarsh";

while (curr_index < array.length) {
  const student = array[curr_index];

  if (target === student) {
    break;
  }
  console.log(student);

  curr_index++;
}
console.log(curr_index);

let new_array = [
  "Ajay",
  "Swetha",
  "Sunidhi",
  "Ajay",
  "Vignesh",
  "Sowjanya",
  "Utkarsh",
  "Aathira",
  "Utkarsh",
];
let index = new_array.length - 1;
let find = "Ajay";

while (index >= 0) {
  const student = new_array[index];

  if (find === student) {
    break;
  }
  console.log(student);

  index--;
}
console.log(index);

let min_array = [13, 40, 10, 5, 1, -1, -3, 12, 24];

let min = Infinity;

for (let i = 0; i < min_array.length; i++) {
  const currentNumber = min_array[i];

  if (currentNumber <= min) {
    min = currentNumber;
  }
}
console.log(min);
