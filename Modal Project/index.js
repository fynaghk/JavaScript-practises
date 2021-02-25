const box = document.querySelectorAll(".box");
const modalImage = document.querySelector(".modalImage");
const rightBtn = document.querySelector(".fa-arrow-circle-right");
const leftBtn = document.querySelector(".fa-arrow-circle-left");
const modalSection = document.querySelector("#modal");
let i = 0;

const imageArray = [
  "url('./images/Sherlock1.png')",
  "url('./images/Sherlock2.png')",
  "url('./images/Sherlock3.png')",
  "url('./images/Sherlock4.png')",
  "url('./images/Sherlock5.png')",
  "url('./images/Sherlock6.png')"
]

modalImage.style.background = imageArray[i];
modalSection.style.display = "none";

rightBtn.addEventListener("click", rightBtnFunction);
leftBtn.addEventListener("click", leftBtnFunction);

box[0].addEventListener("click", selectImage0);
box[1].addEventListener("click", selectImage1);
box[2].addEventListener("click", selectImage2);
box[3].addEventListener("click", selectImage3);
box[4].addEventListener("click", selectImage4);
box[5].addEventListener("click", selectImage5);


// My functions start there

function rightBtnFunction(){
    if(i<imageArray.length-1){
      modalImage.style.background = imageArray[i+1];
      i++;
    }else{
      modalImage.style.background = imageArray[i];
    }
}


function leftBtnFunction(){
  if(i<=imageArray.length && i>0){
    modalImage.style.background = imageArray[i-1];
    i--;
  }else{
    modalImage.style.background = imageArray[i];
  }
}


function selectImage0(){
  showModal();
  i = 0;
  modalImage.style.background = imageArray[i];
}


function selectImage1(){
  showModal();
  i = 1;
  modalImage.style.background = imageArray[i];
}


function selectImage2(){
  showModal();
  i = 2;
  modalImage.style.background = imageArray[i];
}


function selectImage3(){
  showModal();
  i = 3;
  modalImage.style.background = imageArray[i];
}


function selectImage4(){
  showModal();
  i = 4;
  modalImage.style.background = imageArray[i];
}


function selectImage5(){
  showModal();
  i = 5;
  modalImage.style.background = imageArray[i];
}


function showModal(){
  modalSection.style.display = "flex";
}

// For disappearance

window.onclick = function(event) {
  if (event.target == modal) {
    modalSection.style.display = "none";
  }
}