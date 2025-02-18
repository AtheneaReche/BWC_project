import { createFooter } from "./footer.js"

const booksContainer = document.getElementById("booksContainer")
const authorContainer = document.getElementById("authorContainer")

fetch("https://openlibrary.org/authors/OL1394865A.json")
.then(res => res.json())
.then(data => imprimirAutor(data))

fetch("https://openlibrary.org/authors/OL1394865A/works.json?limit=10")
.then(res => res.json())
.then(data => imprimirLibros(data))




function imprimirAutor(datos){
    authorContainer.innerHTML = `<img src="../images/brandon.png" alt="Brandon" class="author__img">
                                <div class="author__info-container">
                                    <p class="author__info-date text">Fecha de nacimiento: ${datos.birth_date}</p>
                                    <p class="author__info-bio text">Biografía: ${datos.bio}</p>
                                </div>`
    
}

function imprimirLibros(datos) {
    booksContainer.innerHTML = ""

    datos.entries.forEach(element => {
        fetch(`https://openlibrary.org/search.json?title=${encodeURIComponent(element.title)}`)
        .then(res => res.json())
        .then(data => {
            if (data.docs.length > 0) { // Verifica si hay resultados
                let coverID = data.docs[0].cover_i
                let coverURL = coverID 
                    ? `https://covers.openlibrary.org/b/id/${coverID}-M.jpg` 
                    : "https://www.shutterstock.com/image-vector/image-icon-600nw-211642900.jpg" // Imagen por defecto

                booksContainer.innerHTML += `
                    <div class="card_book">
                        <img src="${coverURL}" alt="${element.title}">
                        <h3 class="text">${element.title}</h3>
                    </div>
                `
            }
        })
        .catch(error => console.error("Error al obtener datos:", error))
    });
}
































const footer=document.querySelector(".footer");
createFooter("url","url",footer); //-------------------------INCORPORAR LINKS