const redBtn = document.querySelector("#red");
const greenBtn = document.querySelector("#green");
const blackBtn = document.querySelector("#black");
const blueBtn = document.querySelector("#blue");
const yellowBtn = document.querySelector("#yellow");

const box = document.querySelector("#box");
const again = false;

redBtn.addEventListener("click", ()=>{
  box.style.background="red";
})

greenBtn.addEventListener("click", ()=>{
  box.style.background="green";
})

blackBtn.addEventListener("click",  ()=>{
  box.style.background="black";
})

blueBtn.addEventListener("click",  ()=>{
  box.style.background="blue";
})

yellowBtn.addEventListener("click",  ()=>{
  box.style.background="yellow";
})
