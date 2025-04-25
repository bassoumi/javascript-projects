var person = document.querySelector(".person");
var obstacle = document.querySelector(".obstacle");
var verififcation;


function sauter(){
    if(person.classList != "animation"){
        person.classList.add('animation');
    }
       
   setTimeout(function(){
    person.classList.remove("animation");
   }, 500);
}



    verififcation = setInterval(function () {
    var personTop =parseInt(window.getComputedStyle(person).getPropertyValue('top'));
    var obstacleLeft = parseInt(window.getComputedStyle(obstacle).getPropertyValue('left'));

    if (obstacleLeft< 20 && obstacleLeft>0 && personTop>=130){
        obstacle.style.animation="none";
        alert("try again");
    }
}, 1)