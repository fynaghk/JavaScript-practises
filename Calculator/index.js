const input = document.querySelector("#screen"),
       plusMinusBtn = document.querySelector("#plusMinus"),
       sevenBtn = document.querySelector("#seven"),
       eightBtn = document.querySelector("#eight"),
       nineBtn = document.querySelector("#nine"),
       fourBtn = document.querySelector("#four"),
       fiveBtn = document.querySelector("#five"),
       sixBtn = document.querySelector("#six"),
       oneBtn = document.querySelector("#one"),
       twoBtn = document.querySelector("#two"),
       threeBtn = document.querySelector("#three"),
       zeroBtn = document.querySelector("#zero"),
       divisionBtn = document.querySelector("#division"),
       modulBtn = document.querySelector("#modul"),
       rightBtn = document.querySelector("#right"),
       timesBtn = document.querySelector("#times"),
       minusBtn = document.querySelector("#minus"),
       acBtn = document.querySelector("#ac"),
       plusBtn = document.querySelector("#plus"),
       equalBtn = document.querySelector("#equal"),
       deleteBtn = document.querySelector("#c"),
       doubleZeroBtn = document.querySelector("#doubleZero"),
       dotBtn = document.querySelector("#dot");

const keys = document.querySelectorAll("button");
let operationFirst = "";

let operationSecond = "";

let firstElement = true;

// AddEventListeners section starts there


// ---Digit Buttons

oneBtn.addEventListener("click", addOne);
twoBtn.addEventListener("click", addTwo);
threeBtn.addEventListener("click", addThree);
fourBtn.addEventListener("click", addFour);
fiveBtn.addEventListener("click", addFive);
sixBtn.addEventListener("click", addSix);
sevenBtn.addEventListener("click", addSeven);
eightBtn.addEventListener("click", addEight);
nineBtn.addEventListener("click", addNine);
zeroBtn.addEventListener("click", addZero);
doubleZeroBtn.addEventListener("click", addDoubleZero);

//  ---Operation Buttons

plusMinusBtn.addEventListener("click", addPlusMinus)

// AddEventListeners section ends there

// My Functions start there

function addOne(){
       if(firstElement === true){
              operationFirst += "1";
              input.innerHTML = operationFirst;
       }
}

function addTwo(){
       if(firstElement === true){
              operationFirst += "2";
              input.innerHTML = operationFirst;
       }
}

function addThree(){
       if(firstElement === true){
              operationFirst += "3";
              input.innerHTML = operationFirst;
       }
}

function addFour(){
       if(firstElement === true){
              operationFirst += "4";
              input.innerHTML = operationFirst;
       }
}

function addFive(){
       if(firstElement === true){
              operationFirst += "5";
              input.innerHTML = operationFirst;
       }
}

function addSix(){
       if(firstElement === true){
              operationFirst += "6";
              input.innerHTML = operationFirst;
       }
}

function addSeven(){
       if(firstElement === true){
              operationFirst += "7";
              input.innerHTML = operationFirst;
       }
}

function addEight(){
       if(firstElement === true){
              operationFirst += "8";
              input.innerHTML = operationFirst;
       }
}

function addNine(){
       if(firstElement === true){
              operationFirst += "9";
              input.innerHTML = operationFirst;
       }
}

function addZero(){
       if(firstElement === true){
              operationFirst += "0";
              input.innerHTML = operationFirst;
       }
}

function addDoubleZero(){
       if(firstElement === true){
              operationFirst += "00";
              input.innerHTML = operationFirst;
       }
}


function addPlusMinus(){
       if(firstElement === true){
              operationFirst = 0 - operationFirst;
              input.innerHTML = (operationFirst);

              plusMinusBtn.addEventListener("click", ()=>{
                     if(operationFirst<0){
                            input.innerHTML = (operationFirst);
                     }
              })
       }else{
              operationSecond = 0 - operationSecond
              input.innerHTML = (operationSecond);

              plusMinusBtn.addEventListener("click", ()=>{
                     if(operationSecond<0){
                            input.innerHTML = (operationSecond);
                     }
              })
       }
}

