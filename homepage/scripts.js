const music = document.getElementById("bg-music");
const toggleBtn = document.getElementById("music-toggle");

let isPlaying = false;

toggleBtn.addEventListener("click", () => {
  if (!isPlaying) {
    music.play();
    toggleBtn.textContent = "⏸ Pause Music";
  } else {
    music.pause();
    toggleBtn.textContent = "🎵 Play Music";
  }
  isPlaying = !isPlaying;
});
