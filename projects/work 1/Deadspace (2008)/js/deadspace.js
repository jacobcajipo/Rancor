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
