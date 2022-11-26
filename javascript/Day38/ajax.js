function apiCall() {
  try {
    const request = new XMLHttpRequest(); //readyState:0

    request.open("GET", "https://jsonplaceholder.typicode.com/posts"); // readyState:1

    request.send(); // readyState:2

    request.onreadystatechange = function () {
      console.log(this);

      if (this.readyState === 3) {
        // readyState:3 in progress
        // show progress bar on screen
        showLoader();
      }
      if (this.readyState === 4) {
        // readyState:4 api means done with response
        // show response on the screen
        hideLoader();
        if (this.status >= 200 && this.status < 400) {
          const response = this.responseText; // successfull response
          const parsedResponse = JSON.parse(response);
          console.log(parsedResponse);
          createList();
          parsedResponse.forEach((each_item) => {
            createListItem(each_item);
          });
        } else if (this.status === 400) {
          console.log("Bad Request");
        } else if (this.status === 401) {
          console.log("You are not authorised user");
        } else if (this.status === 404) {
          console.log("Wrong API");
        } else {
          console.log("Something went wrong, Try again later!");
        }
      }
    };
  } catch (e) {
    console.log(e);
  }
}

function createList() {
  const ul = document.createElement("ul");
  const main = document.querySelector("main");
  main.append(ul);
}

function createListItem(item) {
  const li = document.createElement("li");
  const title = document.createElement("b");
  const body = document.createElement("p");

  title.innerHTML = item.title;
  body.innerHTML = item.body;
  li.append(title);
  li.append(body);
  const ul = document.querySelector("main ul");
  ul.append(li);
}

function showLoader() {
  const loader = document.querySelector("main #loader");
  loader.classList.replace("d-none", "d-block");
}

function hideLoader() {
  const loader = document.querySelector("main #loader");
  loader.classList.replace("d-block", "d-none");
}

apiCall();

const requestObj = {
  title: "foo",
  body: "bar",
  userId: 1,
};

function postListItem(requestObj) {
  const request = new XMLHttpRequest(); // browser inbuilt class, object, // readyState:0

  request.open("POST", "https://jsonplaceholder.typicode.com/posts", true); // readyState:1

  const requestData = JSON.stringify(requestObj);

  request.send(requestData); // readyState:2
  request.onreadystatechange = function () {
    // console.log(this);
    if (this.readyState === 3) {
      // readyState:3 in progress
      // show progress bar on screen
      showLoader();
    }
    if (this.readyState === 4) {
      // readyState:4 means done with response
      // show response on the screen
      hideLoader();
      if (this.status >= 200 && this.status < 300) {
        const response = this.responseText; // successfull response
        const parsedResponse = JSON.parse(response);

        console.log(parsedResponse);
      } else if (this.status === 400) {
        console.log("Bad Request");
      } else if (this.status === 401) {
        console.log("You are not authorised user");
      } else if (this.status === 404) {
        console.log("Wrong API");
      } else {
        console.log("Something went wrong, Try again later!");
      }
    }
  };
}
postListItem();

try {
  console.log(kite);
} catch (err) {
  console.log(err);
}
