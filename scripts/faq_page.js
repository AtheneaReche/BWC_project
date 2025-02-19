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

                    <div class="accordion-item">
                        <h2 class="accordion-header">
                        <button class="text accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                            ¿Debo terminar un libro para empezar el siguiente o puedo llevar dos a la vez?
                        </button>
                        </h2>
                        <div id="collapseThree" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
                        <div class="c_Orange accordion-body">
                            <strong>This is the second item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
                        </div>
                        </div>
                    </div>
                    <div class="accordion-item">
                        <h2 class="accordion-header">
                        <button class="text accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFour" aria-expanded="false" aria-controls="collapseFour">
                            ¿Debo terminar un libro para empezar el siguiente o puedo llevar dos a la vez?
                        </button>
                        </h2>
                        <div id="collapseFour" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
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
/*SECCION FOOTER  */
const footer=document.querySelector(".footer");
createFooter("../pages/libros.html","../pages/contact.html",footer); //-------------------------INCORPORAR LINKS
    /** END FAQ SECTION */