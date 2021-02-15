const redBtn = document.querySelector("#red");
const greenBtn = document.querySelector("#green");
const blackBtn = document.querySelector("#black");
const blueBtn = document.querySelector("#blue");
const yellowBtn = document.querySelector("#yellow");

const box = document.querySelector("#box");
const again = false;

redBtn.addEventListener("click", ()=>{
  box.style.background="red";
  redBtn.addEventListener("click", ()=>{
    if(box.style.background=="red"){
      box.style.background="white";
    }else{
      box.style.background="red";
    }
  })
})

greenBtn.addEventListener("click", ()=>{
  box.style.background="green";
  greenBtn.addEventListener("click", ()=>{
    if(box.style.background=="green"){
      box.style.background="white";
    }else{
      box.style.background="green";
    }
  })
})

blackBtn.addEventListener("click",  ()=>{
  box.style.background="black";
  blackBtn.addEventListener("click", ()=>{
    if(box.style.background=="black"){
      box.style.background="white";
    }else{
      box.style.background="black";
    }
  })
})

blueBtn.addEventListener("click",  ()=>{
  box.style.background="blue";
  blueBtn.addEventListener("click", ()=>{
    if(box.style.background=="blue"){
      box.style.background="white";
    }else{
      box.style.background="blue";
    }
  })
})

yellowBtn.addEventListener("click",  ()=>{
  box.style.background="yellow";
  yellowBtn.addEventListener("click", ()=>{
    if(box.style.background=="yellow"){
      box.style.background="white";
    }else{
      box.style.background="yellow";
    }
  })
})
