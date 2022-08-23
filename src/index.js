document.addEventListener("DOMContentLoaded", () => {
  const form = document.querySelector("form");
  form.addEventListener("submit", (e) => {
    e.preventDefault();
    let li = document.createElement("li");
    const userInput = document.getElementById("new-task-description");
    li.innerText = userInput.value;
    let ul = document.querySelector("ul");
    ul.append(li);
    const button = document.createElement("button");
    button.innerText = "X";
    const div = document.getElementById("list");
    li.appendChild(button);
    button.addEventListener("click", () => {
      li.remove();
    });
  });
});

