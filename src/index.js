document.addEventListener("DOMContentLoaded", () => {
  // your code here
  const input = document.getElementById("create-task-form");
  const formElement = document.querySelector("form");
  formElement.addEventListener("submit", (e) => {
    let newtask = input.value;

    e.preventDefault();

    handleToDo(e.target.new_todo.value);
    formElement.reset();
  });
});

function handleToDo(toDo) {
  console.log(toDo);
  let p = document.createElement("p");
  let btn = document.createElement("button");
  btn.addEventListener("click", handleDelete);
  btn.textContent = "x";
  p.textContent = `${toDo} `;
  p.appendChild(btn);
  console.log(p);
  document.querySelector("#list").appendChild(p);
}
function handleDelete(e) {
  e.target.parentNode.remove;
}
