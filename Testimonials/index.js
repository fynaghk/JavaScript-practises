const leftBtn = document.querySelector(".fa-arrow-alt-circle-left");
const rightBtn = document.querySelector(".fa-arrow-alt-circle-right");
const myDiv = document.querySelector("#all");

leftBtn.addEventListener("click", moveToLeft);
rightBtn.addEventListener("click", moveToRight);

function moveToLeft(){
  myDiv.animate([
     {transform: 'translateX(0px)'},
     {transform: 'translateX(-750px)'},
  ],  {
    duration: 1000,
  })

}

function moveToRight(){
  myDiv.animate([
    {transform: 'translateX(0px)'},
    {transform: 'translateX(750px)'},
 ],  {
   duration: 1000,
 })
}
