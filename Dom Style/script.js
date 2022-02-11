const firstTitle = document.getElementById("first-title");
firstTitle.style.color = "red";

// ====== title selected by id & applied style

const secondTitle = document.getElementById("second-title");
secondTitle.style.color = "blue";

// ====== title selected by id & applied style

const thirdTitle = document.getElementById("third-title");
thirdTitle.style.color = "green";

// ====== title selected by id & applied style

const lastTitle = document.getElementById("last-title");
lastTitle.style.color = "goldenrod";

// ====== title selected by id & applied style

const blogDetails = document.getElementsByClassName("blog-details");
for (const p of blogDetails) {
  console.log(p);
}

const nameOfOrganization = document.getElementById("name").value;
console.log(nameOfOrganization);

// =========== make background red & white ========

document.getElementById("button").addEventListener("click", function () {
  document.body.style.backgroundColor = "red";
});

const button1 = document.querySelector("#button1");
button1.addEventListener("click", function () {
  document.body.style.backgroundColor = "white";
});

// =========== new blog add by js ==========

const blogContainer = document.getElementById("blog-container");
const newBlog = document.createElement("div");
const h3 = document.createElement("h3");
h3.innerText = "my Awesome Blog -5";

function add() {
  const cbalance = document.getElementById("c-balance").innerText;
  const inputValue = document.getElementById("input").value;
  console.log(cbalance + inputValue);
}
