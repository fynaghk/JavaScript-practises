const lowBtn = document.querySelector("#lower");
const addBtn = document.querySelector("#add");
const resetBtn = document.querySelector("#reset");
let beginner = 0;

lowBtn.addEventListener("click", ()=>{
  beginner--;
  document.querySelector("h1").innerHTML = beginner;

})

addBtn.addEventListener("click", ()=>{
  beginner++;
  document.querySelector("h1").innerHTML = beginner;

})

resetBtn.addEventListener("click", ()=>{
  beginner = 0;
  document.querySelector("h1").innerHTML = beginner;
})