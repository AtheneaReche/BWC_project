// NAVBAR //
function navbar() {
    const nav = document.createElement("nav");
          nav.classList.add("nav-bar");

    // LOGO CONTAINER
    const logoContainer = document.createElement("div");
          logoContainer.classList.add("logo-container");

    const logo = document.createElement("img");
          logo.src = "/images/BWC_prim.png";
          logo.alt = "Home";

    const logoLink = document.createElement("a");
          logoLink.href = "../index.html";
          logoLink.appendChild(logo);

    logoContainer.appendChild(logoLink);

    // BUTTON
    const menuToggle = document.createElement("button");
          menuToggle.classList.add("menu-toggle");
          menuToggle.innerHTML = "&#9776;";

    // LINKS
    const ul = document.createElement("ul");
          ul.classList.add("nav-links");

    const links = [
        { text: "Libros", url: "#", icon: "/images/collapsableMenu-books.png", dropdown: true },
        { text: "Eventos", url: "../pages/events.html", icon: "/images/collapsableMenu-Event.png" },
        { text: "Contacto", url: "../pages/contact.html", icon: "/images/collapsableMenu-mail.png" }
    ];

    links.forEach(link => {
        const li = document.createElement("li");
        const a = document.createElement("a");
              a.href = link.url;
              a.classList.add("nav-link");
              a.textContent = link.text;

        // LINKS ICONS
        const iconSpan = document.createElement("span");
              iconSpan.classList.add("nav-icon");
        const iconImg = document.createElement("img");
              iconImg.src = link.icon;
              iconImg.alt = link.text;
              iconImg.classList.add("nav-icon");
              iconSpan.appendChild(iconImg);

        // DIV CONTAINER
        const linkContainer = document.createElement("div");
              linkContainer.classList.add("nav-item");
              linkContainer.appendChild(iconSpan);
              linkContainer.appendChild(a);
        
        if (link.dropdown) {
            li.classList.add("dropdown");
            const dropdownMenu = document.createElement("ul");
                  dropdownMenu.classList.add("dropdown-submenu");
            a.classList.add("libros-link")
            
            const dropdownItems = [
                { text: "Búsqueda avanzada", url: "../pages/libros.html" },
                { text: "Búsqueda por géneros", url: "../pages/genres.html" }
            ];
            
            dropdownItems.forEach(item => {
                const dropdownLi = document.createElement("li");
                const dropdownA = document.createElement("a");
                      dropdownA.href = item.url;
                      dropdownA.textContent = item.text;
                      dropdownLi.appendChild(dropdownA);
                      dropdownMenu.appendChild(dropdownLi);
            });
            
            li.appendChild(dropdownMenu);
            li.addEventListener("mouseenter", () => dropdownMenu.classList.add("show"));
            li.addEventListener("mouseleave", () => dropdownMenu.classList.remove("show"));
        }
        
        li.appendChild(linkContainer);
        ul.appendChild(li);
    });

    document.addEventListener("DOMContentLoaded", () => {
        const librosLink = document.querySelector(".libros-link"); 
        const dropdown = document.querySelector(".dropdown");
        const dropdownMenu = document.querySelector(".dropdown-submenu");
        
        const backButton = document.createElement("div");
              backButton.classList.add("back-button");
              backButton.textContent = "← Volver";
        dropdownMenu.prepend(backButton);
        
        librosLink.addEventListener("click", (event) => {
            event.preventDefault(); 
            event.stopPropagation();
            dropdown.classList.toggle("show");
        });
        
        backButton.addEventListener("click", (event) => {
            event.stopPropagation();
            dropdown.classList.remove("show");
        });
        
        document.addEventListener("click", (event) => {
            if (!dropdown.contains(event.target) && !librosLink.contains(event.target)) {
                dropdown.classList.remove("show");
            }
        });
    });
    
    nav.appendChild(logoContainer);
    nav.appendChild(menuToggle);
    nav.appendChild(ul);

    document.body.prepend(nav);

    // FUNCTION TO COLLAPSABLE MENU
    menuToggle.addEventListener("click", () => {
        ul.classList.toggle("show");
        menuToggle.innerHTML = ul.classList.contains("show") ? "✖" : "&#9776;";
    });
}

navbar();

