const playButton = document.getElementById("playButton");
const playAudio = document.getElementById("playAudio");

playButton.onclick = function(){
    playButton.classList.toggle("playing");
    const isPlaying = playButton.classList.contains("playing");

    if(isPlaying){
        playAudio.play();
        playButton.classList.add("bi-pause-fill");
        playButton.classList.remove("bi-play-fill");
    }
    else{
        playAudio.pause();
        playButton.classList.remove("bi-pause-fill");
        playButton.classList.add("bi-play-fill");
    }
}