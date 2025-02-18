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


































const footer=document.querySelector(".footer");
createFooter("url","url",footer); //-------------------------INCORPORAR LINKS