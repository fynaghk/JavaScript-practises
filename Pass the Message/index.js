const input = document.querySelector("input");
const btn = document.querySelector("button");

let deliveredMessage = document.querySelector(".hidden");

deliveredMessage.style.display = "none";

btn.addEventListener("onclick", show());

btn.addEventListener("click", myFunction);


function myFunction(){
  if (input.value == ""){
      alert("Name must be filled out");
    }else{
        localStorage.setItem(input.value, "added");
  }
}

function show(){
  setInterval(function(){
  deliveredMessage.style.display = "block";
  }, 5000);
}

