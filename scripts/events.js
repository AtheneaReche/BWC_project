import { createFooter } from "./footer.js";
/* EVENTS PAGE*/
    /** HERO SECTION */
    const title = [
        //Title, subtitle and button
        {
            name: "Evento de lectura",
            date: "21 de Enero ~ 21 de Febrero",
            buttonAttentionCall: "¡Apúntate!",
            url: "../pages/events.html",
            img: "../images/hero_event_image.png"
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

    /** WHAT IS SECTION */
    const whatisSubtitle = [
        {
            name: "¿En qué consiste?",
            text: "En este evento literario online deberás retarte a ti mismo \
            para leer <b>al menos 5 libros</b> en el periodo de tiempo establecido.<br>\
            Cada participante elige títulos dentro de distintas categorías y comparte su\
            experiencia en el canal de discord del evento.\
            Al finalizar el desafío, se organizará un debate virtuales y sorteos exclusivos para \
            los participantes.\
            Este evento busca motivar la lectura y conectar a entusiastas de los \
            libros en un espacio dinámico y enriquecedor. ",
        }
    ]

    const sectionWhatis = document.querySelector(".section__whatis");

    function whatisItems (array) {
        let whatisDiv = document.createElement("div");
            whatisDiv.classList.add("whatis__content");

            array.forEach(element => {
                whatisDiv.innerHTML += `
                    <div class = "whatis__subtitle">
                        <h3 class = "subtitle c_Orange subtitle__padding">${element.name}</h3>
                        <p class = "text c_Brown subtitle__padding">${element.text}</p>
                    </div>
                `
            })
            sectionWhatis.appendChild(whatisDiv);
    }
    whatisItems(whatisSubtitle)
    /** END WHAT IS SECTION */

    /** FAQ SECTION */
    const faq = [
        {
            name: "F.A.Q"
        }
    ]
    const sectionFAQ = document.querySelector(".section__faq");

    function faqItems (array){
        let faqDiv = document.createElement("div");
            faqDiv.classList.add("faq__content");

        array.forEach(element => {
            faqDiv.innerHTML += `
                <div class = "faq__content_title">
                    <h3 class = "subtitle c_Orange subtitle__padding">${element.name}</h3>
                    <a href = "../pages/faq_page.html" class = "faq__more c_Orange">Ver más</a>
                </div>

               <div class="accordion" id="accordionExample">
                    <div class="accordion-item">
                        <h2 class="accordion-header">
                        <button class="text accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="false" aria-controls="collapseOne">
                            ¿Me puedo apuntar si ha empezado?
                        </button>
                        </h2>
                        <div id="collapseOne" class="accordion-collapse collapse show" data-bs-parent="#accordionExample">
                        <div class="c_Orange accordion-body">
                            <strong>¡Por supuesto!</strong> Siempre y cuando tengas en cuenta que deberás leer al menos 5 libros para clasificarte y poder acceder a la categoría de premios.
                        </div>
                        </div>
                    </div>

                    <div class="accordion-item">
                        <h2 class="accordion-header">
                        <button class="text accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                            ¿Debo terminar un libro para empezar el siguiente o puedo llevar dos a la vez?
                        </button>
                        </h2>
                        <div id="collapseTwo" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
                        <div class="c_Orange accordion-body">
                            <strong>Depende de ti.</strong> Si te sientes cómodo/a llevando dos títulos a la vez, ¡adelante! ¡Tú pones tus propias reglas!
                        </div>
                        </div>
                    </div>
            </div>
            `
        })
        sectionFAQ.appendChild(faqDiv);
    }
    faqItems(faq);
    /** END FAQ SECTION */
/*SECCION FOOTER  */
const footer=document.querySelector(".footer");
createFooter("../pages/libros.html","../pages/contact.html",footer); //-------------------------INCORPORAR LINKS
/* END EVENTS PAGE*/