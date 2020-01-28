var audio = document.getElementById("audio");
var prompt = document.getElementById("prompt");
var bg = document.getElementById("bg");
var form = document.getElementById("form");

bg.style.display = "none";
form.style.display = "none";

function playAudio(){
    if(audio.paused){
        audio.play();
        prompt.style.display="none";
        bg.style.display = "block";
        form.style.display = "block";
    }
}
function muteAudio(){
    if(audio.paused){
        prompt.style.display="none";
        bg.style.display = "block";
        form.style.display = "block";
        audio.paused()
                    
    }
}