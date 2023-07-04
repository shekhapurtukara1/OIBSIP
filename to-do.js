    var input = document.getElementById("todo-input");
    var todoList = document.getElementById("todo-list");

    // Add event listener for when the Enter key is pressed
    input.addEventListener("keypress", function(event) {
      if (event.keyCode === 13) { // 13 represents the Enter key
        event.preventDefault();
        addTodo();
      }
    });

    // Function to add a new todo item
    function addTodo() {
      var todoText = input.value;

      if (todoText.trim() !== "") {
        var todoItem = document.createElement("li");
        var checkbox = document.createElement("input");
        checkbox.type = "checkbox";
        checkbox.addEventListener("change", toggleTodo);

        var todoLabel = document.createElement("label");
        todoLabel.textContent = todoText;

        var deleteBtn = document.createElement("span");
        deleteBtn.className = "delete-btn";
        deleteBtn.textContent = "X";
        deleteBtn.addEventListener("click", deleteTodo);

        todoItem.appendChild(checkbox);
        todoItem.appendChild(todoLabel);
        todoItem.appendChild(deleteBtn);

        todoList.appendChild(todoItem);
        input.value = "";
      }
    }

    // Function to toggle the completed status of a todo item
    function toggleTodo() {
      var todoItem = this.parentNode;
      todoItem.classList.toggle("completed");
    }

    // Function to delete a todo item
    function deleteTodo() {
      var todoItem = this.parentNode;
      todoList.removeChild(todoItem);
    }