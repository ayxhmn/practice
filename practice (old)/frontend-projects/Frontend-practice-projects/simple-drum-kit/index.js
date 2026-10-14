const drum = document.getElementById('drum');
const hihat = document.getElementById('hi-hat');
const snare = document.getElementById('snare');
const bass = document.getElementById('bass');

const drum_sound = new Audio('public/sounds/drum-kick.wav');
const hihat_sound = new Audio('public/sounds/hi-hat.wav');
const snare_sound = new Audio('public/sounds/snare.wav');
const bass_sound = new Audio('public/sounds/bass.wav');

// Preloading the audio in memory
drum_sound.load();
hihat_sound.load();
snare_sound.load();
bass_sound.load();

// Helper function to play sound
function playSound(base) {
    const sound = base.cloneNode(); // Makes a new playable copy (??)
    sound.play();
}

function playDrum() {
    playSound(drum_sound);
}

function playHiHat() {
    playSound(hihat_sound);
}

function playSnare() {
    playSound(snare_sound);
}

function playBass() {
    playSound(bass_sound);
}

// Mouse clicks
drum.addEventListener('click', playDrum);
hihat.addEventListener('click', playHiHat);
snare.addEventListener('click', playSnare);
bass.addEventListener('click', playBass);

// helper function for flashing buttons on clicking keyboard buttons
function flash(el) {
    el.classList.add('flash');
    setTimeout(() => {
        el.classList.remove('flash');
    }, 150);
}

// Keyboard buttons
document.addEventListener('keydown', (event) => {
    if (event.key === 'j' || event.key === 'J') {
        playDrum();
        flash(drum);
    }
    if (event.key === 'k' || event.key === 'K') {
        playHiHat();
        flash(hihat);
    }
    if (event.key === 'l' || event.key === 'L') {
        playSnare();
        flash(snare);
    }
    if (event.key === 'i' || event.key === 'I') {
        playBass();
        flash(bass);
    }
});

// For flashing the buttons on clicking
document.querySelectorAll('#btk-bar > div').forEach(el => {
    el.addEventListener('click', () => {
        el.classList.add('flash');
        setTimeout(() => {
            el.classList.remove('flash');
        }, 150);
    });
});