import { createFooter } from "./footer.js";
/* FAQ PAGE*/
      /** HERO SECTION */
      const title = [
        //Title, subtitle and button
        {
            name: "F.A.Q"
        }
    ]
    const sectionHero = document.querySelector('.section__hero');

    function heroItems (array) {
        let heroDiv = document.createElement("div");
            heroDiv.classList.add("hero__content");

            array.forEach(element => {
                heroDiv.innerHTML += `
                    <div class = "hero__subtitle">
                        <h1 class = "title subtitle__padding c_Yellow">${element.name}</h1>
                    </div>
                  
                    `
            })
            sectionHero.appendChild(heroDiv);
    }
    heroItems(title);
    /** END HERO SECTION */

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

                    <div class="accordion-item">
                        <h2 class="accordion-header">
                        <button class="text accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                            ¿Deben ser todos los títulos de un mismo género?
                        </button>
                        </h2>
                        <div id="collapseThree" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
                        <div class="c_Orange accordion-body">
                            <strong>¡Para nada!</strong> Puedes elegir los géneros que quieras, solo cuenta el número de títulos leídos en este evento. Pero ten presente que cuando termines el título deberás hacer la correspondiente reseña en el canal de discord adecuado.
                        </div>
                        </div>
                    </div>
                    <div class="accordion-item">
                        <h2 class="accordion-header">
                        <button class="text accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFour" aria-expanded="false" aria-controls="collapseFour">
                            ¿Cuénta el libro si lo he leído fuera de plazo?
                        </button>
                        </h2>
                        <div id="collapseFour" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
                        <div class="c_Orange accordion-body">
                            <strong>No en este caso.</strong> Queremos que con este evento los participantes se desafíen así mismos y logren alcanzar sus objetivos de lectura dentro de un entorno colectivo que anime y promueva a conseguirlo.
                        </div>
                        </div>
                    </div>
            </div>
            `
        })
        sectionFAQ.appendChild(faqDiv);
    }
    faqItems(faq);
/*SECCION FOOTER  */
const footer=document.querySelector(".footer");
createFooter("../pages/books.html","../pages/contact.html",footer); //-------------------------INCORPORAR LINKS
    /** END FAQ SECTION */