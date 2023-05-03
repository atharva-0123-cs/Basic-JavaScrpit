const todoForm = document.querySelector(".form-todo");
const todoInput = document.querySelector(".form-todo input[type='text']");
const todoList = document.querySelector(".todo-list");
// const doneButton = document.querySelector(".done");
// const removeButton = document.querySelector(".remove");
// console.log(removeButton);
// console.log(todoInput.ariaValueText);

todoForm.addEventListener("submit", (e)=>{
    e.preventDefault();
    const newText = todoInput.value;
    const newLi = document.createElement("li");
    const newinnerHTML = ` 
    <span class="text">${newText}</span>
    <div class="todo-buttons">
        <button class="todo-btn done">Done</button>
        <button class="todo-btn remove">Remove</button>
    </div>`;

    newLi.innerHTML = newinnerHTML;
    todoList.append(newLi);
    todoInput.value = "";
});
// console.log(todoList.childNodes);

todoList.addEventListener("click",(e)=>{
    // check if user clicked on done button
    if(e.target.classList.contains("remove")){
        console.log("u wanna remove");
        const removeli =  e.target.parentNode.parentNode.previousElementSibling
        console.log(removeli);
        removeli.remove();
     }
     if(e.target.classList.contains("done")){
         const liSpan = e.target.parentNode.previousElementSibling;
         liSpan.style.textDecoration = "line-through";
     }
});