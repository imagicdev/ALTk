$.backstretch("hhhhh.jpg")

function secretChecked(){
    if(document.getElementById('secret').checked){
        console.log("checked");
        alert("YoU haVe fOUnD A scErEt");
        window.open("https://youtu.be/dPmZqsQNzGA");
    }
}

function secretText() {
    if (document.getElementById("secretText").value == "secretchococookie") {
        window.open("https://www.youtube.com/watch?v=sZg71o9NtRU");
    }
    if (document.getElementById("secretText").value == "waithowaremiismade?") {
        window.open("https://www.youtube.com/watch?v=bij5nqHOzvk");
    }
}

document.addEventListener('keydown', function(e) {
    if (e.key.toLowerCase() === 'k' && e.altKey) {
        e.preventDefault();

         // please dont 
         alert('Look');
         window.open("https://youtu.be/dPmZqsQNzGA?t=19");
        
    }    
    if(e.ctrlKey){
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
});
