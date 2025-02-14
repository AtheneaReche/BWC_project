

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

/* FIN SECCION RECOMENDADOS */

/* SECCION NOVEDADES */
const sectionNews=document.querySelector(".section__news");
const divHeadingNews= document.createElement("div");
    divHeadingNews.classList.add("news__heading");
    divHeadingNews.innerHTML=`
        <h3 class="subtitle c_Brown news__heading-title">Novedades</h3>
        <a href="" class="news__heading-more c_Orange">Ver más</a>`
sectionNews.appendChild(divHeadingNews)

const newsTitles=[
    {
        nombre:"Nuevos títulos que están arrasando este Febrero 2025",
        img:"./images/novedades.jpg"
    },
    {
        nombre:"Títulos confirmados para Marzo 2025",
        img:"./images/confirmados.jpg"
    }
]

/*-------------------------------INCORPORAR LINK A PAGINA NOVEDADES  */
function createNewsSection(array){
    const div=document.createElement("div");
    div.classList.add("news__container-titles");
    array.forEach(element => {
        div.innerHTML+=`
        <div class="news__options">
                <div class="news__image">
                    <div class="news__overlay">
                        <a href=""><h3 class="news__title ">${element.nombre}</h3> </a>
                    </div>
                </div>
        </div>`
    });

    const divImages=div.querySelectorAll(".news__image");
    divImages.forEach((image,index)=>{
        image.style.backgroundImage=`url('${newsTitles[index].img}')`;
    })
    sectionNews.appendChild(div);
    
}

createNewsSection(newsTitles)
