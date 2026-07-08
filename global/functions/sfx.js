// Automatically detect where the script is located to make audio paths bulletproof on any subpage!
const scriptBase = document.currentScript ? document.currentScript.src.replace(/functions\/sfx\.js$/, '') : 'global/';

// Pre-load the sounds dynamically based on the script's true location
const PressU = new Audio(scriptBase + 'sfx/wiiu/WAV_240_GUESS_BANK_MEN.wav');
const OkU = new Audio(scriptBase + 'sfx/wiiu/WAV_244_GUESS_WARC_1_GUESS_GROUP_MEN.wav');
const BackU = new Audio(scriptBase + 'sfx/wiiu/WAV_247_GUESS_WARC_1_GUESS_GROUP_MEN.wav');
const OpenU = new Audio(scriptBase + 'sfx/wiiu/WAV_245_GUESS_WARC_1_GUESS_GROUP_MEN.wav');
const ReloadU = new Audio(scriptBase + 'sfx/wiiu/WAV_248_GUESS_BANK_MEN.wav');
const PressDS = new Audio(scriptBase + 'sfx/3ds/SE_CTR_HOME_TOUCH.wav');
const OkDS = new Audio(scriptBase + 'sfx/3ds/SE_CTR_COMMON_BUTTON.wav');
const BackDS = new Audio(scriptBase + 'sfx/3ds/SE_CTR_COMMON_RETURN.wav');

function playRapidSound(audioElement) {
    audioElement.currentTime = 0;
    audioElement.play().catch(error => console.log("Sound skipped:", error));
}

document.addEventListener('DOMContentLoaded', () => {
    
    const ButtonU = document.querySelectorAll('.wiiu');
    const BacButtonU = document.querySelectorAll('.bacU');
    const ReloadButtonU = document.querySelectorAll('.homeU');
    const ButtonGolongU = document.querySelectorAll('.golongU');
    const ButtonDS = document.querySelectorAll('[class~="3ds"]');
    const BacButtonDS = document.querySelectorAll('.bacDS');
    
    // Sounds for "Wii U" Buttons
    ButtonU.forEach(button => {
        button.addEventListener('mousedown', () => playRapidSound(PressU));
        button.addEventListener('mouseup', () => playRapidSound(OkU));
        
        button.addEventListener('touchstart', () => playRapidSound(PressU), {passive: true});
        button.addEventListener('touchend', () => playRapidSound(OkU));
        
        button.addEventListener('mouseleave', (event) => {
            if (event.buttons === 1) playRapidSound(OkU);
        });
    });

    // Sounds for "Back Wii U" Buttons
    BacButtonU.forEach(button => {
        button.addEventListener('mousedown', () => playRapidSound(PressU));
        button.addEventListener('mouseup', () => playRapidSound(BackU));
                
        button.addEventListener('touchstart', () => playRapidSound(PressU), {passive: true});
        button.addEventListener('touchend', () => playRapidSound(BackU));
        
        button.addEventListener('mouseleave', (event) => {
            if (event.buttons === 1) playRapidSound(BackU);
        });
    });

    // Sounds for the "Reload Wii U" Button
    ReloadButtonU.forEach(button => {
        button.addEventListener('mousedown', () => playRapidSound(PressU));
        button.addEventListener('mouseup', () => playRapidSound(ReloadU));
                
        // FIXED TYPO: Changed PressURL to PressU
        button.addEventListener('touchstart', () => playRapidSound(PressU), {passive: true});
        button.addEventListener('touchend', () => playRapidSound(ReloadU));
                
        button.addEventListener('mouseleave', (event) => {
            if (event.buttons === 1) playRapidSound(ReloadU);
        });
    });
    
    // Sounds for "Go Into Wii U" Buttons
    ButtonGolongU.forEach(button => {
        button.addEventListener('mousedown', () => playRapidSound(PressU));
        button.addEventListener('mouseup', () => playRapidSound(OpenU));
                
        button.addEventListener('touchstart', () => playRapidSound(PressU), {passive: true});
        button.addEventListener('touchend', () => playRapidSound(OpenU));
        
        button.addEventListener('mouseleave', (event) => {
            // FIXED: Changed BackU to OpenU to match the button's theme
            if (event.buttons === 1) playRapidSound(OpenU);
        });
    });
    
    // Sounds for "3DS" Buttons
    ButtonDS.forEach(button => {
        button.addEventListener('mousedown', () => playRapidSound(PressDS));
        button.addEventListener('mouseup', () => playRapidSound(OkDS));
        
        button.addEventListener('touchstart', () => playRapidSound(PressDS), {passive: true});
        button.addEventListener('touchend', () => playRapidSound(OkDS));
        
        button.addEventListener('mouseleave', (event) => {
            if (event.buttons === 1) playRapidSound(OkDS);
        });
    });
    
    BacButtonDS.forEach(button => {
        button.addEventListener('mousedown', () => playRapidSound(PressDS));
        button.addEventListener('mouseup', () => playRapidSound(BackDS));
        
        button.addEventListener('touchstart', () => playRapidSound(PressDS), {passive: true});
        button.addEventListener('touchend', () => playRapidSound(BackDS));
        
        button.addEventListener('mouseleave', (event) => {
            if (event.buttons === 1) playRapidSound(BackDS);
        });
    });
    
});
