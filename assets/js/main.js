/*
     ██  █████  ██    ██  █████  ███████  ██████ ██████  ██ ██████  ████████ ███████ 
     ██ ██   ██ ██    ██ ██   ██ ██      ██      ██   ██ ██ ██   ██    ██    ██      
     ██ ███████ ██    ██ ███████ ███████ ██      ██████  ██ ██████     ██    ███████ 
██   ██ ██   ██  ██  ██  ██   ██      ██ ██      ██   ██ ██ ██         ██         ██ 
 █████  ██   ██   ████   ██   ██ ███████  ██████ ██   ██ ██ ██         ██    ███████
 */
// click function by id 
 function click_me() {
     document.getElementById("demo").innerHTML = "You can place any number of scripts in an HTML document.";
   }

// image change 
function first_img() {
     document.getElementById('img').src='/assets/image/pic_bulbon.gif';
}
function second_img() {
     document.getElementById('img').src='/assets/image/pic_bulboff.gif';
}

// change font size 
function fs_900() {
     document.getElementById('demo').style.fontSize='var(--fs-900)'
     document.getElementById('demo').style.fontWeight = "var(--fw-bold)";
}

function fs_400(){
     document.getElementById('demo').style.fontSize="var(--fs-400)";
}

// hide and show content 

function hide_img(){
     document.getElementById('img').style.display='none';
}
function show_img(){
     document.getElementById('img').style.display='block';
}
