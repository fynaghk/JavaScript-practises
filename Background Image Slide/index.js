const leftBtn = document.querySelector(".fa-arrow-circle-left");
const rightBtn = document.querySelector(".fa-arrow-circle-right");
const image = document.querySelector("figure");
const buttons = document.querySelectorAll("button");
let counter = 0;

const array = [
'URL("./images/image1.png")',
'URL("./images/image2.png")',
'URL("./images/image3.png")',
'URL("./images/image4.png")'
]

rightBtn.addEventListener("click", right);

leftBtn.addEventListener("click", left);

buttons[0].addEventListener("click", ()=>{
  image.style.backgroundImage = array[0];
  counter = 0;
  brownCircle()
})

buttons[1].addEventListener("click", ()=>{
  image.style.backgroundImage = array[1];
  counter = 1;
  brownCircle()
})

buttons[2].addEventListener("click", ()=>{
  image.style.backgroundImage = array[2];
  counter = 2;
  brownCircle()
})

buttons[3].addEventListener("click", ()=>{
  image.style.backgroundImage = array[3];
  counter = 3;
  brownCircle()
})

function right(){
  if(counter<3 && counter>=0){
    counter+=1;
    brownCircle();
  image.style.backgroundImage = array[counter];

}else{
  counter = 0;
  brownCircle();
  image.style.backgroundImage = array[counter];
}
}

function left(){
  if(counter<4 && counter>0){
    counter-=1;
    brownCircle();
    image.style.backgroundImage = array[counter];
  }else{
    counter = 3;
    brownCircle();
    image.style.backgroundImage = array[counter];
  }
}

function brownCircle(){
  buttons[0].style.backgroundColor = "wheat";
  buttons[1].style.backgroundColor = "wheat";
  buttons[2].style.backgroundColor = "wheat";
  buttons[3].style.backgroundColor = "wheat";
  buttons[counter].style.backgroundColor = "brown"
}