//THEMES
function show_menu() {
document.getElementById("menu").style.display = ("block");
  }
  function close_menu() {
document.getElementById("menu").style.display = ("none");
  }
  function dark_mode() {
document.getElementById("default_theme").style.backgroundColor = ("black");
document.getElementById("default_theme").style.color = ("white");
document.getElementById("menu").style.display = ("none");
}
function light_mode() {
document.getElementById("default_theme").style.backgroundColor = ("white");
document.getElementById("default_theme").style.color = ("black");
document.getElementById("menu").style.display = ("none");
}
function red_mode() {
document.getElementById("default_theme").style.backgroundColor = ("darkred");
document.getElementById("default_theme").style.color = ("white");
document.getElementById("menu").style.display = ("none");
}

//HIRE ME
function hire_me() {
document.getElementById("about").style.display = ("flex");
}
function close_hire() {
document.getElementById("about").style.display = ("none");
}