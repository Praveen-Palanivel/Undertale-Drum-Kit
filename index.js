var noofbuttons = document.querySelectorAll(".UnderTale").length;
var currentAudio = null;

for(var i=0;i<noofbuttons;i++) {
    document.querySelectorAll(".UnderTale")[i].addEventListener("click",function() {
        var button = this.getAttribute("data-key");
        Sound(button);
        buttonAnimation(button);
    });
}

document.querySelector(".image").addEventListener("click",function() {
    var button = this.getAttribute("data-key");
    Sound(button);
})

document.querySelector(".foot").addEventListener("click",function() {
    var button = this.getAttribute("data-key");
    Sound(button);
})

document.addEventListener("keydown",function(event) {
    Sound(event.key);
    buttonAnimation(event.key);
});

function Sound(key) {
    if (currentAudio) {
        currentAudio.pause();
        currentAudio.currentTime = 0;
    }

    switch(key) {
        case "m":
            currentAudio = new Audio("sounds/Spider_Dance_music.ogg");
            break;
        case "u":
            currentAudio = new Audio("sounds/Spear_of_Justice_music.ogg");
            break;
        case "s":
            currentAudio = new Audio("sounds/MEGALOVANIA_music.ogg");
            break;
        case "p":
            currentAudio = new Audio("sounds/Nyeh_Heh_Heh!_music.ogg");
            break;
        case "t":
            currentAudio = new Audio("sounds/Death_by_Glamour_music.ogg");
            break;
        case "g":
            currentAudio = new Audio("sounds/Ghost_Fight_music.ogg");
            break;
        case "f":
            currentAudio = new Audio("sounds/Your_Best_Friend_music.ogg");
            break;
        case "special":
            currentAudio = new Audio("sounds/Fallen_Down_music.ogg");
            break;
        case "determined":
            currentAudio = new Audio("sounds/Determination_(Soundtrack)_music.ogg")
        default:
            console.log(key);
            break;
    }
    currentAudio.play();
}

function buttonAnimation(currentKey) {
    var actButton = document.querySelector("." + currentKey);
    actButton.classList.add("pressed");

    setTimeout(function() {
        actButton.classList.remove("pressed");
    },100);
}

document.querySelector(".stop").addEventListener("click",function() {
    if(currentAudio){
        currentAudio.pause();
        currentAudio.currentTime = 0;
    }
});
