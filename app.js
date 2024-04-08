const todoform = document.getElementById("form");
const product = document.getElementById("productList");
let todoarr = [];
todoform.addEventListener("submit", (e) => {
  e.preventDefault();
  todoarr.push(searchinp.value);
  let index = searchinp.value;
  searchinp.value = "";
  product.innerHTML += `   <li>${index}</li> `;
  crattodos(todoarr);
});
function crattodos(todoarr) {
  product.innerHTML = "";
  todoarr.forEach((element) => {
    const li = document.createElement("li");
    const btn = document.createElement("button");
    li.classList.add("item");
    btn.classList.add("item1");
    li.textContent = element;
    btn.textContent = "remuve";
    btn.addEventListener("click", () => {
      deletetodo(element);
    });
    product.appendChild(li);
    product.appendChild(btn);
  });
}
function deletetodo(item) {
  let index = todoarr.indexOf(item);
  todoarr = todoarr.slice(0, index).concat(todoarr.slice(index + 1));
  crattodos(todoarr);
}
let dark = document.querySelector("#dark");
dark.addEventListener("click", () => {
  if (document.body.classList.contains("dark")) {
    document.body.classList.remove("dark");
  } else {
    document.body.classList.add("dark");
  }
});
