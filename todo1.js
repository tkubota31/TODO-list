let todoList = document.getElementById("todoList");
let todoForm = document.getElementById("todoForm");
let input = document.getElementById("task");
todoList.innerHTML = localStorage.getItem("list");

todoForm.addEventListener("submit", function (event) {
    event.preventDefault();

    let newList = document.createElement("li");
    let newBtn = document.createElement("button");

    newBtn.innerText = "done";
    newList.innerText = input.value;
    input.value = '';

    newList.appendChild(newBtn);
    todoList.append(newList);

    todoList.addEventListener("click", function (event) {
        if (event.target.tagName === "BUTTON") {
            event.target.parentElement.remove();
        }
        else if (event.target.tagName === "LI") {
            event.target.style.textDecoration = "line-through";
        }
    });

    localStorage.setItem("list", todoList.innerHTML);

});
