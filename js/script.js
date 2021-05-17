const sound = new Audio("audio.mp3");
var modal = document.getElementById("popup");
var span = document.getElementsByClassName("close")[0];


 setTimeout(function(){
     sound.load();
     sound.play();
     modal.style.display = "block";

}, 5000);

 // When the user clicks on <span> (x), close the modal
 span.onclick = function() {
    modal.style.display = "none";
    }

// function playAudio(){
//     aud.play("audio.mp3");
// }






