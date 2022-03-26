const form = document.querySelector("#todo-form");
const todoInput = document.querySelector("#todo");
const todoList = document.querySelector(".list-group");
const firstCardBody = document.querySelectorAll(".card-body")[0];
const secondCardBody = document.querySelectorAll(".card-body")[1];
const filter = document.querySelector("#filter");
const clearButton = document.querySelector("#clear-todos");

eventListeners();

function eventListeners() {
  form.addEventListener("submit", addTodo);
}

function addTodo(e) {
  const newTodo = todoInput.value.trim();
  // console.log(newTodo);

  if (newTodo === "") {
    /*     <div class="alert alert-danger" role="alert">
                        A simple danger alert—check it out!
                      </div>*/
    showAlert("danger", "Please enter a Todo...");
  } else {
    addTodoToUI(newTodo);
    showAlert("success", "Todo added successfully");
  }
  e.preventDefault();
}

function showAlert(type, message) {
  const alert = document.createElement("div");
  alert.className = `alert alert-${type}`;
  alert.textContent = message;
  // console.log(alert);

  firstCardBody.appendChild(alert);

  setTimeout(function () {
    alert.remove();
  }, 2000);
}

function addTodoToUI(newTodo) {
  /* <li class="list-group-item d-flex justify-content-between">
        Todo 1
          <a href = "#" class ="delete-item">
           <i class = "fa fa-remove"></i>
          </a>
     </li> */

  const listItem = document.createElement("li");
  listItem.className = "list-group-item d-flex justify-content-between";

  const link = document.createElement("a");
  link.href = "#";
  link.className = "delete-item";
  link.innerHTML = " <i class = 'fa fa-remove'></i>";

  listItem.appendChild(document.createTextNode(newTodo));
  listItem.appendChild(link);

  todoList.appendChild(listItem);
  todoInput.value = "";

  // console.log(listItem);
}
