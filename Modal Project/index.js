const box = document.querySelector(".box");
const modalImage = document.querySelector(".modalImage");
const rightBtn = document.querySelector(".fa-arrow-circle-right");
const leftBtn = document.querySelector(".fa-arrow-circle-left");
let i = 1;


const imageArray = [
  "url('./images/Sherlock1.png')",
  "url('./images/Sherlock2.png')",
  "url('./images/Sherlock3.png')",
  "url('./images/Sherlock4.png')",
  "url('./images/Sherlock5.png')",
  "url('./images/Sherlock6.png')"
]

let j = imageArray.length-1;

modalImage.style.background = imageArray[0];

rightBtn.addEventListener("click", rightBtnFunction);
leftBtn.addEventListener("click", leftBtnFunction);

function rightBtnFunction(){
    if(i<imageArray.length){
      modalImage.style.background = imageArray[i];
      console.log("saam xaam");
      i++;
    }
    else{
      i = 1;
      modalImage.style.background = imageArray[i];
    }
}

function leftBtnFunction(){
  if(j<=imageArray.length){
    modalImage.style.background = imageArray[j];
    console.log("saam xaam");
    j--;
  }else{
     i = imageArray.length-1;
     modalImage.style.background = imageArray[j];
  }
}
