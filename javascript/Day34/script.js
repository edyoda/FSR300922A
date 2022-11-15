// selectClassElements();
// selectIdElement();
// selectTagElement();
// selectElementBySelector(".container");
// selectElementBySelector("#ID");
// selectElementsBySelector(".container");
// createElement();
// showListOfUsers();
// removeHeading();
// getClassName();
// getClassList();

function selectClassElements() {
  const elements = document.getElementsByClassName("container");

  for (let i = 0; i < elements.length; i++) {
    elements[i].style.color = "red";
  }
}

function selectIdElement() {
  const element = document.getElementById("ID");

  element.style.color = "pink";
  element.style.border = "1px solid red";
}

function selectTagElement() {
  const elements = document.getElementsByTagName("h1");
  console.log(elements[0]);
}

function selectElementBySelector(selector) {
  const element = document.querySelector(selector);
  console.log(element);
}

function selectElementsBySelector(selector) {
  const element = document.querySelectorAll(selector);
  console.log(element);
}

function createElement() {
  const element = document.createElement("h2");
  const txt = document.createTextNode("Hello I am H2");
  element.appendChild(txt);

  const body = document.querySelector("body");

  body.appendChild(element);
}

function showListOfUsers() {
  const users = ["Aman", "Ajay", "Athira", "Sweta", "Praveeen", "Trimula"];

  const list = document.createElement("ul");
  for (let i = 0; i < users.length; i++) {
    const li = document.createElement("li");
    const txt = document.createTextNode(users[i]);
    // li.innerHTML = users[i];
    li.appendChild(txt);
    list.appendChild(li);
  }
  list.style.listStyleType = "none";
  const container = document.getElementById("list_of_users");
  container.appendChild(list);
}

function removeHeading() {
  const heading = document.querySelector("h1");
  heading.remove();
}

function getClassName() {
  const element = document.querySelector(".container");
  element.className = "box";
}

function getClassList() {
  const element = document.querySelector(".container");
  element.classList.add("box");
  element.classList.remove("big");
  element.classList.replace("big", "small");
  element.classList.toggle("show");
  const isBox = element.classList.contains("box");
}
