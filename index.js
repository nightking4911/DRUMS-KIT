for(var i=0;i<7;i++){
document.querySelectorAll(".drum")[i].addEventListener("click",fam);
    
}
function fam(){
    var drumnum= this.textContent;
    sounds(drumnum);
    grap(drumnum);
    
}
function sounds(key){
    switch(key){
        case "j" :
            sou= new Audio("sounds/crash.mp3");
            sou.play();
        break;
        case "h" :
            sou= new Audio("sounds/kick-bass.mp3");
            sou.play();
        break;
        case "g" :
            sou= new Audio("sounds/snare.mp3");
            sou.play();       
        break;
        case "a" :
            sou= new Audio("sounds/tom-1.mp3");
            sou.play();       
        break;
        case "s" :
            sou= new Audio("sounds/tom-2.mp3");
            sou.play();       
        break;
        case "d":
            var aud= new Audio("sounds/tom-3.mp3");
            aud.play();
        break;
        case "f":
            var gh=new Audio("sounds/tom-4.mp3");
            gh.play();            
    }
  
}

document.addEventListener("keydown",function(event){
    var bb=event.key;
    sounds(bb);
    grap(bb);
}           

);

function grap(letter){
    var let=document.querySelector("."+letter);
    let.classList.add("pressed");
    setTimeout(function(){
        let.classList.remove("pressed");

    },100);
    
}
 

