const video = document.getElementById('video');
const audio = document.getElementById('audio');
const playBtn = document.getElementById('playBtn');
const pauseBtn = document.getElementById('pauseBtn');
const muteBtn = document.getElementById('muteBtn');

// Function to sync audio with video
const syncAudioWithVideo = () => {
    audio.currentTime = video.currentTime;
};

// Play both video and audio
video.addEventListener('play', () => {
    if (audio.paused) {
        audio.play().catch(error => console.error('Audio play error:', error));
    }
    // pauseBtn.style.display = "block";
    // playBtn.style.display = "none";
});

// Pause both video and audio
video.addEventListener('pause', () => {
    if (!audio.paused) {
        audio.pause().catch(error => console.error('Audio pause error:', error));
    }
    // playBtn.style.display = "block";
    // pauseBtn.style.display = "none";
});

// Sync audio with video when seeking
video.addEventListener('seeked', syncAudioWithVideo);

// Sync audio with video when playing
video.addEventListener('timeupdate', syncAudioWithVideo);

// Play button functionality
playBtn.addEventListener('click', () => {
        video.play()
        audio.play()
});

// Pause button functionality
pauseBtn.addEventListener('click', () => {
        video.pause()
        audio.pause()
});

// Mute button functionality
function MutedPlay() {
    if (audio.muted) {
        audio.muted = false;
        video.muted = true;
        muteBtn.textContent = 'Mute';
    } else {
        audio.muted = true;
        video.muted = false;
        muteBtn.textContent = 'Unmute';
    }
};

// Start the video and audio automatically
video.play().catch(error => console.error('Video play error on load:', error));
audio.play().catch(error => console.error('Audio play error on load:', error));

// Ensure buttons are correctly initialized
window.addEventListener('load', () => {
    if (video.paused) {
        playBtn.style.display = "block";
        pauseBtn.style.display = "none";
    } else {
        playBtn.style.display = "none";
        pauseBtn.style.display = "block";
    }
    muteBtn.textContent = audio.muted ? 'Unmute' : 'Mute';
});