// NAVBAR //
function navbar() {
    // Base navbar
    const nav = document.createElement("nav");

    // Left container with logo image
    const logoContainer = document.createElement("div");
        logoContainer.classList.add("logo-container"); 

    const logo = document.createElement("img");
        logo.src = "../images/BWC_prim.png";
        logo.alt = "Home";

    const logoLink = document.createElement("a");
        logoLink.href = "index.html";
        logoLink.appendChild(logo);

    logoContainer.appendChild(logoLink);

    // Right container for links
    const ul = document.createElement("ul");

    const links = [
        { text: "Libros", url: "#" },
        { text: "Eventos", url: "events.html" },
        { text: "Contacto", url: "#" }
    ];

    links.forEach(link => {
        const li = document.createElement("li");
        const a = document.createElement("a");
            a.href = link.url;
            a.classList.add("nav-link");

        if (link.text) {
            a.appendChild(document.createTextNode(link.text));
        }

        li.appendChild(a);
        ul.appendChild(li);
    });

    nav.appendChild(logoContainer);
    nav.appendChild(ul);

    document.body.prepend(nav);
}

navbar();


