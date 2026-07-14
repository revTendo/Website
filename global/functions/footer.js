function discord() { window.location.href = window.Constants.DISCORD_INVITE; }

(function () {
    const footer = [
        {
            name: 'Navigate',
            elements: [
                { href: '/', text: 'Home' },
                { href: '/3ds/', text: '3DS' },
                { href: '/wiiu/', text: 'Wii U' },
                { href: '/support/', text: 'Support' },
                { href: '/faq/', text: 'FAQ' },
                { href: '/staff/', text: 'Staff' }
            ]
        },
        {
            name: 'Progress',
            elements: [
                { href: '/3ds/progress/', text: '3DS progress' },
                { href: '/wiiu/progress/', text: 'Wii U progress' }
            ]
        },
        {
            name: 'Community',
            elements: [
                { href: "javascript:discord()", text: 'Discord', img: '/global/image/gfx/discord.webp' },
                { href: 'https://www.youtube.com/', text: 'YouTube', img: '/global/image/gfx/yticon.png', target: '_blank' }
            ]
        }
    ]

    function buildList(items) {
        return items.map(i => {
            const img = i.img ? `<img src="${i.img}" alt=""> ` : '';
            const target = i.target ? ` target="${i.target}"` : '';
            return `<li><a href="${i.href}" rel="noopener"${target}>${img}${i.text}</a></li>`;
        }).join('\n');
    }

    function buildFooter() {
        var html = '';
        footer.forEach(section => {
            html += `<div class="footer-section"><h2>${section.name}</h2><ul>${buildList(section.elements)}</ul></div>`;
        });
        html += `<div class="footer-section"><h2>Copyright</h2><p>&copy; <span id="year"></span> revTendo. All rights reserved.</p><p style="margin-top: 0.5rem; font-size: 0.85rem; opacity: 0.7;">revTendo is not affiliated with, endorsed by, or sponsored by Nintendo Co., Ltd. or its affiliates. Nintendo 3DS, Wii U, and related marks are trademarks of Nintendo.</p></div>`;
        return html;
    }

    function init() {
        const footer = document.querySelector('.site-footer');
        if (!footer) return;
        footer.innerHTML = buildFooter();
        const yearEl = footer.querySelector('#year');
        if (yearEl) yearEl.textContent = new Date().getFullYear();
    }

    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', init);
    } else {
        init();
    }
})();
