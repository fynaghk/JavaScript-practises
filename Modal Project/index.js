const box = document.querySelector(".box");
const modalImage = document.querySelector(".modalImage");
const rightBtn = document.querySelector(".fa-arrow-circle-right");
const leftBtn = document.querySelector(".fa-arrow-circle-left");
let i = 0;

const imageArray = [
  "url('./images/Sherlock1.png')",
  "url('./images/Sherlock2.png')",
  "url('./images/Sherlock3.png')",
  "url('./images/Sherlock4.png')",
  "url('./images/Sherlock5.png')",
  "url('./images/Sherlock6.png')"
]

modalImage.style.background = imageArray[0];

rightBtn.addEventListener("click", rightBtnFunction);

leftBtn.addEventListener("click", leftBtnFunction);



function rightBtnFunction(){
    if(i<imageArray.length-1){
      modalImage.style.background = imageArray[i+1];
      console.log(i);
      i++;
    }else{
      console.log(i);
      modalImage.style.background = imageArray[i];
    }
}


function leftBtnFunction(){
  if(i<=imageArray.length && i>0){
    modalImage.style.background = imageArray[i-1];
    console.log(i);
    i--;
  }else{
    console.log(i);
    modalImage.style.background = imageArray[i];
  }
}

function selectImage(){

}
