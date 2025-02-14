

/* Inicio Segunda parte de la Home */

/* SECCION RECOMENDADOS */
const recommendeds=[
    {
        nombre:"Best Sellers",
        nombreDeskopt:"Best <br> Sellers",
        img:"./images/best-sellers.png",
        url:"Agregar Link"
    },
    {
        nombre:"Mejores de Ficción",
        nombreDeskopt:"Mejores de<br>Ficción",
        img:"./images/best-fiction.png",
        url:"Agregar Link"
    },
    {
        nombre:"Mejores Cómics y Novela Gráfica",
        nombreDeskopt:"Mejores <br>Cómics",
        img:"./images/best-comics.png",
        url:"Agregar Link"
    }
]

const sectionRecommendeds=document.querySelector(".section__recommendeds");

const recommendedsTitle=document.createElement("h2");
recommendedsTitle.textContent="Recomendados";
recommendedsTitle.classList.add("subtitle","c_Brown");

function createRecommendedsItems(array){
    let div=document.createElement("div");
    div.classList.add("recommendeds");
    array.forEach(element => {
        div.innerHTML+=`
        <a class="recommendeds__options" href="${element.url}">
                <h3 class="recommendeds__title c_Brown">${element.nombreDeskopt} </h3>
                <div class="recommendeds__image">
                    <img src="${element.img}" alt="${element.nombre}">
                </div>
        </a>`
    });
    sectionRecommendeds.appendChild(div)
}


sectionRecommendeds.appendChild(recommendedsTitle)
createRecommendedsItems(recommendeds)

/* SECCION NOVEDADES */
const sectionNews=document.querySelector(".section__news");
