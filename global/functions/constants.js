window.Constants = {
    DISCORD_INVITE: "https://discord.gg/KEvnts6m2M",
    REVTENDO_3DSPROXY_IP: "89.167.6.41",
    REVTENDO_3DSPROXY_PORT: "8081",
    PROGRESS_3DS: {
        services: {
            eShop: true,
            badgeArcade: true,
            themeShop: false
        },
        backend: {
            proxyServer: true,
            credentialGenerator: true
        },
        release: {
            patch: false,
            setupGuide: false
        }
    }
};

document.addEventListener("DOMContentLoaded", function() {
    document.body.style.opacity = 1;
});
