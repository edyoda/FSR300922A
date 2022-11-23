console.log("Hey");

setTimeout(() => {
  console.log("Utkarsh");
}, 3000);

console.log("Bye");

let timer1 = setInterval(() => {
  console.log(new Date().getSeconds());
}, 1000);

setTimeout(() => {
  clearInterval(timer1);
}, 5000);

window.screen;

const search = new URLSearchParams(location.search);
/*

{
    room:2,
    min_bathroom:3,
    min_bedroom:4,
    date:['20-may-2022','22-may-2022']

}

*/

search.get("room");
search.get("min_bathroom");
search.getAll("date");
