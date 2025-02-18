import { createFooter } from "./footer.js";
/* GENRES PAGE*/
 /** GENRES SELECTION */
    const categories = [
        {
            name: "Romance",
            img:"../images/romance.png",
            dataGenre: "romance"
        },
        {
            name: "Histórico",
            img:"../images/history.png",
            dataGenre: "historico"
        },
        {
            name: "Cómic y Novela Gráfica",
            img:"../images/best-comics.png",
            dataGenre: "comic y novela grafica",
            longName:"true"
        },
        {
            name: "Fantasía y Ficción",
            img:"../images/best-fiction.png",
            dataGenre: "fantasia y ficcion",
            longName:"true"
        },
        {
            name: "SCFI",
            img:"../images/SCFI.png",
            dataGenre: "scfi"
        },
        {
            name: "Thriller",
            img:"../images/thriller.png",
            dataGenre: "thriller"
        },
        {
            name: "Aventuras",
            img:"../images/adventures.png",
            dataGenre: "aventuras"
        },
        {
            name: "Contemporáneo",
            img:"../images/contem.png",
            dataGenre: "contemporane",
            longName:"true"
        },
        {
            name: "Terror",
            img:"../images/ghost.png",
            dataGenre: "terror"
        },
        {
            name: "Poesía",
            img:"../images/poetry.png",
            dataGenre: "poesia"
        },
        {
            name: "Juvenil",
            img:"../images/young-adult.png",
            dataGenre: "juvenil"
        },
        {
            name: "Infantil",
            img:"../images/kids.png",
            dataGenre: "infantil"
        },
        {
            name: "Biografías",
            img:"../images/bio.png",
            dataGenre: "biografias"
        },
        {
            name: "Cocina",
            img:"../images/cook.png",
            dataGenre: "cocina"
        }
    ]

    const genresSection = document.querySelector(".section__genres");
          // Title
    const genresTitle = document.createElement("h2");
          genresTitle.textContent = "Géneros";
          genresTitle.classList.add("subtitle", "c_Brown");

    function genresItems (array) {
        let genresDiv = document.createElement("div");
            genresDiv.classList.add("genres__content");

            array.forEach(element => {
                const longNameClass = element.longName ? "genres__long_names" : "";
                genresDiv.innerHTML += `
                        <div class = "genres" data-genre = "${element.dataGenre}">
                            <img class = "genres_icon" src = "${element.img}" alt = "${element.name}">
                            <div class = "genres_name ${longNameClass}"> ${element.name} </div>
                        </div>
                `
            })
            genresSection.appendChild(genresDiv);
    }
    genresSection.appendChild(genresTitle);
    genresItems(categories);
 /** END GENRES SELECTION */

 /** CARDS SECTION */
    // Books cards
    const booksDiv  = document.createElement("div");
          booksDiv.classList.add("books_cards");

    const booksContainer = document.querySelector(".section__genres_cards");

    document.querySelectorAll(".genres").forEach(button => {
        button.addEventListener("click", () => {
            const genre = button.getAttribute("data-genre");
            fetchBooksByGenre(genre);
        });
    });

    async function fetchBooksByGenre(genre) {
        booksContainer.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><circle cx="4" cy="12" r="3" fill="#E1A8A8"><animate id="svgSpinners3DotsFade0" fill="freeze" attributeName="opacity" begin="0;svgSpinners3DotsFade1.end-0.25s" dur="0.75s" values="1;0.2"/></circle><circle cx="12" cy="12" r="3" fill="#E1A8A8" opacity="0.4"><animate fill="freeze" attributeName="opacity" begin="svgSpinners3DotsFade0.begin+0.15s" dur="0.75s" values="1;0.2"/></circle><circle cx="20" cy="12" r="3" fill="#E1A8A8" opacity="0.3"><animate id="svgSpinners3DotsFade1" fill="freeze" attributeName="opacity" begin="svgSpinners3DotsFade0.begin+0.3s" dur="0.75s" values="1;0.2"/></circle></svg>';

        try {
            const response = await fetch(`https://openlibrary.org/subjects/${genre}.json?limit=10`);
            const data = await response.json();
            
            if (!data.works || data.works.length === 0) {
                booksContainer.innerHTML = "<p>No se encontraron libros de este género.</p>";
                return;
            }

            displayBooks(data.works); 
        } catch (error) {
            booksContainer.innerHTML = "<p>Ha habido un error al cargar los libros. Por favor inténtalo de nuevo.</p>";
            console.error("Error al obtener los libros:", error);
        }
    }

    
    function displayBooks(books) {
        booksContainer.innerHTML = ""; 
        booksDiv.innerHTML = "";
        booksContainer.appendChild(booksDiv);

        books.forEach(book => {
            const bookCard = document.createElement("div");
            bookCard.classList.add("card_book");

            bookCard.innerHTML = `
                <img src="https://covers.openlibrary.org/b/id/${book.cover_id}-M.jpg" alt="${book.title}">
                <h3 class = "text">${book.title}</h3>
                <p class = "c_Brown">${book.authors ? book.authors[0].name : "Autor desconocido"}</p>
            `;

            booksDiv.appendChild(bookCard);
        });
    }
 /** END CARDS SECTION */
/* END GENRES PAGE*/
/*SECCION FOOTER  */
const footer=document.querySelector(".footer");
createFooter("url","url",footer); //-------------------------INCORPORAR LINKS