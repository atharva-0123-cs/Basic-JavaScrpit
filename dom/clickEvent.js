//<---- intro to Events ---->
// 1] Clilck
// const allBtn = document.querySelectorAll(".my-buttons .btn");

// console.log(allBtn);

// allBtn.forEach((b,v)=>{
//     console.log(b,v);
// })

// const ele = document.createElement("div");
// const h1 = document.createElement("h1");
// const body = document.body;

//1)'this' keyword for arrow function
// for(let btn of allBtn){
//     // console.log(btn);
//     btn.addEventListener("click", ()=>{
//         // console.log(btn);
//         h1.textContent = btn.textContent;
//         ele.append(h1);
//         body.append(ele)
//     })
// }

// 2)'this' keyword for callback function
// for(let i=0; i<allBtn.length; i++){
//     function callback(){
//         console.log(this);
//         h1.textContent = this.textContent;
//         ele.append(h1);
//         body.append(ele)
//     }
//     allBtn[i].addEventListener("click", callback);
// }

// 3)'this' keyword for callback function 
// allBtn.forEach((btn)=>{
//     btn.addEventListener("click", function(){
//         console.log(this);
//         h1.textContent = this.textContent;
//         ele.append(h1);
//         body.append(ele)
//     })
// })

// <---- event object ---->
// const firstBtn = document.querySelector("#one");

// 1) event object for callback function 
// firstBtn.addEventListener("click",function(event){
//     console.log(event); 
//     console.log(this); 
// })

// 2)event object for arrow function
// firstBtn.addEventListener("click",(event)=>{
//     console.log(event); 
//     console.log(thist); 
// })

// firstBtn.addEventListener("click",(event)=>{
//     console.log(event.target); 
//     console.log(event.target.textContent);// ----> My Button one 
//     console.log(event.currentTarget.textContent);// ----> My Button one 
//     console.log(this); 
// })

// <---- keypress events and mouseover events ---->
const body = document.body;
const firstBtn = document.querySelector("#one");

//keypress events
// body.addEventListener("keypress",(e)=>{
//     console.log(e);
//     console.log(e.key);
// })

//mouseover events
//mouseover
firstBtn.addEventListener("mouseover",(e)=>{
    console.log(e);
    // console.log(e.key);
})
//mouseleave
firstBtn.addEventListener("mouseleave",(e)=>{
    console.log(e);
    // console.log(e.key);
})

