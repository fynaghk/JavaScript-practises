const input = document.querySelector("input");
const btn = document.querySelector("button");

let deliveredMessage = document.querySelector(".hidden");

deliveredMessage.style.color = "green";

btn.addEventListener("click", myFunction);


function myFunction(){
  if (input.value == ""){
    setTimeout(function(){
      alert("Name must be filled out");
    }, "5000");
  }else{
    setTimeout(function(){
      alert("leleel");
    }, "5000");
    localStorage.setItem(input.value, "added");
  }
}
