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
