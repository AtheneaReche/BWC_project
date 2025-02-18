import { createFooter } from "./footer.js"

const booksContainer = document.getElementById("booksContainer")

let generos = ["fiction", "non-fiction", "fantasy", "science-fiction", "mystery", "romance", "horror", "biography", "history", "poetry", "drama", "adventure", "children", "young-adult", "essay", "autobiography", "crime", "thriller", "classics", "humor"];

let generoElegido = generos[Math.floor(Math.random() * 20)]

fetch(`https://openlibrary.org/subjects/${generoElegido}.json?limit=10`)
.then(res => res.json())
.then(data => imprimirLibros(data))


function imprimirLibros(datos) { 
    booksContainer.innerHTML = ""

    datos.works.forEach(element => {
        booksContainer.innerHTML += `
                    <div class="card_book">
                        <img src="https://covers.openlibrary.org/b/id/${element.cover_id}-M.jpg" alt="${element.title}">
                        <h3 class="text">${element.title}</h3>
                    </div>
                `
    });
    

}    
































const footer=document.querySelector(".footer");
createFooter("url","url",footer); //-------------------------INCORPORAR LINKS