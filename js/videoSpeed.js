let currentSpeed = 1;
let player;

function onYouTubeIframeAPIReady() {
    player = new YT.Player('player', {
        events: {
            'onReady': onPlayerReady
        }
    });
}

function onPlayerReady(event) {
    nSpeed.addEventListener("click", function () {
        currentSpeed = 1;
        player.setPlaybackRate(currentSpeed);
    });

    nhSpeed.addEventListener("click", function () {
        currentSpeed = 1.5;
        player.setPlaybackRate(currentSpeed);
    });

    dSpeed.addEventListener("click", function () {
        currentSpeed = 2;
        player.setPlaybackRate(currentSpeed);
    });
}