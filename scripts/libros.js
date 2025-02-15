/* Seleccion en html */
const sectionSearch=document.querySelector(".section__search");
const sectionSearchResults=document.querySelector(".section__search-results");
const sectionTips=document.querySelector(".section__tips");

/*Seccion de BUSQUEDA*/
function createSearch(){
    sectionSearch.innerHTML=`
                <h1 class="section__search-title subtitle c_Brown">Busca un libro</h1>
                <div class="search__container">
                    <div class="search__container-inputs">
                        <input type="text" class="search__container-input search__container-input_name" placeholder="Nombre del libro">
                        <input type="text" class="search__container-input search__container-input_author" placeholder="Nombre del autor">
                    </div>
                    <button class="c_Beige search_button">Buscar</button>
                </div>`
    const searchBtn=document.querySelector(".search_button");
   
    searchBtn.addEventListener("click",()=>{
        sectionTips.classList.add("d-none");
        loadingData(sectionSearchResults)
        /* sectionSearchResults.innerHTML=`BUSCANDO` */
        const searchByName=document.querySelector(".search__container-input_name").value;
        const searchByAuthor=document.querySelector(".search__container-input_author").value;
        searchBook(searchByName,searchByAuthor);
    })
}

function searchBook(name,author){
    let url = "https://openlibrary.org/search.json?";

    if(name || author){
        if (name && author) {
                url += `title=${encodeURIComponent(name)}&author=${encodeURIComponent(author)}`;
        } else if (name) {
                url += `title=${encodeURIComponent(name)}`;
        } else{
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
                    console.log(data);
                    sectionSearchResults.classList.remove("loading_data")
                    sectionSearchResults.innerHTML=" "
                    data.docs.forEach(libro=>{createResultsCarts(libro,sectionSearchResults)});
                })
                .catch(error => console.error('Error al obtener los datos:', error));
}

function createResultsCarts(libro,seccion){
        let cantAutor= libro.author_name ? (libro.author_name.length > 1 ? "Autores" : "Autor") : "Autor desconocido";
        let autor;
        if (libro.author_name && libro.author_name.length > 3) {
            autor = libro.author_name.slice(0, 3).join(", ") + "..."; 
        } else {
            autor = libro.author_name ? libro.author_name.join(", ") : "Autor desconocido";
        }
        let imgLibro;
        if(libro.cover_i==undefined){
            imgLibro="../images/novedades.jpg"
        }else{
            imgLibro=`https://covers.openlibrary.org/b/id/${libro.cover_i}-M.jpg`
        }
        const article=document.createElement("article");
        article.classList.add("search__result-book")
        article.innerHTML = `
                    <div class=search__result-book_inf>
                    <h3 class="result-book_inf-title c_Brown">${libro.title}</h3>
                    <p><strong>${cantAutor}:</strong> ${autor}</p>
                    <p><strong>Año de Publicación:</strong> ${libro.first_publish_year || 'N/A'}</p>
                    </div>
                    <div class="search__result-book_img">
                    <img src="${imgLibro}" alt="Portada del libro" onerror="this.style.display='none'"> </div>
                `;
            seccion.appendChild(article)
}

/* Seccion Recomendado */
function searchTip(){
    sectionTips.classList.add("min-height")
    const title=document.createElement("h2");
    title.classList.add("section__tip-title","c_Orange")
    title.textContent="Nuestra sugerencia";
    const div=document.createElement("div");
    loadingData(div)
    sectionTips.append(title,div)
    let randomNumber = Math.floor(Math.random() * 971); 
    let url = `https://openlibrary.org/search.json?q=book&limit=1&offset=${randomNumber}`;
    fetch(url)
    .then(response => response.json())
    .then(data => {
        console.log(data.docs)
        return data.docs;})
    .then(docs=>{
        div.remove()
        sectionTips.classList.remove("min-height")
        createResultsCarts(docs[0],sectionTips)
    })
}

function loadingData(seccion){
    seccion.classList.add("loading_data");
    seccion.innerHTML="Realizando busqueda. Puede tardar unos segundos.."
}

createSearch();
searchTip();