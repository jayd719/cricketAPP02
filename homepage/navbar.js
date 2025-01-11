function renderNavbar() {
    // Create the nav element
    const nav = document.createElement("nav");
    nav.className = "flex items-center justify-between px-6 py-4 bg-white shadow-md pt-10";

    // Logo container
    const logoContainer = document.createElement("div");
    logoContainer.className = "flex items-center space-x-2";

    const logoLink = document.createElement("a");
    logoLink.href = "/";

    const logoImage = document.createElement("img");
    logoImage.src = "/homepage/assets/img5.png";
    logoImage.alt = "Flutter Logo";
    logoImage.className = "h-8 md:h-6 scale-[3] translate-y-5";

    logoLink.appendChild(logoImage);
    logoContainer.appendChild(logoLink);

    // Navigation Links container
    const navLinksContainer = document.createElement("div");
    navLinksContainer.className = "hidden md:flex space-x-6 text-gray-700";

    const links = [
        { text: "Multi-Platform", href: "#" },
        { text: "Development", href: "#", class: "text-blue-600 font-semibold" },
        { text: "Ecosystem", href: "#" },
        { text: "Showcase", href: "#" },
        { text: "Docs", href: "#" },
    ];

    links.forEach(({ text, href, class: extraClass = "hover:text-blue-600 transition duration-300" }) => {
        const link = document.createElement("a");
        link.href = href;
        link.textContent = text;
        link.className = extraClass;
        navLinksContainer.appendChild(link);
    });

    // CTA & Mobile Menu container
    const ctaContainer = document.createElement("div");
    ctaContainer.className = "flex items-center space-x-4";

    // Get Started Button
    const ctaButton = document.createElement("button");
    ctaButton.className = "bg-gradient-to-r from-blue-600 to-purple-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition duration-300";
    ctaButton.textContent = "Get Started";

    // Mobile Menu Button
    const menuButton = document.createElement("button");
    menuButton.className = "md:hidden focus:outline-none";

    const menuIcon = document.createElementNS("http://www.w3.org/2000/svg", "svg");
    menuIcon.className = "w-6 h-6 text-gray-700";
    menuIcon.setAttribute("xmlns", "http://www.w3.org/2000/svg");
    menuIcon.setAttribute("fill", "none");
    menuIcon.setAttribute("viewBox", "0 0 24 24");
    menuIcon.setAttribute("stroke", "currentColor");

    const menuPath = document.createElementNS("http://www.w3.org/2000/svg", "path");
    menuPath.setAttribute("stroke-linecap", "round");
    menuPath.setAttribute("stroke-linejoin", "round");
    menuPath.setAttribute("stroke-width", "2");
    menuPath.setAttribute("d", "M4 6h16M4 12h16m-7 6h7");

    menuIcon.appendChild(menuPath);
    menuButton.appendChild(menuIcon);

    // Append elements together
    ctaContainer.appendChild(ctaButton);
    ctaContainer.appendChild(menuButton);

    nav.appendChild(logoContainer);
    nav.appendChild(navLinksContainer);
    nav.appendChild(ctaContainer);

    // Append the navbar to the body
    document.body.appendChild(nav);
}

// Call function to render the navbar
renderNavbar();

// window.addEventListener("scroll", function () {
//     console.log("User is scrolling...");
// });


// const background = document.createElement("div");
// background.className = "absolute top-0 left-0 w-full h-full bg-green-200 -z-10";
// background.style.height = maxY
// document.body.prepend(background); // Ensures it's behind all other elements

// const maxY = document.documentElement.scrollHeight * 4;
// const UPPER = 255
// window.addEventListener("scroll", () => {

//     let scrollRatio = Math.min(window.scrollY / maxY, 1);
//     let currVal = Math.round(UPPER * (1 - scrollRatio));

//     let hexValue = currVal.toString(16).padStart(2, "0"); // "ff"

//     document.body.style.backgroundColor = `#${hexValue}${hexValue}${hexValue}`

//     console.log(`window.scrollY: ${window.scrollY}`)
// })


