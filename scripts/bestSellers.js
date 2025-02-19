import { createFooter } from "./footer.js";

const bestSellers = [
    "Cien años de soledad",
    "Don Quijote de la Mancha",
    "Orgullo y prejuicio",
    "1984",
    "Matar a un ruiseñor",
    "El gran Gatsby",
    "Los juegos del hambre",
    "El código Da Vinci",
    "Crimen y castigo",
    "La Odisea"
];

async function fetchBookInfo(title) {
    const response = await fetch(`https://openlibrary.org/search.json?title=${encodeURIComponent(title)}`);
    const data = await response.json();
    console.log(data.docs[0])
    return data.docs[0] || null;
}

function createBookCard(book) {
    const card = document.createElement("div");
    card.className = "bestSellers__book-card";

    const img = document.createElement("img");
    img.src = book && book.cover_i 
        ? `https://covers.openlibrary.org/b/id/${book.cover_i}-M.jpg`
        : "https://placehold.co/128x200?text=No+Image"; 

    img.alt = book ? book.title : "Imagen no disponible";

    const title = document.createElement("h2");
    title.textContent = book ? book.title : "Título no disponible";
    const cantAuthor=book.author_name && book.author_name.length > 1 ? "Autores" : "Autor";
    const author = document.createElement("p");
    author.textContent = book && book.author_name ? `${cantAuthor}: ${book.author_name.join(", ")}` : "Autor desconocido";

    card.appendChild(img);
    card.appendChild(title);
    card.appendChild(author);

    return card;
}

async function loadBooks() {
    const grid = document.querySelector(".bestSellers__books");
    for (const title of bestSellers) {
        const book = await fetchBookInfo(title);
        const card = createBookCard(book);
        grid.appendChild(card);
    }
}

loadBooks();

/*SECCION FOOTER  */
const footer=document.querySelector(".footer");
createFooter("./libros.html","../pages/contact.html",footer);