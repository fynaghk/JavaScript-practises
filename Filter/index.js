const btn = document.querySelectorAll("button");
const all = document.querySelector(".allBooks");
const book = document.querySelectorAll(".book");


btn[0].addEventListener("click", ()=>{
  all.style.visibility = "visible";
})

btn[1].addEventListener("click", findClassic);

function findClassic(){
  for(let i = 0; i<book.length; i++){
    if(book[i].id === "alti" || book[i].id === "onIki"){
      book[i].style.visibility = "visible";
    }else{
      book[i].style.display = "none";
    }
  }
}


