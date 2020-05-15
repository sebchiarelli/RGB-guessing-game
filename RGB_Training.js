var divs = document.querySelectorAll("div.cubeCouleur");
var solution = getRandomColor(6);
var inputs = document.querySelectorAll("input");

//initialiser le setup
window.addEventListener("load", aléatoire);

//click pour randomiser
document.querySelector("button").addEventListener("click", aléatoire);
document.querySelector("label").addEventListener("click", aléatoire);

//event pour la réussite/échec du clique sur boite
for (let i = 0; i < divs.length; i++) {
    divs[i].addEventListener("click", activation);
}

//fonction de l'event onclick
function activation() {
    
    if(this.classList.contains("gameOver")){
        
    }
    else if (this.classList.contains("TheGoodOne")) {
        for (let i = 0; i < divs.length; i++) {
            divs[i].classList.add("vanish");
        }

        document.querySelector("label").classList.remove("noDisplay");
        //rajouter la couleur du bg des h2 et du h1 qui soit similaire
        document.querySelector("h1").style.backgroundColor = this.style.backgroundColor;
        document.querySelector("h2").style.backgroundColor = this.style.backgroundColor;
        document.querySelector("h1 + h2").style.backgroundColor = this.style.backgroundColor;
        if(document.querySelector("h1").classList.contains("easy")){
            for (let i = 0; i < 3; i++) {
                //couleur de toute les boites = à celle désigner gagnante
                divs[i].style.backgroundColor = this.style.backgroundColor;
                //réapparition de toute les boites 
                divs[i].classList.add("vanish");
                divs[i].classList.add("gameOver");
                fadeTimer();
            }
        }
        else{
            for (let i = 0; i < divs.length; i++) {
                //couleur de toute les boites = à celle désigner gagnante
                divs[i].style.backgroundColor = this.style.backgroundColor;
                //réapparition de toute les boites 
                divs[i].classList.add("vanish");
                divs[i].classList.add("gameOver");
                fadeTimer();
            }
        }
        document.querySelector("button").innerHTML = "Try again?"
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

    else{solution = getRandomColor(6);
    document.querySelector("h1").innerHTML = divs[solution].style.backgroundColor;
    divs[solution].classList.add("TheGoodOne");
    }
}


//mode hard
for (let i = 0; i < divs.length; i++) {
    inputs[1].addEventListener("click", hard)
}
function hard(){
    if(document.querySelector("h1").classList.contains("easy")){
    document.querySelector("h1").classList.remove("easy");
    aléatoire()
    }
}


//mode easy
for (let i = 0; i < divs.length; i++) {
    inputs[0].addEventListener("click", easy)
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
    document.querySelector("label").classList.add("noDisplay");
    document.querySelector("h1").style.backgroundColor = "084B8A";
    document.querySelector("h2").style.backgroundColor = "084B8A";
    document.querySelector("h1 + h2").style.backgroundColor = "084B8A";
    document.querySelector("button").innerHTML = "NEW COLORS"
}

function fadeIn(){ 
        if(document.querySelector("h1").classList.contains("easy")){
            for (let i = 0; i < 3; i++) {
                //réapparition de toute les boites 
                divs[i].classList.remove("vanish");
            }
        }
        else{
            for (let i = 0; i < divs.length; i++) {
                //réapparition de toute les boites 
                divs[i].classList.remove("vanish");
            }
        }
    }

function fadeTimer (){
    setTimeout(fadeIn, 500);
}