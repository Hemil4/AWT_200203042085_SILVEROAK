var list=[];
var l=0;
var c=0;
var q;
var m=1;

function start(){              

    function myLoop() {
    setTimeout(function() {  
        var r=Math.floor(1+Math.random()*4);
        var s=".b"+r;
        list.push(s);
        l++;
        show(s);
        playSound(s);                   
        
    }, 1000)
    }   
    myLoop(); 
}

function startmain(){
    stopKey();
    c=0;
    start();
    $("h1").text("Level "+ m )
    m++;
    // alert("1");
    setTimeout(play,700*m)
    // alert("2");
}

function play(){
    q=null;
    $("button").off("click");
    $("button").click(function () {
        q="."+this.className;
        s(q);
        if(q==list[c]){
            playSound(q);
            c++;
            if(l===c){
                startmain();
            }else{
                play();
            }

        }else{
            addRemoveBg();
            playSound("d")
            $("h1").text("You lose.");
            $("button").off("click");
        }
    });
}

function addRemoveBg(){
    $("body").css("background", "red");
    setTimeout(function(){
        $("body").css("background", "rgb(168, 121, 199)");
    }, 200);
}

function s(k) {
    $(k).addClass("shade1");
    setTimeout(function(){
        $(k).removeClass("shade1");
    }, 200);
}

function show(s){
    $(s).addClass("shade");
    setTimeout(function(){
        $(s).removeClass("shade");
    }, 500);
}

function playSound(key){
    switch(key) {
        case ".b1":

            var audio = new Audio('red.mp3');
            audio.play();
        break;
        case ".b2":
            var audio = new Audio('green.mp3');
            audio.play();
        break;
        case ".b3":
            var audio = new Audio('blue.mp3');
            audio.play();
        break;
        case ".b4":
            var audio = new Audio('yellow.mp3');
            audio.play();
        break;
        case "j":
            var audio = new Audio('drum.wav');
            audio.play();
        break;
        default:
            var audio = new Audio('wrong.mp3');
            audio.play();
    }
}

function stopKey(){
    $(document).off("keypress");
}

$(document).keypress(startmain);