const leftBtn = document.querySelector(".fa-arrow-alt-circle-left");
const rightBtn = document.querySelector(".fa-arrow-alt-circle-right");
const img = document.querySelector("figure");
const comment = document.querySelector("p");
const star = document.querySelector(".icons");

leftBtn.addEventListener("click", moveToLeft);
rightBtn.addEventListener("click", moveToRight);

function moveToLeft(){
  img.animate([
     {transform: 'translateX(0px)'},
     {transform: 'translateX(-600px)'}
  ],  {
    duration: 1000,
  })

  star.animate([
    {transform: 'translateX(0px)'},
    {transform: 'translateX(-600px)'}
 ],  {
   duration: 1000,
 })

  comment.animate([
    {transform: 'translateX(0px)'},
    {transform: 'translateX(-600px)'}
 ],  {
   duration: 1000,
 })
}

function moveToRight(){
  img.animate([
     {transform: 'translateX(0px)'},
     {transform: 'translateX(600px)'}
  ],  {
    duration: 1000,
  })

  star.animate([
    {transform: 'translateX(0px)'},
    {transform: 'translateX(600px)'}
 ],  {
   duration: 1000,
 })

  comment.animate([
    {transform: 'translateX(0px)'},
    {transform: 'translateX(600px)'}
 ],  {
   duration: 1000,
 })
}
