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
            text: " Lorem ipsum dolor sit amet, consectetur adipiscing elit.<br>\
            In finibus  bibendum sapien, ac congue sem consequat et.<br>\
            Vestibulum ac ultrices  turpis. Suspendisse blandit sem ligula, sed lobortis metus elementum eu.<br>\
            Proin vitae porttitor orci. Proin quis lacus dapibus mi pharetra  mollis.<br>\
            Nunc mauris sem, porttitor sed ante eget, ullamcorper commodo  ex.<br>\
            Integer porttitor aliquam sapien, non aliquam leo elementum nec.<br>\
            Cras in est vitae orci varius ullamcorper ut quis ligula.<br>\
            Donec  ullamcorper justo diam, nec tempor ante pellentesque in. ",
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
                            <strong>This is the first item's accordion body.</strong> It is shown by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
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
                            <strong>This is the second item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
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