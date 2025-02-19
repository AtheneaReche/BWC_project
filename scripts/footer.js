export function createFooter(urlBooks,urlContact, footer){
    const divGeneral=document.createElement("div");
    divGeneral.classList.add("max-width__footer");

    const nav=document.createElement("nav");
    nav.classList.add("footer__nav");
    nav.innerHTML=`
            <ul class="footer__nav-list">
                <li><button class="footer__btn footer__nav-list__item">Aviso legal de privacidad y cookies</button></li>
                <li><a href="${urlBooks}" class="footer__nav-list__item">Libros</a></li>
                <li><a href="${urlContact}" class="footer__nav-list__item">¡Contacta con nosotros!</a></li>
            </ul>
    `;

    const footerLogo=document.createElement("div");
    footerLogo.classList.add("footer__copyright","c_Beige");
    footerLogo.innerHTML=`<p>@Copyright Book Worms Club</p>
    <p>Todos los derechos reservados</p>`;

    const divFooterModal=document.createElement("div");
    divFooterModal.classList.add("footer__modal","d-none");
    divFooterModal.setAttribute("role", "dialog"); 
    getTerminesYConditions(divFooterModal);

    divGeneral.append(nav,footerLogo,divFooterModal);
    footer.appendChild(divGeneral);

    const btnFooter=document.querySelector(".footer__btn");
    const btnModalFooter=document.querySelector(".footer__modal-btn");
    btnFooter.addEventListener("click",()=>{
        divFooterModal.classList.remove("d-none");
        divFooterModal.classList.add("d-modal")
    })
    btnModalFooter.addEventListener("click", ()=> {
            divFooterModal.classList.add("d-none");
            divFooterModal.classList.remove("d-modal");})
}

function getTerminesYConditions(container){
    container.innerHTML=`
        <div class="footer__modal-content">
        <h2 class="footer__modal-title c_Brown">Aviso de Privacidad y Uso de Cookies</h2>
        <p>Bienvenido a Book Worms Club, un sitio dedicado a los amantes de la lectura. La privacidad de nuestros visitantes es muy importante para nosotros.</p>
        <h3 class="footer__modal-questions c_Brown">¿Qué datos recopilamos?</h3>
        <p>Al visitar nuestro sitio, podemos recopilar:</p>
        <ul class="modal-questions__list">
            <li>Información de navegación (IP, navegador, dispositivo).</li>
            <li>Datos personales que proporcionas en formularios (nombre, correo electrónico, preferencias de lectura).</li>
        </ul>

        <h3 class="footer__modal-questions c_Brown">¿Para qué usamos estos datos?</h3>
        <p>Los datos recopilados se utilizan para:</p>
        <ul class="modal-questions__list">
            <li>Mejorar tu experiencia en nuestra página web.</li>
            <li>Enviarte recomendaciones de libros y novedades.</li>
            <li>Responder a consultas o comentarios.</li>
        </ul>

        <h3 class="footer__modal-questions c_Brown">Uso de Cookies</h3>
        <p>Este sitio utiliza cookies para:</p>
        <ul class="modal-questions__list">
            <li>Recordar tus preferencias de navegación.</li>
            <li>Analizar el tráfico y mejorar nuestros servicios.</li>
            <li>Mostrarte contenido personalizado.</li>
        </ul>

        <h3 class="footer__modal-questions c_Brown">¿Con quién compartimos la información?</h3>
        <p>No compartimos ni vendemos tu información a terceros, salvo que sea requerido por ley.</p>

        <h3 class="footer__modal-questions c_Brown">¿Cómo puedes controlar tus datos?</h3>
        <p>Puedes solicitarnos la eliminación o modificación de tus datos enviándonos un correo a: BookWormsClub@gmail.com</p>

        <div class=footer__modal-container-btn><button class="footer__modal-btn c_Brown">ACEPTAR</button></div>
    </div>`
}


