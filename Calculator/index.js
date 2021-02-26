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



// AddEventListeners section ends there

// My Functions start there

function addOne(){
       operationFirst += "1";
       input.innerHTML = operationFirst;
}

function addTwo(){
       operationFirst += "2";
       input.innerHTML = operationFirst;
}

function addThree(){
       operationFirst += "3";
       input.innerHTML = operationFirst;
}

function addFour(){
       operationFirst += "4";
       input.innerHTML = operationFirst;
}

function addFive(){
       operationFirst += "5";
       input.innerHTML = operationFirst;
}

function addSix(){
       operationFirst += "6";
       input.innerHTML = operationFirst;
}

function addSeven(){
       operationFirst += "7";
       input.innerHTML = operationFirst;
}

function addEight(){
       operationFirst += "8";
       input.innerHTML = operationFirst;
}

function addNine(){
       operationFirst += "9";
       input.innerHTML = operationFirst;
}

function addSeven(){
       operationFirst += "7";
       input.innerHTML = operationFirst;
}

function addZero(){
       operationFirst += "0";
       input.innerHTML = operationFirst;
}

function addDoubleZero(){
       operationFirst += "00";
       input.innerHTML = operationFirst;
}

