
 import { createFooter } from "./footer.js";
/* HOME'S FIRST PART */
    /** HERO SECTION */
        const title = [
            //Title, subtitle and button
            {
                name: "Evento de lectura",
                date: "21 de Enero ~ 21 de Febrero",
                buttonAttentionCall: "¡Apúntate!",
                url: "../pages/events.html",
                img: "./images/hero_event_image.png"
            }
        ]
        const sectionHero = document.querySelector('.section__hero');

        function heroItems (array) {
            let heroDiv = document.createElement("div");
                heroDiv.classList.add("hero__content");

                array.forEach(element => {
                    heroDiv.innerHTML += `
                        <div class = "hero__subtitle">
                            <h1 class = "title c_Yellow">${element.name}</h1>
                            <h2 class = "subtitle subtitle__padding c_Orange"> ${element.date} </h2>
                            <button class = "general_button" onclick = "location.href = '../pages/events.html'"> ${element.buttonAttentionCall} </button>
                        </div>
                        <div class = "hero__image">
                            <img src = "${element.img}" alt = "${element.name}">
                        </div>
                        `
                })
                sectionHero.appendChild(heroDiv);
        }
        heroItems(title);
    /** END HERO SECTION */
/* END FIRST PART */

/* Inicio Segunda parte de la Home */

/* SECCION RECOMENDADOS */
const recommendeds=[
    {
        nombre:"Best Sellers",
        nombreDeskopt:"Best <br> Sellers",
        img:"./images/best-sellers.png",
        url:"../pages/bestSellers.html"
    },
    {
        nombre:"Brandon Sanderson",
        nombreDeskopt:"Brandon <br>Sanderson",
        img:"./images/best-fantasy.png",
        url:"../pages/fantasy.html"
    },
    {
        nombre:"Agatha Christie",
        nombreDeskopt:"Agatha <br>Christie",
        img:"./images/best-thriller.png",
        url:"../pages/thriller.html"
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
        <a href="./pages/news.html" class="news__heading-more c_Orange">Ver más</a>`
sectionNews.appendChild(divHeadingNews)

const newsTitles=[
    {
        nombre:"Nuevos títulos que están arrasando este Febrero 2025",
        img:"./images/novedades.jpg",
        link: "../pages/news.html"
    },
    {
        nombre:"Títulos confirmados para Marzo 2025",
        img:"./images/confirmados.jpg",
        link: "../pages/news.html"
    }
]

function createNewsSection(array){
    const div=document.createElement("div");
    div.classList.add("news__container-titles");
    array.forEach(element => {
        div.innerHTML+=`
        <div class="news__options">
                <div class="news__image">
                    <div class="news__overlay">
                        <a href="${element.link}"><h3 class="news__title ">${element.nombre}</h3> </a>
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
/* FIN SECCION  NOVEDADES */

/*SECCION FOOTER  */
const footer=document.querySelector(".footer");
createFooter("pages/books.html","pages/contact.html",footer); 