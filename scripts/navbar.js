// NAVBAR //
function navbar() {
    // Crear el navbar
    const nav = document.createElement("nav");
    nav.classList.add("nav-bar");

    // Contenedor del logo
    const logoContainer = document.createElement("div");
    logoContainer.classList.add("logo-container");

    const logo = document.createElement("img");
    logo.src = "/images/BWC_prim.png";
    logo.alt = "Home";

    const logoLink = document.createElement("a");
    logoLink.href = "../index.html";
    logoLink.appendChild(logo);

    logoContainer.appendChild(logoLink);

    // Contenedor del botón hamburguesa
    const menuToggle = document.createElement("button");
    menuToggle.classList.add("menu-toggle");
    menuToggle.innerHTML = "&#9776;"; // Icono hamburguesa (≡)

    // Contenedor de los enlaces
    const ul = document.createElement("ul");
    ul.classList.add("nav-links");

    const links = [
        { text: "Libros", url: "../pages/libros.html", icon: "📖" },
        { text: "Eventos", url: "../pages/events.html", icon: "⭐" },
        { text: "Contacto", url: "../pages/contact.html", icon: "✉️" }
    ];

    links.forEach(link => {
        const li = document.createElement("li");
        const a = document.createElement("a");
        a.href = link.url;
        a.classList.add("nav-link");
        a.textContent = link.text; // Solo el texto por defecto

        // Crear un span para el icono, que solo se muestra en móviles
        const iconSpan = document.createElement("span");
        iconSpan.classList.add("nav-icon");
        iconSpan.innerHTML = link.icon; // Agregar el icono
        
        // Envolver en un div para mejor organización
        const linkContainer = document.createElement("div");
        linkContainer.classList.add("nav-item");
        linkContainer.appendChild(iconSpan);
        linkContainer.appendChild(a);
        
        li.appendChild(linkContainer);
        ul.appendChild(li);
    });

    // Agregar elementos al navbar
    nav.appendChild(logoContainer);
    nav.appendChild(menuToggle);
    nav.appendChild(ul);

    document.body.prepend(nav);

    // Funcionalidad del botón hamburguesa
    menuToggle.addEventListener("click", () => {
        ul.classList.toggle("show");
        menuToggle.innerHTML = ul.classList.contains("show") ? "✖" : "&#9776;"; // Cambia el icono
    });
}

navbar();
