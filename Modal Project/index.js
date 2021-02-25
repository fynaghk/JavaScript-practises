const box = document.querySelector(".box");
const modalImage = document.querySelector(".modalImage");
const rightBtn = document.querySelector(".fa-arrow-circle-right");
const leftBtn = document.querySelector(".fa-arrow-circle-left");
let i = 1;
let j;

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
    if(i<imageArray.length){
      modalImage.style.background = imageArray[i];
      console.log(i);
      i++;
    }else{
      modalImage.style.background = imageArray[i];
    }
    j = i - 1;
}

function leftBtnFunction(){
  if(j<=imageArray.length && j>=0){
    modalImage.style.background = imageArray[j-1];
    console.log(j);
    j--;
  }else{
    modalImage.style.background = imageArray[j];
  }
  i = j + 1;
}
