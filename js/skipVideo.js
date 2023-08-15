/*function generateRandomYouTubeEmbed(videoData) {
    const randomIndex = Math.floor(Math.random() * videoData.length);
    const randomVideo = videoData[randomIndex];

    const options = {
        start: 303,
        autoplay: 1,
        rel: 0,
        mute: 1,
        playsinline: 1,
        controls: 0,
        enablejsapi: 1
    };

    const queryString = Object.entries(options)
        .map(([key, value]) => `${key}=${value}`)
        .join('&');

    return {
        embed: `https://www.youtube.com/embed/${randomVideo.id}?${queryString}`,
        title: randomVideo.name,
        audio: randomVideo.audio
    };
}*/

function generateYouTubeEmbed(videoId, startTime) {
    const options = {
        start: startTime,
        autoplay: 1,
        rel: 0,
        mute: 1,
        playsinline: 1,
        controls: 0,
        enablejsapi: 1,
        cc_load_policy: 3,
        iv_load_policy: 3
    };

    const queryString = Object.entries(options)
        .map(([key, value]) => `${key}=${value}`)
        .join('&');

    return `https://www.youtube.com/embed/${videoId}?${queryString}`;
}

const spaceAudios = [
    {src: "audios/space/midnightcity.mp3"},
    {src: "audios/space/sleepwell.mp3"},
    {src: "audios/space/spacesong.mp3"},
]

const videoData = [
    { id: "IHXZnU2bmc8", name: "Napoli", audio: "https://ice06.fluidstream.net/RadioNapoli.mp3", start: 4138},
    { id: "uuAKvl56YVs", name: "Roma", audio: "audios/acquadertevere.mp3", start: 405},
    { id: "DPZ3Ps-U-bo", name: "Milano", audio: "audios/m12ano.mp3", start: 303},
    { id: "riZWEoGKyuU", name: "Venezia", audio: "audios/m12ano.mp3", start: 106},
    { id: "xS_JFKYmG0k", name: "Firenze", audio: "https://stream.tmwradio.com/rfviola.aac?FLID=1", start: 1702},
    { id: "4Q1N265qKH8", name: "Verona", audio: "audios/m12ano.mp3", start: 410},
    { id: "4yUz4wPkBn4", name: "Pisa", audio: "audios/m12ano.mp3", start: 137},
    { id: "chN57VftAao", name: "Trento", audio: "https://www.radiodolomiti.com:10068/;stream.mp3", start: 340},
    { id: "Ht_OQfAUbRI", name: "Torino", audio: "http://stream12.top-ix.org/radiotorino", start: 118},
    { id: "Qkc5Xxy4L2g", name: "Palermo", audio: "https://onair15.xdevel.com/proxy/rgs?mp=/;", start: 335},
    { id: "ztVV54sPOns", name: "ghay", audio: spaceAudios, start: 0},
];

const playerIframe = document.getElementById("player");
const cityName = document.getElementById("cityName");

const skipButton = document.getElementById("skipButton");
const prevButton = document.getElementById("prevButton");

let currentVideoIndex = 0;

skipButton.addEventListener("click", function () {
    currentVideoIndex = (currentVideoIndex + 1) % videoData.length;
    loadVideoByIndex(currentVideoIndex);

    if(playButton.classList.contains("playing")){
        playButton.classList.toggle("playing");
    }
    playAudio.pause();
    playButton.classList.remove("bi-pause-fill");
    playButton.classList.add("bi-play-fill");
});

prevButton.addEventListener("click", function () {
    currentVideoIndex = (currentVideoIndex - 1 + videoData.length) % videoData.length;
    loadVideoByIndex(currentVideoIndex);

    if(playButton.classList.contains("playing")){
        playButton.classList.toggle("playing");
    }
    playAudio.pause();
    playButton.classList.remove("bi-pause-fill");
    playButton.classList.add("bi-play-fill");
});

function loadVideoByIndex(index) {
    const { id, name, audio, start } = videoData[index];
    const embed = generateYouTubeEmbed(id, start);
    
    playerIframe.src = embed;
    cityName.textContent = name;

    if (name === "Space") {
        currentAudioIndex = Math.floor(Math.random() * spaceAudios.length);
        playAudio.innerHTML = `<source src="${spaceAudios[currentAudioIndex].src}">`;
        playAudio.load();
    } else {
        playAudio.innerHTML = `<source src="${audio}">`;
        console.log(audio);
        playAudio.load();
    }
}