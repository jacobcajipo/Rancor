document.getElementById("ambient_button").innerHTML = "PLAY";

function ambient_music(){
let ambient_state = document.getElementById("ambient_button").innerHTML;
   
  if (ambient_state == "PLAY"){
    document.getElementById("ambient").play();
    //document.getElementById("ambient").playbackRate = 0.9;
    document.getElementById("ambient_button").innerHTML = "PAUSE";
  }
  else {
    document.getElementById("ambient").pause();
    document.getElementById("ambient_button").innerHTML = "PLAY";
  }
}
function open_lounge() {
  document.getElementById("door_pad_lounge").style.display = "none";
  document.getElementById("lounge").style.display = "flex";
}
function open_security() {
  document.getElementById("door_pad_security").style.display = "none";
  document.getElementById("security").style.display = "flex";
}
function open_quarantine() {
  document.getElementById("console").style.display = "none";
  document.getElementById("quarantine").style.display = "flex";
  document.getElementById("next").style.display = "inline-block"; // Show the next button
}
function open_doorpads() {
  document
}