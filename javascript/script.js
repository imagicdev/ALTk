var secrets = true;

const pics = [
      "background/h.jpeg"
    , "background/hh.jpeg"
    , "background/hhh.jpeg"
    , "background/hhhh.jpeg"
    , "background/hhhhh.jpeg"
    , "background/hhhhhh.jpeg"
    , "background/hhhhhhh.jpeg"
    , "background/hhhhhhhh.jpeg"];

function rand(min, max) {
  return Math.random() * (max - min) + min;
}

$.backstretch(pics[rand(0, 9)], {duration: 0, fade: 750})

setInterval(() => {
	$.backstretch(pics[rand(0, 9)], {duration: 0, fade: 750});
}, 30000);

function skipnav() {
    document.getElementById("main").style.visibility = "hidden";
    document.getElementById("main-text").innerHTML = "PRESS ALT K !!"
    secrets = false;
}

function secretChecked(){
    if(document.getElementById('secret').checked && secrets){
        console.log("checked");
        alert("YoU haVe fOUnD A scErEt");
        window.open("https://youtu.be/dPmZqsQNzGA");
    }
}

function secretText() {
    if(secrets){
        if (document.getElementById("secretText").value == "text") {
            window.open("https://www.youtube.com/watch?v=sZg71o9NtRU");
        }
        if (document.getElementById("secretText").value == "abcdefghijklmnopqrstuvwxyz") {
            window.open("https://www.youtube.com/watch?v=bij5nqHOzvk");
        }
        if(document.getElementById("secretText").value == "something random"){
            window.open("https://www.youtube.com/watch?v=456oB9Ea32w");
        }
    }
}

document.addEventListener('keydown', function(e){a(e);});

function a(e) {
    if (e.key.toLowerCase() === 'k' && e.altKey) {
        e.preventDefault();

        // please dont 
        alert('Look');
        window.open("https://youtu.be/dPmZqsQNzGA?t=19");

    }
    if (e.ctrlKey && secrets) {
        if (e.key.toLowerCase() === 'a') {
            e.preventDefault();

            // please dont 
            alert('Look at me');
            window.open("https://www.youtube.com/watch?v=GcYF1xnmZTI");
        }
        if (e.key.toLowerCase() === 'b') {
            e.preventDefault();

            // please dont 
            alert('Look at me');
            window.open("https://www.youtube.com/watch?v=lDK9QqIzhwk/");
        }
        if (e.key.toLowerCase() === 'c') {
            e.preventDefault();

            // please dont 
            alert('Look at me');
            window.open("https://www.youtube.com/watch?v=bvWRMAU6V-c/");
        }
        if (e.key.toLowerCase() === 'd') {
            e.preventDefault();
            // please dont 
            alert('Look at me');
            window.open("https://www.youtube.com/watch?v=2UcZWXvgMZE/");
        }
        if (e.key.toLowerCase() === 'e') {
            e.preventDefault();

            // please dont 
            alert('Look at me');
            window.open("https://www.youtube.com/watch?v=E3YmLs7XqIo");
        }
        if (e.key.toLowerCase() === 'f') {
            e.preventDefault();

            // please dont 
            alert('Look at me');
            window.open("https://www.youtube.com/watch?v=hHB1Ikzfpmc");
        }
    }
}
