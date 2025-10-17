//overall
function show_section(section_number) {
        document.getElementsByTagName('section')[section_number].style.display = 'flex';
    }
    function hide_section(section_number) {
        document.getElementsByTagName('section')[section_number].style.display = 'none';
    }
function play_music(music_id) {
        document.getElementById(music_id).play();
    }
function pause_music(music_id) {
        document.getElementById(music_id).pause();
    }    
function play_video(video_id) {
        document.getElementById(video_id).play();
    }
function pause_video(video_id) {
        document.getElementById(video_id).pause();
    }
function hide_div(div_called) {
        document.getElementById(div_called).style.display = 'none';
    }
function show_next_button () {
  document.getElementById('next').style.display = "inline-block";
  document.getElementById('next_button_padding').style.display = "inline-block";

}

//side menu controller
function control_side_menu() {
  if (document.getElementById('hidden-menu').style.display === 'flex')
        {
            document.getElementById('menu-controller').style.backgroundColor = 'transparent';
            document.getElementById('menu_button').style.rotate = '180deg';
            document.getElementById('hidden-menu').style.display = 'none';

        }
            else
        {
            document.getElementById('menu-controller').style.backgroundColor = 'white';
            document.getElementById('menu_button').style.rotate = '90deg';
            document.getElementById('hidden-menu').style.display = 'flex';
        }
}

//Prologue
function play_theme() {
  document.getElementById('theme').play();
}
//Part 1
function play_theme01() {
  document.getElementById('theme_01').play();
}
function pause_theme01() {
  document.getElementById('theme_01').pause();
}
function play_video_nicole() {
  document.getElementById('nicole_message').play();
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
function play_normal_heart_rate () {
  document.getElementById('heartbeat').play();
}
function pause_normal_heart_rate () {
  document.getElementById('heartbeat').pause();
}
function open_quarantine () {
  document.getElementById("console").style.display = "none";
  document.getElementById("quarantine").style.display = "flex";
}
function objective_complete() {
  document.getElementById('objective_complete').play();
}
function play_quarantine_activated() {
  document.getElementById('quarantine_activated').play();
}
function play_quarantine_loop () {
    document.getElementById('quarantine_normal').play();
}
function pause_quarantine_loop () {
    document.getElementById('quarantine_normal').pause();
}
function play_quarantine_necro () {
    document.getElementById('quarantine_necro').play();
}
function pause_quarantine_necro () {
    document.getElementById('quarantine_necro').pause()
}
function play_crash () {
  document.getElementById('quarantine_necro_2').play();
}
function play_stab () {
  document.getElementById('stab').play();
}
function play_flop () {
  document.getElementById('quarantine_necro_arrives').play();
}
function play_flatline () {
  document.getElementById('flatline_start').play(); 
  document.getElementById('flatline_loop').play(); 
}
function play_slasher_male_loop () {
  document.getElementById('slasher_1').play();
}
function pause_slasher_male_loop () {
  document.getElementById('slasher_1').pause();
}
function play_slasher_female_loop() {
  document.getElementById('slasher_2').play();
}
function pause_flatline_loop () {
  document.getElementById('flatline_loop').pause(); 
}
function play_gun_hammond() {
  document.getElementById('gun_1').play();
}
function pause_gun_hammond() {
  document.getElementById('gun_1').pause();
}
function play_gun_chen() {
  document.getElementById('gun_2').play();
}
function pause_gun_chen() {
  document.getElementById('gun_2').pause();
}
function play_necromorph_chase () {
  document.getElementById('chase').play();
}
function pause_necromorph_chase () {
  document.getElementById('chase').pause();
}
function pause_all_loops() {
  document.getElementById('flatline_loop').pause();
  document.getElementById('gun_1').pause();
  document.getElementById('gun_2').pause();
  document.getElementById('heartbeat').pause();
  document.getElementById('slasher_1').pause();
  document.getElementById('slasher_2').pause();    
  document.getElementById('quarantine_normal').pause();
  document.getElementById('quarantine_necro').pause();
  document.getElementById('necro').pause();
}
function attach_top(the_video) {
   document.getElementById(the_video).style.position = 'fixed';
   document.getElementById(the_video).style.top = '0px';
}
function play_elevator () {
  document.getElementById('elev_op').play();
}
function play_fluorescent() {
  
}