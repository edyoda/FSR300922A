$(document).ready(() => {
  // $('.class #id')
  //document.querySelectorAll('.class #id')

  const allP = $(".para");
  console.log(allP);

  const first = $("p:first");
  console.log(first);

  const last = $("p:last");
  console.log(last);

  const firstEl = $("p").first();
  console.log(firstEl);

  const lastEl = $("ul li").last();
  console.log(lastEl);

  const firstIndex = $("ul li").eq(1);
  console.log(firstIndex);

  const el = $("ul li").eq(0);
  console.log(el);
});

$(() => {
  console.log("I am Ready");
  const ulContent = $("ul").html();
  const heading = $("h1").html();
  const li = $("ul li:first").text();
  console.log(li);

  setTimeout(() => {
    $("h1").html("Hello It is jQuery");
  }, 2000);

  const newLi = $("<li>Utkarsh</li>");

  $("ul").append(newLi);

  const table = $("table");

  const newRow = `
        <tr>
        <th>Name</th>
        <th>Age</th>
      </tr>
      <tr>
        <td>Utkarsh</td>
        <td>23</td>
      </tr>

  `;
  const tr = $(newRow);

  table.append(tr);
});
