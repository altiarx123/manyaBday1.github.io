document.querySelector('.play-btn').addEventListener('click', () => {
    const audio = new Audio('voice-note.mp3');
    audio.play();
});
