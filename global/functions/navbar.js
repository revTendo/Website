const NAVBAR_OPTIONS = [
    {
        href: "/3ds/",
        text: "3DS"
    },
    {
        href: "/wiiu/",
        text: "Wii U"
    },
    {
        href: "/support/",
        text: "Support"
    },
    {
        href: "/faq/",
        text: "FAQ"
    },
    {
        href: "/staff/",
        text: "Staff"
    }
];
const NAVBAR = document.getElementById("navbar");

var logoLink = document.createElement("a");
logoLink.className = "nav-home";
logoLink.href = "/";
logoLink.setAttribute("aria-label", "revTendo home");
NAVBAR.appendChild(logoLink);

var logoImage = document.createElement("img");
logoImage.src = "/global/image/logo.png";
logoImage.alt = "revTendo";
logoImage.width = 1000;
logoImage.height = 240;
logoLink.appendChild(logoImage);

NAVBAR_OPTIONS.forEach(option => {
    const link = document.createElement("a");
    link.href = option.href;
    link.textContent = option.text;
    if (window.location.pathname === option.href) {
        link.classList.add("active");
    }
    NAVBAR.appendChild(link);
});