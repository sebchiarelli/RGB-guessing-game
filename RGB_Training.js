var divs = document.querySelectorAll("div.col-sm");
var solution = getRandomColor(5);
var a = document.querySelectorAll("a");

//initialiser le setup
window.addEventListener("load", aléatoire);

//click pour randomiser
document.querySelector("a").addEventListener("click", aléatoire);

//event pour la réussite/échec du clique sur boite
for (let i = 0; i < divs.length; i++) {
    divs[i].addEventListener("click", activation);
}

//fonction de l'event onclick
function activation() {
    if (this.classList.contains("TheGoodOne")) {
        //rajouter la couleur du bg des h2 et du h1 qui soit similaire
        document.querySelector("h1").style.backgroundColor = this.style.backgroundColor;
        document.querySelector("h2").style.backgroundColor = this.style.backgroundColor;
        document.querySelector("h1 + h2").style.backgroundColor = this.style.backgroundColor;
        if(document.querySelector("h1").classList.contains("easy")){
            for (let i = 0; i < 3; i++) {
                //couleur de toute les boites = à celle désigner gagnante
                divs[i].style.backgroundColor = this.style.backgroundColor;
                //réapparition de toute les boites 
                divs[i].classList.remove("vanish");
                divs[i].classList.add("gameOver");
            }
        }
        else{
            for (let i = 0; i < divs.length; i++) {
                //couleur de toute les boites = à celle désigner gagnante
                divs[i].style.backgroundColor = this.style.backgroundColor;
                //réapparition de toute les boites 
                divs[i].classList.remove("vanish");
                divs[i].classList.add("gameOver");
            }
        }
        document.querySelector("a").innerHTML = "Try again?"
    }
    else if(this.classList.contains("gameOver")){
        
    }

    else {
        this.classList.add("vanish");
    }
}

//fonction de randomisation
function getRandomColor(max) {
    return Math.floor(Math.random() * Math.floor(max));
}

//fonction pour randomiser les choix
function aléatoire() {
    styleBack();
    for (let i = 0; i < divs.length; i++) {
        divs[i].style.backgroundColor = "rgb(" + getRandomColor(255) + "," + getRandomColor(255) + "," + getRandomColor(255) + ")";
        divs[i].classList.remove("vanish");
        divs[i].classList.remove("TheGoodOne");
        divs[i].classList.remove("gameOver");
    if(document.querySelector("h1").classList.contains("easy")){
        divs[3].classList.add("vanish");
        divs[4].classList.add("vanish");
        divs[5].classList.add("vanish");
    }
    }
    mustBeLink(solution);
}

//fonction pour désigner aléatoirement le choix gagnant 
function mustBeLink(solution) {
    if(document.querySelector("h1").classList.contains("easy")){
        var solution = getRandomColor(3);
        document.querySelector("h1").innerHTML = divs[solution].style.backgroundColor;
        divs[solution].classList.add("TheGoodOne");
    }

    else{solution = getRandomColor(5);
    document.querySelector("h1").innerHTML = divs[solution].style.backgroundColor;
    divs[solution].classList.add("TheGoodOne");
    }
}


//mode hard
for (let i = 0; i < divs.length; i++) {
    a[2].addEventListener("click", hard)
}
function hard(){
    if(document.querySelector("h1").classList.contains("easy")){
    document.querySelector("h1").classList.remove("easy");
    aléatoire()
    }
}


//mode easy
for (let i = 0; i < divs.length; i++) {
    a[1].addEventListener("click", easy)
}


function easy() {
    if(document.querySelector("h1").classList.contains("easy")){

    }
    else{
    document.querySelector("h1").classList.add("easy");
    aléatoire();
    }
}


//remettre le style d'origine sur le titre et le bouton
function styleBack() {
    document.querySelector("h1").style.backgroundColor = "084B8A";
    document.querySelector("h2").style.backgroundColor = "084B8A";
    document.querySelector("h1 + h2").style.backgroundColor = "084B8A";
    document.querySelector("a").innerHTML = "NEW COLORS"
}

