var len=document.querySelectorAll("button").length;

for (var i = 0; i < len; i++) { 
        document.querySelectorAll("button")[i].addEventListener("click",function(){
            var key=this.innerHTML;
            playSound(key);
            keyPress(key);
        });
}

document.addEventListener("keypress",function(event){
    playSound(event.key);
    keyPress(event.key);
});

function playSound(key){
    switch(key) {
        case "w":

            var audio = new Audio('piano.wav');
            audio.play();
        break;
        case "a":
            var audio = new Audio('guitar.wav');
            audio.play();
        break;
        case "s":
            var audio = new Audio('harmonica.mp3');
            audio.play();
        break;
        case "d":
            var audio = new Audio('dish.wav');
            audio.play();
        break;
        case "j":
            var audio = new Audio('drum.wav');
            audio.play();
        break;
        case "k":
            var audio = new Audio('flute.wav');
            audio.play();
        break;
        case "l":
            var audio = new Audio('Hello sound.mp3');
            audio.play();
        break;
        default:
            var audio = new Audio('defaultSound.mp3');
            audio.play();
    }
}

function keyPress(key){
    document.querySelector("."+key).classList.add("press");

    setTimeout(function(){
        document.querySelector("."+key).classList.remove("press");
    }, 100);
}