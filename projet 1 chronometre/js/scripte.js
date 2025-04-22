// les variables dont on a besoin :
var start_btn , t , mn , ms , s, h;

window.onload = function(){
    start_btn = document.getElementById("start");
    stop_btn = document.getElementById("stop");
    sp = document.getElementsByTagName("span");
    t = null;
    mn = 0;
    ms = 0;
    s = 0;
    h = 0;
}

function update_chrono(){
    ms += 1;
    if (ms == 10) {
       ms = 0;
       s += 1;
    }
    if (s == 60) {
        s = 0;
        mn += 1;
     }
     if (mn == 60) {
        mn = 0;
        h += 1;
     }

     sp[0].innerHTML = h + "h";
     sp[1].innerHTML = mn + "mn";
     sp[2].innerHTML = s + "s";
     sp[3].innerHTML = ms + "ms";

}

//yamel mise a jour kol 100 mms o ki tenzel al start tetbadel true
function start(){
    t = setInterval(update_chrono, 100);
    start_btn.disabled = true ;
}

// hne kotlou saket el function start o fassakh el mise a jour o khali el nwemer ma tmesshomch
function stop(){
    clearInterval(t);
    start_btn.disabled = false ;
}

// hne kotlou fassakh el mis a jours o rajali les var lel 0  
function reset(){
    clearInterval(t);
    start_btn.disabled = false ;
    mn =0 ,ms =0,s=0,h=0;
    sp[0].innerHTML=h + "h";
    sp[1].innerHTML=mn + "mn";
    sp[2].innerHTML=s + "s";
    sp[3].innerHTML=ms + "ms";
}
