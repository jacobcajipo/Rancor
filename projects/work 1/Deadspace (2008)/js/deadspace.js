document.getElementById("ambient_button").innerHTML = "PAUSE";

function ambient_music(){
let ambient_state = document.getElementById("ambient_button").innerHTML;
let lounge_is_open = document.getElementById("lounge").style.display == "flex";
   
  if (ambient_state == "PLAY"){
    document.getElementById("ambient").play();
    document.getElementById("ambient_button").innerHTML = "PAUSE";
    if (lounge_is_open) {
      document.getElementById("ambient_2").play();
      document.getElementById("ambient_button").innerHTML = "PAUSE";
    }
  }
  else {
    document.getElementById("ambient").pause();
    document.getElementById("ambient_2").pause();
    document.getElementById("ambient_button").innerHTML = "PLAY";
  }
}
function open_lounge() {
  document.getElementById("door_pad_lounge").style.display = "none";
  document.getElementById("lounge").style.display = "flex";
  document.getElementById("ambient_2").play();
}

function open_security() {
  document.getElementById("door_pad_security").style.display = "none";
  document.getElementById("security").style.display = "flex";

    document.getElementById("ambient").pause();
    document.getElementById("ambient_2").pause();
    document.getElementById("heartbeat").play();
}
function open_quarantine() {
  document.getElementById("console").style.display = "none";
  document.getElementById("quarantine").style.display = "flex";
  document.getElementById("next").style.display = "inline-block"; // Show the next button
}
function open_doorpads() {
  document
}