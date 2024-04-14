var noButtons  = document.querySelectorAll(".drum").length

for (var i = 0; i < noButtons; i++) {
    document.querySelectorAll(".drum")[i].addEventListener("click", handleClick);
}

function handleClick() {

    var buttonPress = this.innerHTML;

    makeSound(buttonPress);

}

// Detecting keyboard press

document.addEventListener("keydown", function(event) {

    makeSound(event.key);

});

function makeSound(key) {
    switch (key) {
        case "w":
            var getAudio = "sounds/crash.mp3";
            var playAudio = new Audio(getAudio);
            playAudio.play();
            break;

        case "a":
            var getAudio = "sounds/kick-bass.mp3";
            var playAudio = new Audio(getAudio);
            playAudio.play();
            break;


        case "s":
            var getAudio = "sounds/snare.mp3";
            var playAudio = new Audio(getAudio);
            playAudio.play();
            break;


        case "d":
            var getAudio = "sounds/tom-1.mp3";
            var playAudio = new Audio(getAudio);
            playAudio.play();
            break;


        case "j":
            var getAudio = "sounds/tom-2.mp3";
            var playAudio = new Audio(getAudio);
            playAudio.play();
            break;


        case "k":
            var getAudio = "sounds/tom-3.mp3";
            var playAudio = new Audio(getAudio);
            playAudio.play();
            break;


        case "l":
            var getAudio = "sounds/tom-4.mp3";
            var playAudio = new Audio(getAudio);
            playAudio.play();
            break;

        default:
            console.log("Huh?") 
        }
}