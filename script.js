const songs = [
    { title: "Poor Grammar", src: "poorgrammar.mp4", album: "poorgrammar.jpg", className: "song-1" }, 
    { title: "Ballad of Hamantha", src: "balladofhamantha.mp4", album: "stauberʻsalbum.jpg", className: "song-2" }, 
    { title: "A Loving Feeling", src: "alovingfeeling.mp4", album: "puberty2.jpg", className: "song-3" }
];

let currentIndex = 0;
let isPlaying = false;
let isShuffled = false;

const audioPlayer = document.getElementById("audio-player");
const playBtn = document.getElementById("play-btn");
const nextBtn = document.getElementById("next-btn");
const prevBtn = document.getElementById("prev-btn");
const shuffleBtn = document.getElementById("shuffle-btn");
const songTitle = document.getElementById("song-title");
const albumArt = document.getElementById("album-art");
const body = document.body;

// Load initial song
function loadSong(index) {
    const song = songs[index];
    songTitle.textContent = song.title;
    albumArt.src = song.album;
    audioPlayer.src = song.src;

    // Remove existing gradient class
    body.classList.remove("song-1", "song-2", "song-3");
    
    // Add new gradient class
    body.classList.add(song.className);
}

// Play or Pause Music
function togglePlay() {
    if (isPlaying) {
        audioPlayer.pause();
        playBtn.textContent = "▶️";
    } else {
        audioPlayer.play();
        playBtn.textContent = "⏸️";
    }
    isPlaying = !isPlaying;
}

// Next Song
function nextSong() {
    if (isShuffled) {
        currentIndex = Math.floor(Math.random() * songs.length);
    } else {
        currentIndex = (currentIndex + 1) % songs.length;
    }
    loadSong(currentIndex);
    audioPlayer.play();
    isPlaying = true;
    playBtn.textContent = "⏸️";
}

// Previous Song
function prevSong() {
    currentIndex = (currentIndex - 1 + songs.length) % songs.length;
    loadSong(currentIndex);
    audioPlayer.play();
    isPlaying = true;
    playBtn.textContent = "⏸️";
}

// Toggle Shuffle
function toggleShuffle() {
    isShuffled = !isShuffled;
    shuffleBtn.style.backgroundColor = isShuffled ? "#FFD700" : "#1DB954";
}

// Event Listeners
playBtn.addEventListener("click", togglePlay);
nextBtn.addEventListener("click", nextSong);
prevBtn.addEventListener("click", prevSong);
shuffleBtn.addEventListener("click", toggleShuffle);

// Load first song
loadSong(currentIndex);