onload = function() { 
  
}
//Part 2
function open_lounge() {
  document.getElementById("door_pad_lounge").style.display = "none";
  document.getElementById("lounge").style.display = "flex";
  document.getElementById("ambient_2").play();
}

function open_security() {
  document.getElementById("door_pad_security").style.display = "none";
  document.getElementById("security").style.display = "flex";
  document.getElementById("next").style.display = "inline-block"; // Show the next button

    document.getElementById("ambient").pause();
    document.getElementById("ambient_2").pause();
    document.getElementById("heartbeat").play();
}
//Part 3
function open_quarantine() {
  document.getElementById("console").style.display = "none";
  document.getElementById("quarantine").style.display = "flex";
}
function pause_all_loops() {
  document.getElementById('flatline_loop').pause();
  document.getElementById('gun_1').pause();
  document.getElementById('gun_2').pause();
  document.getElementById('chase').pause();
  document.getElementById('heartbeat').pause();
  document.getElementById('slasher_1').pause();
  document.getElementById('slasher_2').pause();    
  document.getElementById('quarantine_normal').pause();
  document.getElementById('quarantine_necro').pause();
  document.getElementById('necro').pause();
}
function necro_scare_attach() {
   document.getElementById('necro_elevator').style.position = 'fixed';
   document.getElementById('necro_elevator').style.top = '50px';
}