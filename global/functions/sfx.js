(() => {
    const base = document.currentScript
        ? document.currentScript.src.replace(/functions\/sfx\.js.*$/, "")
        : "/global/";

    const load = (path) => {
        const audio = new Audio(base + path);
        audio.preload = "auto";
        return audio;
    };

    const sfx = {
        pressU: load("sfx/wiiu/WAV_240_GUESS_BANK_MEN.wav"),
        okU: load("sfx/wiiu/WAV_244_GUESS_WARC_1_GUESS_GROUP_MEN.wav"),
        openU: load("sfx/wiiu/WAV_245_GUESS_WARC_1_GUESS_GROUP_MEN.wav"),
        backU: load("sfx/wiiu/WAV_247_GUESS_WARC_1_GUESS_GROUP_MEN.wav"),
        reloadU: load("sfx/wiiu/WAV_248_GUESS_BANK_MEN.wav"),
        pressDS: load("sfx/3ds/SE_CTR_HOME_TOUCH.wav"),
        okDS: load("sfx/3ds/SE_CTR_COMMON_BUTTON.wav"),
        backDS: load("sfx/3ds/SE_CTR_COMMON_RETURN.wav")
    };

    const play = (clip) => {
        clip.currentTime = 0;
        clip.play().catch(() => {});
    };

    const bind = (selector, down, up) => {
        document.querySelectorAll(selector).forEach((el) => {
            el.addEventListener("mousedown", () => play(down));
            el.addEventListener("mouseup", () => play(up));
            el.addEventListener("touchstart", () => play(down), { passive: true });
            el.addEventListener("touchend", () => play(up));
            el.addEventListener("keydown", (event) => {
                if (event.key === "Enter" || event.key === " ") play(down);
            });
            el.addEventListener("keyup", (event) => {
                if (event.key === "Enter" || event.key === " ") play(up);
            });
        });
    };

    document.addEventListener("DOMContentLoaded", () => {
        bind(".wiiu", sfx.pressU, sfx.okU);
        bind(".golongU", sfx.pressU, sfx.openU);
        bind(".bacU", sfx.pressU, sfx.backU);
        bind(".homeU", sfx.pressU, sfx.reloadU);
        bind('[class~="3ds"]', sfx.pressDS, sfx.okDS);
        bind(".bacDS", sfx.pressDS, sfx.backDS);
    });
})();
