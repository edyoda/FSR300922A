let currentUser = null;
let pageNo = 1;
let totalPages = 1;

$(function () {
  const page = location.pathname;
  const isHome = page.includes("index");
  const isProfile = page.includes("profile");
  updateDomCounter();
  if (isHome) {
    $(".banner").slick({
      infinite: true,
      dots: true,
      autoplay: true,
      autoplaySpeed: 2000,
    });

    getUsers();
    const addUserBtn = $("#add-user-btn");
    addUserBtn.on({
      click: createNewUser,
    });

    const loadMoreBtn = $("#load-more-btn");
    loadMoreBtn.on({
      click: loadMoreData,
    });
  }
  if (isProfile) {
    setCardDetails();
    handleMatchButton();
  }
});

const BASE_URL = "https://reqres.in/api";
const END_POINTS = {
  getUsers: "/users",
  registerUSer: "/register",
};
function loadMoreData() {
  getUsers(++pageNo);
  if (pageNo === totalPages) {
    $("#load-more-btn").hide();
  }
}
function getUsers(pageNo = 1) {
  $.get(
    `${BASE_URL + END_POINTS.getUsers}?page=${pageNo}`,
    function (data, status) {
      // console.log(data, status);
      creaList(data, status);
    }
  ).fail((e) => {
    console.log(e);
  });
}

function createCardTemplate(userDetails, index) {
  const { avatar, email, first_name, id, last_name } = userDetails;
  const pathName = location.pathname.replace("index", "profile");
  return `
    <a href="${pathName}?profile_id=${id}">
    <div class="card" data-id=${id}>
  <div class="card-img">
    <img src=${avatar} />
  </div>

  <p><span>${first_name}</span><span>${last_name}</span></p>
  <div class="card-footer">
    <span>${email}</span>
    <span
      ><a href="mailto:${email}"><i class="fa-solid fa-envelope"></i></a
    ></span>
  </div>
</div>
</a>
    `;
}

function createUserCard(userDetails) {
  const cardTemplate = createCardTemplate(userDetails);

  return $(cardTemplate);
}

function creaList(data, status) {
  if (status === "success" && data.data) {
    totalPages = data.total_pages;
    const userList = data.data;

    const jsonUser = JSON.stringify(userList);
    localStorage.setItem("users", jsonUser);
    const container = $("#user-list");
    userList.forEach((item, index) => {
      const card = createUserCard(item, index);

      container.append(card);
    });
  }
}

const userDetails = {
  username: "utkarsh_gupta_316",
  email: "utkarsh@gmail.com",
  password: "12313121",
};

function createNewUser(event) {
  console.log(userDetails);
  $.post(
    `${BASE_URL + END_POINTS.registerUSer}`,
    userDetails,
    function (data, status) {
      console.log(data, status);
      console.log("User created succesfully");
    }
  ).fail((e) => {
    console.log(e.responseJSON.error);
  });
}

// apiCall('GET',url)
// apiCall('POST',url,data)
// apiCall('PUT',url,data)
// apiCall('DELETE',url,data)

function apiCall(type, url, data) {
  $.ajax({
    type: type,
    url: url,

    data: data,
    success: function (response) {
      console.log(response);
    },
    error: function (request, status, errorThrown) {
      console.log(request, status, errorThrown);
    },
  });
}

function setCardDetails() {
  const userId = getCurrentId();
  // showLoader();
  getUserDetails(userId)
    .then((res) => {
      setDomData(res);
    })
    .catch((err) => {
      console.log(err);
    });
  // .finally(() => {
  //   hideLoader();
  // });

  // const user = await asynAPICall(userId); // make current function async
  // console.log(user);

  // const allUsers = JSON.parse(localStorage.getItem("users"));
  // const user = allUsers.find((i) => i.id === userId);
}

function getUserDetails(userID) {
  return new Promise((resolve, reject) => {
    $.get(
      `${BASE_URL + END_POINTS.getUsers}/${userID}`,
      function (data, status) {
        if (data) {
          resolve(data);
        } else {
          reject("Not getting data");
        }
      }
    ).fail((e) => {
      console.log(e);
      reject(e);
    });
  });
}
function asynAPICall(userID) {
  return $.get(`${BASE_URL + END_POINTS.getUsers}/${userID}`);
}
function setDomData(user) {
  if (user) {
    currentUser = user.data;
    const card = $("#profile-container .card");
    const userImge = card.find("img");
    const userName = card.find("h1");
    const email = card.find(".email");
    const description = card.find(".description");

    userImge.attr("src", user.data.avatar);
    userName.html(`${user.data.first_name} ${user.data.last_name}`);
    email.html(user.data.email);
    description.html(user.support.text);
  } else {
    console.log("User is not valid");
  }
}

function handleMatchButton() {
  const btn = $("#match-user-btn");
  let currentMatches = JSON.parse(localStorage.getItem("count")) || 0;
  let allMatches = JSON.parse(localStorage.getItem("matches")) || [];
  const userId = getCurrentId();

  btn.on({
    click: function (event) {
      let isAlreadyMatched = allMatches.find((i) => i.id === userId);
      if (isAlreadyMatched) {
        // unmatch
        // decrease the counter from the dom and local storage
        // remove the user from allMatches and local storage
      } else {
        currentMatches++;
        localStorage.setItem("count", currentMatches);
        allMatches.push(currentUser);
        localStorage.setItem("matches", JSON.stringify(allMatches));
        updateDomCounter();
        // change the text of btn to Unmatch
      }
    },
  });
}

function updateDomCounter() {
  let currentMatches = JSON.parse(localStorage.getItem("count")) || 0;

  $(".matches-counter .count").html(currentMatches);
}

function getCurrentId() {
  const searchQuery = location.search;
  const searchObj = new URLSearchParams(searchQuery);
  const userId = Number(searchObj.get("profile_id"));
  return userId;
}
