// VARIABLES
let todoButton = document.querySelector(".todo-button");
let todoList = document.querySelector(".todo-list");
let todoInput = document.querySelector(".todo-input");

//EVENTS
todoButton.addEventListener("click", function () {
    if (todoInput.value !== "") {
        //DIV
        let todoDiv = document.createElement("div");
        todoDiv.classList.add("todo-div");
        //List
        let todoItem = document.createElement("li");
        todoItem.innerText = todoInput.value;
        todoItem.classList.add("todo-item");
        todoDiv.appendChild(todoItem);
        //Done Button
        let doneButton = document.createElement("button");
        doneButton.innerHTML = '<i class="fas fa-check"></i>';
        doneButton.classList.add("done-button");
        todoDiv.appendChild(doneButton);
        //Delete Button
        let deleteButton = document.createElement("button");
        deleteButton.innerHTML = '<i class="fas fa-trash"></i>';
        deleteButton.classList.add("delete-button");
        todoDiv.appendChild(deleteButton);
        //Add Todo Div
        todoList.appendChild(todoDiv);
        todoInput.value = "";

        doneButton.addEventListener("click", function () {
            todoItem.style.textDecoration = "line-through";
        });

        doneButton.addEventListener("dblclick", function () {
            if (todoItem.style.textDecoration === "line-through") {
                todoItem.style.textDecoration = "none";
            }
        });

        deleteButton.addEventListener("click", function () {
            todoDiv.remove();
        });
    }
});
