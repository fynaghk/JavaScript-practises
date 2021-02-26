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
let operation = "";

// AddEventListeners section starts there

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

// My Functions start there

function addOne(){
       operation += "1";
       input.innerHTML = operation;
}

function addTwo(){
       operation += "2";
       input.innerHTML = operation;
}

function addThree(){
       operation += "3";
       input.innerHTML = operation;
}

function addFour(){
       operation += "4";
       input.innerHTML = operation;
}

function addFive(){
       operation += "5";
       input.innerHTML = operation;
}

function addSix(){
       operation += "6";
       input.innerHTML = operation;
}

function addSeven(){
       operation += "7";
       input.innerHTML = operation;
}

function addEight(){
       operation += "8";
       input.innerHTML = operation;
}

function addNine(){
       operation += "9";
       input.innerHTML = operation;
}

function addSeven(){
       operation += "7";
       input.innerHTML = operation;
}

function addZero(){
       operation += "0";
       input.innerHTML = operation;
}

function addDoubleZero(){
       operation += "00";
       input.innerHTML = operation;
}

