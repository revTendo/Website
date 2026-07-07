// Pre-load the sounds
const pressSoundU = new Audio('webfs/sfx/wiiu/WAV_240_GUESS_BANK_MEN.wav');
const releaseSound1U = new Audio('webfs/sfx/wiiu/WAV_244_GUESS_WARC_1_GUESS_GROUP_MEN.wav');
const releaseSound2U = new Audio('webfs/sfx/wiiu/WAV_247_GUESS_WARC_1_GUESS_GROUP_MEN.wav');
const releaseSound3U = new Audio('webfs/sfx/wiiu/WAV_245_GUESS_WARC_1_GUESS_GROUP_MEN.wav');
const ReloadU = new Audio('webfs/sfx/wiiu/WAV_248_GUESS_BANK_MEN.wav');
const pressSoundDS = new Audio('webfs/sfx/3ds/SE_CTR_HOME_TOUCH.wav');
const releaseSound1DS = new Audio('webfs/sfx/3ds/SE_CTR_COMMON_OK.wav');

function playRapidSound(audioElement) {
    audioElement.currentTime = 0;
    audioElement.play().catch(error => console.log("Sound skipped:", error));
}

document.addEventListener('DOMContentLoaded', () => {
    
    const ButtonU = document.querySelectorAll('.wiiu');
    const BacButtonU = document.querySelectorAll('.bacU');
    const ReloadButtonU = document.querySelectorAll('.homeU');
    const ButtonGolongU = document.querySelectorAll('.golongU');
    const ButtonDS = document.querySelectorAll('.3ds');
    
    // Sounds for "Wii U" Buttons
    ButtonU.forEach(button => {
        button.addEventListener('mousedown', () => playRapidSound(pressSoundU));
        button.addEventListener('mouseup', () => playRapidSound(releaseSound1U));
        
        button.addEventListener('touchstart', () => playRapidSound(pressSoundU), {passive: true});
        button.addEventListener('touchend', () => playRapidSound(releaseSound1U));
        
        button.addEventListener('mouseleave', (event) => {
            if (event.buttons === 1) playRapidSound(releaseSound1U);
        });
    });

    // Sounds for "Back Wii U" Buttons
    BacButtonU.forEach(button => {
        button.addEventListener('mousedown', () => playRapidSound(pressSoundU));
        button.addEventListener('mouseup', () => playRapidSound(releaseSound2U));
                
        button.addEventListener('touchstart', () => playRapidSound(pressSoundU), {passive: true});
        button.addEventListener('touchend', () => playRapidSound(releaseSound2U));
        
        button.addEventListener('mouseleave', (event) => {
            if (event.buttons === 1) playRapidSound(releaseSound2U);
        });
    });

    // Sounds for the "Reload Wii U" Button
    ReloadButtonU.forEach(button => {
        button.addEventListener('mousedown', () => playRapidSound(pressSoundU));
        button.addEventListener('mouseup', () => playRapidSound(ReloadU));
                
        button.addEventListener('touchstart', () => playRapidSound(pressSoundU), {passive: true});
        button.addEventListener('touchend', () => playRapidSound(ReloadU));
                
        button.addEventListener('mouseleave', (event) => {
            if (event.buttons === 1) playRapidSound(ReloadU);
        });
    });
    
    ButtonGolongU.forEach(button => {
        button.addEventListener('mousedown', () => playRapidSound(pressSoundU));
        button.addEventListener('mouseup', () => playRapidSound(releaseSound3U));
                
        button.addEventListener('touchstart', () => playRapidSound(pressSoundU), {passive: true});
        button.addEventListener('touchend', () => playRapidSound(releaseSound3U));
        
        button.addEventListener('mouseleave', (event) => {
            if (event.buttons === 1) playRapidSound(releaseSound2U);
        });
    });
    
    ButtonDS.forEach(button => {
        button.addEventListener('mousedown', () => playRapidSound(pressSoundDS));
        button.addEventListener('mouseup', () => playRapidSound(releaseSound1DS));
        
        button.addEventListener('touchstart', () => playRapidSound(pressSoundDS), {passive: true});
        button.addEventListener('touchend', () => playRapidSound(releaseSound1DS));
        
        button.addEventListener('mouseleave', (event) => {
            if (event.buttons === 1) playRapidSound(releaseSound1DS);
        });
    });
    
});
