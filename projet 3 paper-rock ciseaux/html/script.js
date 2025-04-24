const contenu_choix_utilisateur = document.getElementById("choix-utilisateur");
const contenu_choix_Ordinateur = document.getElementById("choix-ordinateur");
const contenu_resulat = document.getElementById("result");
const  boutons_jouer = document.querySelectorAll("button");
const score = document.getElementById("score");

let choix_Utilisateur ;
let choix_Ordinateur ;
let resultat;
let score_gagne = 0 ;
let score_perdu = 0;

boutons_jouer.forEach(bouton =>bouton.addEventListener('click',(e) =>{
  choix_Utilisateur = e.target.id ; 
    contenu_choix_utilisateur.innerHTML = `<img src="${choix_Utilisateur}.png">`;
    ordinateur();
    verification(); 
   
}));

function ordinateur(){
    random = Math.floor(Math.random()*3)+1;
    if (random==1) {
        choix_Ordinateur = "paper";
    }
    if (random==2) {
        choix_Ordinateur = "Pierre";
    }
    if (random==3) {
        choix_Ordinateur = "Ciseaux";
    }

     contenu_choix_Ordinateur.innerHTML = `<img src="${choix_Ordinateur}.png">`
}

function  verification(){

    // egalite
    if (choix_Ordinateur==choix_Utilisateur){
        resultat= "egalite !!"
    }
     // perdu
     if (choix_Ordinateur == "paper"&&
        choix_Utilisateur=="Pierre"){
        resultat= "perdu !!"
        score_perdu++;
    }
  
     if (choix_Ordinateur == "Pierre"&&
     choix_Utilisateur=="Ciseaux"){
        resultat= "perdu !!"
        score_perdu++;
    }
     if (choix_Ordinateur == "Ciseaux"&&
     choix_Utilisateur=="paper"){
        resultat= "perdu !!"
        score_perdu++;
    }
    

       // gagne
       if (choix_Ordinateur == "paper"&&
       choix_Utilisateur=="Ciseaux"){
       resultat= "gagne !!"
       score_gagne++;
   }
 
    if (choix_Ordinateur == "Pierre"&&
    choix_Utilisateur=="paper"){
       resultat= "gagne !!"
       score_gagne++;
   }
    if (choix_Ordinateur == "Ciseaux"&&
    choix_Utilisateur=="Pierre"){
       resultat= "gagne !!"
       score_gagne++;
   }


   contenu_resulat.innerHTML = resultat;
   score.innerHTML = `Votre Score est : ${score_gagne} <br> SCORE DE ORDINATEUR : ${score_perdu}`;

}



