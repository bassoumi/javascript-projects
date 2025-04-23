var toDoButton = document.getElementById("addToDo");
var toDoContainer = document.getElementById("toDoContainer");
var inputFeild = document.getElementById("inputFeild");


// inisilaliser la fontion 
toDoButton.onclick = function(){
    // kn fergha ma taddihech kn mabya addyha 
    if(inputFeild!=""){
        //creation mta p ismou paragraph 
       var paragraph = document.createElement("p");
    }
    

// hot fih el valeur lmaaby li tada(ki thb testoki haja fil html hot innerHtml )
paragraph.innerHTML=inputFeild.value;
// hot aka el valeur fi div li essmou todoContainer
toDoContainer.appendChild(paragraph);
// ammalou style khaas byh 
paragraph.classList.add("paragraphe_style");

//baed el clik al paraghraph amel style mta paragraph click 
paragraph.addEventListener("click",function(){
    paragraph.classList.add("paragraph_click");
})
    

//supprimer le paragraphe ib double click 
paragraph.addEventListener("dblclick",function(){
    toDoContainer.removeChild(paragraph);
})

}