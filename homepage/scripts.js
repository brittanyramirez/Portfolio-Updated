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

//back to the top button//
window.addEventListener('scroll', ()=>{
    const button = document.getElementById('backToTop');
    if(window.scrollY > 200){
        button.style.display = 'block';
    } else {
        button.style.display = 'none';
    }
});

document.getElementById('backToTop').addEventListener('click', () =>{
    window.scrollTo({ top: 0, behavior: 'smooth'});
});