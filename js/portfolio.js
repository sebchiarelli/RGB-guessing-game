var button = document.querySelectorAll("button");
var container = document.querySelectorAll(".container");
var h1 = document.querySelector("h1");

button[0].addEventListener("click", parcours);
button[1].addEventListener("click", projets);
button[2].addEventListener("click", vanishing3);



function parcours(){
    container[0].classList.add("vanish");
    container[1].classList.remove("vanish");
    container[2].classList.add("vanish");
    this.classList.add("active");
    button[1].classList.remove("active");
    button[2].classList.remove("active");
}
function projets(){
    container[0].classList.remove("vanish");
    container[1].classList.add("vanish");
    container[2].classList.add("vanish");
    this.classList.add("active");
    button[0].classList.remove("active");
    button[2].classList.remove("active");
}
function vanishing3(){
    container[0].classList.add("vanish");
    container[1].classList.add("vanish");
    container[2].classList.remove("vanish");
    this.classList.add("active");
    button[0].classList.remove("active");
    button[1].classList.remove("active");
}
