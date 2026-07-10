(() => {
    const base = document.currentScript
        ? document.currentScript.src.replace(/functions\/progress\.js.*$/, "")
        : "/global/";

    const lamp = (done) => base + (done ? "image/wiiu/lamp_on.png" : "image/wiiu/lamp_off.png");

    document.addEventListener("DOMContentLoaded", () => {
        const items = [...document.querySelectorAll(".progress-list li[data-done]")];
        if (!items.length) return;

        items.forEach((item) => {
            const done = item.dataset.done === "true";
            const icon = document.createElement("img");
            icon.src = lamp(done);
            icon.alt = done ? "Done" : "Not done";
            item.prepend(icon);
        });

        const done = items.filter((item) => item.dataset.done === "true").length;
        const percent = Math.round((done / items.length) * 100);

        const readout = document.querySelector("[data-progress-value]");
        const fill = document.querySelector(".progressbar > span");
        const bar = document.querySelector(".progressbar");

        if (readout) readout.textContent = percent + "%";
        if (bar) bar.setAttribute("aria-valuenow", String(percent));
        if (fill) requestAnimationFrame(() => { fill.style.width = percent + "%"; });
    });
})();
