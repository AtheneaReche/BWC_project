import { createFooter } from "./footer.js";

const back=document.querySelector(".back__container");
back.innerHTML=`<a class="c_Brown" href="./books.html">Volver atrás</a>`;


const sectionCartBook=document.querySelector(".section__cart-book");

const bookDetails = document.createElement("article");
bookDetails.classList.add("section__cart-book_details")

sectionCartBook.appendChild(bookDetails)
    async function fetchBookDetails() {
        const params = new URLSearchParams(window.location.search);
        const bookKey = params.get("book");
        const bookTitle = params.get("title");
        const bookAuthor = params.get("author");

        if (!bookKey) {
            document.getElementById("book-details").innerHTML = "<p>Error: No se encontró el libro.</p>";
            return;
        }

        try {
            //Se realizan dos peticiones ya que una sola no me devuelve toda la informacion necesaria
            const workResponse = await fetch(`https://openlibrary.org${bookKey}.json`);
            const libro = await workResponse.json();

            const editionsResponse = await fetch(`https://openlibrary.org${bookKey}/editions.json`);
            const editionsData = await editionsResponse.json();

            const firstEdition = editionsData.entries?.[0] || {};
            const publishDate = firstEdition.publish_date || "No disponible";
            const editionsCount = editionsData.size || "No disponible";
            console.log(libro)

            // Obtener cantidad autores
            let cantAuthors;
            if(libro.authors.length>1){
                cantAuthors="Autores"
            }else{
                cantAuthors="Autor";
            }


            // Mostrar detalles en la página
            bookDetails.innerHTML = `
                <div class="cart-book_details-image">
                    ${libro.covers ? `<img src="https://covers.openlibrary.org/b/id/${libro.covers[0]}-M.jpg" alt="${bookTitle}">` : 
                        `<img src="../images/novedades.jpg" alt="${bookTitle}">`}
                </div>
                <div class="cart-book_details-text">
                    <h2 class="book_details-text__title c_Orange">${bookTitle}</h2>
                    <p><strong>${cantAuthors}:</strong> ${bookAuthor}</p>
                    <p><strong>Descripción:</strong> ${libro.description?.value || libro.description || "No disponible"}</p>
                    <p><strong>Género:</strong> ${libro.subjects ? libro.subjects.join(", ") : "No disponible"}</p>
                    <p><strong>Ediciones:</strong> ${editionsCount}</p>
                    <p><strong>Fecha de Publicación:</strong> ${publishDate}</p>
                </div>`;
        } catch (error) {
            console.error("Error al obtener detalles del libro:", error);
            document.getElementById("book-details").innerHTML = "<p>Error al cargar los detalles del libro.</p>";
        }
    }

fetchBookDetails();

/*SECCION FOOTER  */
const footer=document.querySelector(".footer");
createFooter("../pages/books.html","../pages/contact.html",footer); //-------------------------INCORPORAR LINKS