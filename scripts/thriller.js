import { createFooter } from "./footer.js"

const booksContainer = document.getElementById("booksContainer")
const authorContainer = document.getElementById("authorContainer")

fetch("https://openlibrary.org/authors/OL27695A.json")
.then(res => res.json())
.then(data => imprimirAutor(data))

fetch("https://openlibrary.org/authors/OL27695A/works.json?limit=10")
.then(res => res.json())
.then(data => imprimirLibros(data))




function imprimirAutor(datos){
    authorContainer.innerHTML = `<img src="../images/agatha.jpg" alt="Brandon" class="author__img">
                                <div class="author__info-container">
                                    <p class="author__info-date text">${datos.birth_date} - ${datos.death_date}</p>
                                    <p class="author__info-bio text">Biografía: I was born into a happy family and had a childhood filled with imagination. I learned at home, surrounded by books and stories. During the war, I worked as a nurse and discovered my fascination with poisons, which I later used in my stories.

My first novel, The Mysterious Affair at Styles, brought Poirot to life and marked the beginning of my career. Writing has always been my refuge, even in difficult times, such as my disappearance in 1926, which I prefer not to speak about.

With Max, my second husband, I traveled through the Middle East, finding inspiration in every corner. I have lived among words and mysteries, and I could not have asked for a better life.</p>
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
createFooter("../pages/libros.html","../pages/contact.html",footer); //-------------------------INCORPORAR LINKS