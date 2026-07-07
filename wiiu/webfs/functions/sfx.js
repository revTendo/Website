// Pre-load the sounds
const pressSound = new Audio('webfs/sfx/WAV_240_GUESS_BANK_MEN.wav');
const releaseSound1 = new Audio('webfs/sfx/WAV_244_GUESS_WARC_1_GUESS_GROUP_MEN.wav');
const releaseSound2 = new Audio('webfs/sfx/WAV_247_GUESS_WARC_1_GUESS_GROUP_MEN.wav');
const releaseSound3 = new Audio('webfs/sfx/WAV_245_GUESS_WARC_1_GUESS_GROUP_MEN.wav');
const Reload = new Audio('webfs/sfx/WAV_248_GUESS_BANK_MEN.wav');

function playRapidSound(audioElement) {
    audioElement.currentTime = 0;
    audioElement.play().catch(error => console.log("Sound skipped:", error));
}

document.addEventListener('DOMContentLoaded', () => {
    
    const allGoodButtons = document.querySelectorAll('.pill-button:not(.bac, .home, .golong), .pill-button-big:not(.bac, .home, .golong), .page-buttons:not(.bac, .home, .golong)');
    const allBacButtons = document.querySelectorAll('.bac');
    const ReloadButton = document.querySelectorAll('.home');
    const ButtonGolong = document.querySelectorAll('.golong');
    
    // Sounds for "Good" Buttons
    allGoodButtons.forEach(button => {
        button.addEventListener('mousedown', () => playRapidSound(pressSound));
        button.addEventListener('mouseup', () => playRapidSound(releaseSound1));
        
        button.addEventListener('touchstart', () => playRapidSound(pressSound), {passive: true});
        button.addEventListener('touchend', () => playRapidSound(releaseSound1));
        
        button.addEventListener('mouseleave', (event) => {
            if (event.buttons === 1) playRapidSound(releaseSound1);
        });
    });

    // Sounds for "Bac" Buttons
    allBacButtons.forEach(button => {
        button.addEventListener('mousedown', () => playRapidSound(pressSound));
        button.addEventListener('mouseup', () => playRapidSound(releaseSound2));
                
        button.addEventListener('touchstart', () => playRapidSound(pressSound), {passive: true});
        button.addEventListener('touchend', () => playRapidSound(releaseSound2));
        
        button.addEventListener('mouseleave', (event) => {
            if (event.buttons === 1) playRapidSound(releaseSound2);
        });
    });

    // Sounds for "Home" Button
    ReloadButton.forEach(button => {
        button.addEventListener('mousedown', () => playRapidSound(pressSound));
        button.addEventListener('mouseup', () => playRapidSound(Reload));
                
        button.addEventListener('touchstart', () => playRapidSound(pressSound), {passive: true});
        button.addEventListener('touchend', () => playRapidSound(Reload));
                
        button.addEventListener('mouseleave', (event) => {
            if (event.buttons === 1) playRapidSound(Home);
        });
    });
    
    // Sounds for "Bac" Buttons
    ButtonGolong.forEach(button => {
        button.addEventListener('mousedown', () => playRapidSound(pressSound));
        button.addEventListener('mouseup', () => playRapidSound(releaseSound3));
                
        button.addEventListener('touchstart', () => playRapidSound(pressSound), {passive: true});
        button.addEventListener('touchend', () => playRapidSound(releaseSound3));
        
        button.addEventListener('mouseleave', (event) => {
            if (event.buttons === 1) playRapidSound(releaseSound2);
        });
    });
    
});
