import { createFooter } from "./footer.js";

/* Seleccion en el HTML */
const sectionSearch = document.querySelector(".section__search");
const sectionSearchResults = document.querySelector(".section__search-results");
const sectionTips = document.querySelector(".section__tips");

/*SECCION DE BUSQUEDA*/
function createSearch() {
    sectionSearch.innerHTML = `
                <h1 class="section__search-title c_Brown">Busca un libro</h1>
                <div class="search__container">
                    <div class="search__container-inputs">
                        <input type="text" class="search__container-input search__container-input_name" placeholder="Nombre del libro">
                        <input type="text" class="search__container-input search__container-input_author" placeholder="Nombre del autor">
                    </div>
                    <button class="c_Beige search_button">Buscar</button>
                </div>`
    const searchBtn = document.querySelector(".search_button");

    searchBtn.addEventListener("click", () => {
        sectionTips.classList.add("d-none");
        loadingData(sectionSearchResults)
        const searchByName = document.querySelector(".search__container-input_name").value;
        const searchByAuthor = document.querySelector(".search__container-input_author").value;
        searchBook(searchByName, searchByAuthor);
    })
}

function searchBook(name, author) {
    let url = "https://openlibrary.org/search.json?";

    if (name || author) {
        if (name && author) {
            url += `title=${encodeURIComponent(name)}&author=${encodeURIComponent(author)}`;
        } else if (name) {
            url += `title=${encodeURIComponent(name)}`;
        } else {
            url += `author=${encodeURIComponent(author)}`;
        }
        url += `&limit=50&offset=0`;
    }
    else {
        let randomNumber = Math.floor(Math.random() * 971);
        url += `q=book&limit=20&offset=${randomNumber}`;
    }
    fetch(url)
        .then(response => response.json())
        .then(data => {
            sectionSearchResults.classList.remove("loading_data")
            sectionSearchResults.innerHTML = " "
            data.docs.forEach(libro => { createResultsCarts(libro, sectionSearchResults) });
        })
        .catch(error => console.error('Error al obtener los datos:', error));
}


function createResultsCarts(libro, seccion) {
    let textAuthor = libro.author_name ? (libro.author_name.length > 1 ? "Autores" : "Autor") : "Autor desconocido";
    let author;

    if (libro.author_name && libro.author_name.length > 3) {
        author = libro.author_name.slice(0, 3).join(", ") + "...";
    } else {
        author = libro.author_name ? libro.author_name.join(", ") : "Autor desconocido";
    }

    let title= libro.title.length > 40 ? libro.title.slice(0, 40) + "..." : libro.title;

    let imgLibro = libro.cover_i
    ? `https://covers.openlibrary.org/b/id/${libro.cover_i}-M.jpg`
    : "../images/novedades.jpg";

    let keyButton = libro.cover_i || Math.floor(Math.random() * 1000) + 1;/* para aquellos libros que no existia una clave existente en comun */
    

    const article = document.createElement("article");
    article.classList.add("search__result-book")
    article.innerHTML = `
                    <div class=search__result-book_inf>
                        <h3 class="result-book_inf-title c_Brown">${title}</h3>
                        <p><strong>${textAuthor}:</strong> ${author}</p>
                        <p><strong>Año de Publicación:</strong> ${libro.first_publish_year || 'N/A'}</p>
                        <button class="book_inf-${keyButton} book_inf-btn" >Ver libro</button>
                    </div>
                    <div class="search__result-book_img">
                        <img src="${imgLibro}" alt="Portada del libro" onerror="this.style.display='none'"> 
                    </div>
        `;

    seccion.appendChild(article)
    const btn = document.querySelector(`.book_inf-${keyButton}`);
    btn.addEventListener("click", () => {
        const bookKey = encodeURIComponent(libro.key);
        const bookTitle = encodeURIComponent(libro.title || "Título no disponible");
        const bookAuthor = encodeURIComponent(libro.author_name ? libro.author_name.join(", ") : "Autor desconocido");
        window.open(`book.html?book=${bookKey}&title=${bookTitle}&author=${bookAuthor}`, "_blank");
    })
}

/* SECCION RECOMENDADO */
function searchTip() {
    sectionTips.classList.add("min-height")
    const title = document.createElement("h2");
    title.classList.add("section__tip-title", "c_Orange")
    title.textContent = "Nuestra sugerencia";
    const div = document.createElement("div");
    loadingData(div)
    sectionTips.append(title, div)
    let randomNumber = Math.floor(Math.random() * 971);
    let url = `https://openlibrary.org/search.json?q=book&limit=1&offset=${randomNumber}`;
    fetch(url)
        .then(response => response.json())
        .then(data => {
            return data.docs;
        })
        .then(docs => {
            div.remove()
            sectionTips.classList.remove("min-height")
            createResultsCarts(docs[0], sectionTips)
        })
}


/* Mensaje de cargando mientras se realiza la peticion a la API */
function loadingData(seccion) {
    seccion.classList.add("loading_data");
    seccion.innerHTML = "Realizando busqueda. Puede tardar unos segundos.."
}

createSearch();
searchTip();

/*SECCION FOOTER  */
const footer=document.querySelector(".footer");
createFooter("#","../pages/contact.html",footer); //-------------------------INCORPORAR LINKS
