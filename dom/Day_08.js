// console.dir(document.getElementById("main-heading"));
// const element = document.querySelectorAll(".nav-item");
// const element1 = document.querySelector(".nav-item");
// console.dir(element);
// console.dir(element1);

//<----change text---->
// textContent and innerText

// const heading = document.getElementById("main-heading");
// heading.innerText = "Hello";
// // heading.textContent = "World";

// console.log(heading.innerText);
// // console.log(heading.textContent);

// <----change styles of elements---->
// const head = document.querySelector("#main-heading");
// const heading = document.getElementById("main-heading");

// console.log(head.style);
// heading.style.color = "#1100ff";
// head.style.color = "cyan";
// head.style.backgroundColor = "rgb(0.1,0.2,0.03)";

// <----get and set attributes---->

// const link = document.querySelector("a");
// console.log(link.getAttribute("href"));

// const input = document.querySelector(".form-todo input");
// console.log(input.getAttribute("type"));

// const link = document.querySelector(".nav-item");
// link.setAttribute("href","https://codprog.com");
// console.log(link.getAttribute("href"));

// console.log("Hello World");

// <---- HTMLCollection & NodeList ---->
//get multiple elements using getElements by class name ---> HTMLCollection(array like object --> indexing, length property)
// const navItem = document.getElementsByTagName("a"); //HTMLCollection
// console.log(navItem);
// ---> we can't use forEach method to iterate through HTMLCollection

// for(let i=0; i<navItem.length; i++){
//     // console.log(navItem[i]);
//     navItem[i].style.backgroundColor = "#bbbbff";
//     navItem[i].style.color = "#bb44ff";
// }

// for(let item of navItem){
//     // console.log(item);
//     item.style.color = "#ff00bb";
// }

// for(let item in navItem){
//     console.log(item);
//     // item.style.color = "#ff00bb";
// }

//get multiple elements items using querySelectorAll  ---> NodeList
// const navItem = document.querySelectorAll(".nav-item"); //NodeList
// console.log(navItem);
// ---> we can use forEach method to iterate through NodeList

// for(let i=0; i<navItem.length; i++){
//     // console.log(navItem[i]);
//     navItem[i].style.backgroundColor = "#bbbbff";
//     navItem[i].style.color = "#bb44ff";
// }

// for(let item of navItem){
//     // console.log(item);
//     item.style.backgroundColor = "red";
// }

// for(let item in navItem){
//     console.log(item);
//     // item.style.color = "#ff00bb";
// }

// navItem.forEach(item => console.log(item));
// OR
// navItem.forEach((item)=>{
//     console.log(item);
//     item.style.backgroundColor = "red";
// })

// <---- converting NodeList to an Array ---->

// const navItem = document.getElementsByTagName("a"); //HTMLCollection
// console.log(navItem);

// let arr = Array.from(navItem); //  converting NodeList to an Array
// console.log(arr);
// console.log(Array.isArray(arr));

// arr.forEach((item) => {item.style.backgroundColor = "red";})

// <---- innerHTML ---->
// const headLine = document.querySelector(".headline");
// console.log(headLine.innerHTML);
// headLine.innerHTML = "<h1> innerHTMl changed</h1>";
// headLine.innerHTML += "<button class=\"btn\">Learn More</button> ";
// console.log(headLine.innerHTML);

// <---- DOM TREE ---->

// Example: index2.html
{
  /* <html>
      <head>
          <title>Dom traversing</title>
          <script src="./Day_08.js" defer></script>
      </head>
      <body>
          <div class="container">
              <h1>My heading</h1>
              <p>Some useful information</p>
          </div>
      </body>
  </html> */
}

//                  |Document|
//                      |
//                    |HTML|
//                   /  |     \
//                  /   |      \
//                 /   |NS|     \
//   -----------|Head|---------  \
//   |    |     |    |        |  |Body|
//   |    |     |    |        |    |
//   |    |     |    |        |   --------------
//   |    |     |    |        |   |      |     |
//   |    |     |    |        |  |NS|  |div|  |NS|
//   |    |     |    |        |          |
//   |    |     |    |        |   ----------------------
// |NS||title| |NS| |scrpit| |NS| |     |       |      |
//        |                       |     |       |      |
//        |                       |     |       |      |
// |"Don traversing"|           |NS|   |h1|    |NS|   |p|
//                                      |              |
//                                      |              |
//                                  |"My Heading"|  |"Info"|
// |NS| = #text = "\n"

// <---- Sbling Relation ---->
// const rootNode = document.getRootNode(); // #document
// console.log(rootNode);

// const htmlElementNode = rootNode.childNodes[0]; // #HTML
// console.log(htmlElementNode); // #html
// console.log(htmlElementNode.childNodes); // NodeList(3) [head, text, body]

// const headNode = htmlElementNode.childNodes[0]; // #head
// console.log(headNode);

// const textNode = htmlElementNode.childNodes[1]; // #text
// console.log(textNode);

// const bodyNode = htmlElementNode.childNodes[2]; // #body
// console.log(bodyNode);

// console.log(headNode.nextSibling); // #text
// console.log(headNode.nextElementSibling); // #body
// console.log(headNode.childNodes); // NodeList(5) [text, title, text, script, text]

// Example 
// const h1 = document.querySelector("h1");
// const div = h1.parentElement; // div.container
// console.log(div);
// console.log(h1.parentNode); // div.container

// div.style.color= "#aabbff";
// div.style.backgroundColor= "#3faabb";

// const body = document.body;
// const btn = h1.nextElementSibling.nextElementSibling;
// console.log(btn);

// btn.addEventListener("click", ()=>{
//     num = Math.floor(Math.random()*125);
//     body.style.backgroundColor = `rgb(${10+num}, ${20+num}, ${30+num})`;
//     console.log(body.style.backgroundColor);
// })


// back to index.html

// const sectionTodo = document.querySelector(".section-todo");
// console.log(sectionTodo.classList); // DOMTokenList(2) ['section-todo', 'container', value: 'section-todo container']
// console.log(sectionTodo.className); // section-todo container

// innerHTML to add html element 
// const todoList = document.querySelector(".todo-list");
// console.log(todoList.innerHTML);
// todoList.innerHTML += "<li>New todo </li>"
// todoList.innerHTML += "<li><div>New todo1</div> </li>"
// todoList.innerHTML += "<li><div>New todo1</div><button class= \"todo-btn\">DONE</button> </li>"

// <---- document.createElement(); ---->
// append
// prepend
// remove

// const newTodo = document.createElement("li");
// const newTodoText = document.createTextNode("Teach Student");
// const todoList = document.querySelector(".todo-list");


// newTodo.append(newTodoText);
// // console.log(newTodo);   

// //append
// // todoList.append(newTodo);
// // console.log(todoList);

// prepend
// todoList.prepend(newTodo);
// console.log(todoList);

// const todoList1 = document.querySelector(".todo-list li");
// todoList1.remove();
// console.log(todoList1);

//after
//before

// const newTodo = document.createElement("li");
// const newTodoText = document.createTextNode("Teach Student");
// const todoList = document.querySelector(".todo-list");

// newTodo.append(newTodoText);

// //after
// todoList.after(newTodo);
// console.log("todoList : ", todoList);

// //before
// todoList.before(newTodo);
// console.log("todoList : ", todoList);

// <---- clone nodes ---->
// const li = document.createElement("li");
// const ul = document.querySelector(".todo-list");
// li.textContent = "new li";

// const li2 = li.cloneNode(true);

// ul.prepend(li);
// ul.append(li2);

// <---- static list vs Live list ---->
// document.querySelectorAll() ----> This will return static list
// document.getElementBySOME_THING() ---->  This will return Live list

// const listItem = document.querySelectorAll(".todo-list li"); //--> NodeList [li]
// console.log(listItem)
// const ele = document.createElement("li");
// ele.textContent = "Emlement";
// const ul = document.querySelector(".todo-list");
// ul.append(ele);
// console.log(listItem);

// const listItem1 = document.getElementsByTagName(".todo-list li"); // --> HTMLCollection []
// console.log(listItem1)
// const ele1 = document.createElement("li");
// ele1.textContent = "Emlement";
// const ul1 = document.querySelector(".todo-list"); 
// ul1.append(ele1);
// console.log(listItem1);

// <---- dimensions of Element ---->
// const sectionTodo = document.querySelector(".section-todo");
// console.log(sectionTodo.getBoundingClientRect());

// <---- intro to Events ---->
// mostly we use 'click' event 
// 1) By using onclick method
// const btn = document.querySelector(".btn-headline");
// console.log(btn);
// btn.onclick = ()=>{
//     console.log("you clicked me");
// }
// 2) by using addEventListener method
// const btn = document.querySelector(".btn-headline");
// const btnText = btn.textContent;
// console.log(btnText);
// btn.addEventListener("click", (s)=>{
//     console.log(s);
// })

// <---- this keyword ---->

const btn = document.querySelector(".btn-headline");
function myfunc(){
    console.log("value of this :",this); //----> <button class="btn btn-headline">Learn More</button>
}
//1)'this' keyword for callback function
btn.addEventListener("click", myfunc);
// console.log(this);

//1)'this' keyword for arrow function
btn.addEventListener("click", ()=>{
    console.log(this); // ----> Window 
});
