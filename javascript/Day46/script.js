const BASE_URL = `https://5d76bf96515d1a0014085cf9.mockapi.io`;

// .com
// .org
// .in
// .ac
// .io
// .dev

function generateCard(item) {
  let { pathname } = location;
  pathname = pathname.replace("index.html", "product.html");

  return `
  <a href="${pathname}?id=${item.id}" class="card" data-id=${item.id}>
    <article>
      <img
      src=${item.preview}
      />
      <p class="title">${item.name}</p>
      <p class="brand">${item.brand}</p>
      <p class="price">Rs ${item.price}</p>
    </article>
  </a>
          `;
}

function createCard(item) {
  const card = generateCard(item);
  return $(card);
}

function createList(array, id) {
  const listContainer = $(`#${id} > .products-list`);
  for (let i = 0; i < array.length; i++) {
    const card = createCard(array[i]);
    listContainer.append(card);
  }
}

function getJqueryCall() {
  $.get(`${BASE_URL}/product`, (res) => {
    if (res.status === 200) {
      return res;
    }
  }).fail((err) => {
    console.log(err.responseJSON);
    if (err.status === 400) {
      console.log("Bad Request");
    } else if (err.status === 401) {
      console.log("You are not authorised user");
    } else if (err.status === 404) {
      console.log("Wrong API");
    } else {
      console.log("Something went wrong, Try again later!");
    }
  });
}

function getJqueryAjaxCall() {
  $.ajax({
    type: "GET",
    url: `${BASE_URL}/product`,
    success: function (res) {
      if (res.status === 200) {
        return res;
      }
    },
    error: function (err) {
      console.log(err.responseJSON);
      if (err.status === 400) {
        console.log("Bad Request");
      } else if (err.status === 401) {
        console.log("You are not authorised user");
      } else if (err.status === 404) {
        console.log("Wrong API");
      } else {
        console.log("Something went wrong, Try again later!");
      }
    },
  });
}

function postJqueryAjax() {
  const requestObj = {
    title: "foo",
    body: "bar",
    userId: 1,
  };

  $.ajax({
    type: "POST",
    url: "https://jsonplaceholder.typicode.com/posts",
    data: requestObj,
    success: function (res) {
      console.log(res);
    },
    error: function (err) {
      console.log(err);
    },
  });
}

async function getProductList() {
  try {
    const response = await $.get(`${BASE_URL}/product`);
    return response;
  } catch (e) {
    console.log(e);
  }
}

async function initProducts() {
  try {
    const productList = await $.get(`${BASE_URL}/product`);

    //make an api call to get productList;

    const clothings = productList.filter((item) => !item.isAccessory);
    const accessories = productList.filter((item) => item.isAccessory);

    createList(clothings, "clothing");
    createList(accessories, "accesories");
  } catch (e) {
    console.log(e);
  }
}

async function getProductData() {
  const params = new URLSearchParams(location.search);
  const productId = params.get("id");
  try {
    const productDetails = await $.get(`${BASE_URL}/product/${productId}`);

    const productContainer = document.getElementById("product-container");
    const notFoundContainer = document.getElementById("product-not-found");
    const atcBtn = document.getElementById("add-to-cart-btn");

    if (productDetails) {
      //fill detials in page

      const {
        name,
        photos,
        preview,
        price: productPrice,
        brand: productBrand,
        description: desc,
      } = productDetails;

      //chage the webapage title
      document.title = name;

      notFoundContainer.classList.replace("show", "hide");
      productContainer.classList.replace("hide", "show");
      atcBtn.classList.replace("hide", "show");

      const image = productContainer.querySelector(".product-preview");
      const title = productContainer.querySelector(".product-title");
      const description = productContainer.querySelector(
        ".product-description"
      );
      const brand = productContainer.querySelector(".product-brand");
      const price = productContainer.querySelector(".product-price");

      const mainImage = photos.length ? photos[0] : preview;

      image.setAttribute("src", mainImage);
      title.innerHTML = name;
      description.innerHTML = desc;
      brand.innerHTML = productBrand;
      price.innerHTML = productPrice;
    } else {
      // show product not found
      notFoundContainer.classList.replace("hide", "show");
      atcBtn.classList.replace("show", "hide");
      productContainer.classList.replace("show", "hide");
    }
  } catch (e) {}
}

$(document).ready(() => {
  const { pathname } = location;

  if (pathname.includes("index.html")) {
    initProducts();
  } else if (pathname.includes("product.html")) {
    getProductData();
  }
});
