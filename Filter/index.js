const btn = document.querySelectorAll("button");
const all = document.querySelector(".allBooks");
const book = document.querySelectorAll(".book");


btn[0].addEventListener("click",findAll);

btn[1].addEventListener("click", findClassic);

btn[2].addEventListener("click", findDetective);

btn[3].addEventListener("click", findFantasy);

btn[4].addEventListener("click", findHorror);

btn[5].addEventListener("click", findFiction);

function findAll(){
  for(let i = 0; i<book.length; i++){
    book[i].style.display = "block";
}
}

function findClassic(){
  findAll();
  for(let i = 0; i<book.length; i++){
    if(book[i].id === "alti" || book[i].id === "onIki"){
      book[i].style.visibility = "visible";
    }else{
      book[i].style.display = "none";
    }
  }
}

function findDetective(){
  findAll();
  for(let i = 0; i<book.length; i++){
    if(book[i].id === "bes" || book[i].id === "doqquz"){
      book[i].style.visibility = "visible";
    }else{
      book[i].style.display = "none";
    }
  }
}

function findFantasy(){
  findAll();
  for(let i = 0; i<book.length; i++){
    if(book[i].id === "iki" || book[i].id === "yeddi" || book[i].id === "onBir"){
      book[i].style.visibility = "visible";
    }else{
      book[i].style.display = "none";
    }
  }
}

function findFantasy(){
  findAll();
  for(let i = 0; i<book.length; i++){
    if(book[i].id === "uc" || book[i].id === "sekkiz" || book[i].id === "on"){
      book[i].style.visibility = "visible";
    }else{
      book[i].style.display = "none";
    }
  }
}

function findHorror(){
  findAll();
  for(let i = 0; i<book.length; i++){
    if(book[i].id === "uc" || book[i].id === "sekkiz" || book[i].id === "on"){
      book[i].style.visibility = "visible";
    }else{
      book[i].style.display = "none";
    }
  }
}

function findFiction(){
  findAll();
  for(let i = 0; i<book.length; i++){
    if(book[i].id === "bir" || book[i].id === "dord"){
      book[i].style.visibility = "visible";
    }else{
      book[i].style.display = "none";
    }
  }
}

