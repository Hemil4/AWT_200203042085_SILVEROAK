var p1= Math.floor(1+Math.random()*6);
var p2=Math.floor(1+Math.random()*6);


if (p1===p2){
    document.querySelector("h1").innerHTML="No one is winner.";
}
else if (p1>p2){
    document.querySelector("h1").innerHTML="Player 1 is winner!!";
}
else{
    document.querySelector("h1").innerHTML="Player 2 is winner!!";
}


if (p1===1){
    document.querySelector(".c1").innerHTML="<div id='dice1'><div id='d11'></div></div>";
}
else if (p1===2){
    document.querySelector(".c1").innerHTML="<div id='dice2'><div id='d21'></div><div id='d22'></div></div>";
}
else if (p1===3){
    document.querySelector(".c1").innerHTML="<div id='dice3'><div id='d31'></div><div id='d32'></div><div id='d33'></div></div>";
}
else if (p1===4){
    document.querySelector(".c1").innerHTML="<div id='dice4'><div id='d41'></div><div id='d42'></div><div id='d43'></div><div id='d44'></div></div>";
}
else if (p1===5){
    document.querySelector(".c1").innerHTML="<div id='dice5'><div id='d51'></div><div id='d52'></div><div id='d53'></div><div id='d54'></div><div id='d55'></div></div>";
}
else if (p1===6){
    document.querySelector(".c1").innerHTML="<div id='dice6'><div id='d61'></div><div id='d62'></div><div id='d63'></div><div id='d64'></div><div id='d65'></div><div id='d66'></div></div>";
}


if (p2===1){
    document.querySelector(".c2").innerHTML="<div id='dice1'><div id='d11'></div></div>";
}
else if (p2===2){
    document.querySelector(".c2").innerHTML="<div id='dice2'><div id='d21'></div><div id='d22'></div></div>";
}
else if (p2===3){
    document.querySelector(".c2").innerHTML="<div id='dice3'><div id='d31'></div><div id='d32'></div><div id='d33'></div></div>";
}
else if (p2===4){
    document.querySelector(".c2").innerHTML="<div id='dice4'><div id='d41'></div><div id='d42'></div><div id='d43'></div><div id='d44'></div></div>";
}
else if (p2===5){
    document.querySelector(".c2").innerHTML="<div id='dice5'><div id='d51'></div><div id='d52'></div><div id='d53'></div><div id='d54'></div><div id='d55'></div></div>";
}
else if (p2===6){
    document.querySelector(".c2").innerHTML="<div id='dice6'><div id='d61'></div><div id='d62'></div><div id='d63'></div><div id='d64'></div><div id='d65'></div><div id='d66'></div></div>";
}