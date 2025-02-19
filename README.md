EBIS Business Techschool

# Máster en Full Stack Developer

## Proyecto Final de Módulo I

**Athenea Reche Enriquez**  
**Karen Belen Mari**  
**Guillermo Pérez Mier**  

---

## Breve descripción del proyecto.
El proyecto consiste en una web sencilla que usa una API de libros en la que el usuario puede explorar una amplia selección de la biblioteca que contiene en tiempo real, realizar búsquedas, ver recomendaciones, así como apuntarse a un evento literario ficticio en línea y contactar con los organizadores.

## Objetivo del desarrollo.
Este proyecto tiene como objetivo utilizar una API de libros, en este caso se ha usado Open Library, con la que los desarrolladores permiten al usuario realizar búsquedas de títulos literarios y/o por autor en tiempo real. Consultar el libro sugerido cada vez que se recarga la página. Realizar una búsqueda de libros por género literario así como acceder a secciones tales como “Novedades” o “Autor destacado” donde el usuario puede ver una selección de títulos filtrados por la selección correspondiente.

Además de esto se ha creado una página que recrea un evento ficticio de un evento literario online donde en la página principal hay un botón con un call to action promoviendo la interacción del usuario que deriva a este a la página en cuestión del evento donde puede ver información sobre el evento, así como una pequeña preview de preguntas frecuentes del evento de las cuales se puede saber más si el usuario hace click en el link “ver más” el cual lo deriva a una página con el total de preguntas frecuentes sobre el evento.

Finalmente el usuario puede acceder a la página de contacto donde puede rellenar un formulario para contactar con los desarrolladores y/o organizadores del evento así como consultar la política de privacidad de la web accediendo desde el footer existente en todas las páginas de la web.

---

## Funcionalidad de la web.
La web ofrece a los usuarios la posibilidad de interactuar con una biblioteca online, permitiéndoles realizar búsquedas y consultas específicas a través de elementos interactivos diseñados por los desarrolladores.

### Búsqueda de libros por título y/o autor:
- **Entrada:** El usuario puede buscar un libro en la biblioteca de la API mediante el buscador de la web por título y/o por autor.
- **Salida:** El usuario obtiene la información del libro con una imagen como portada, el título del libro, el autor y el año de publicación. Además de un botón con el que accede a la información anterior más una breve descripción del libro seleccionado.

### Recomendación de libro:
- **Entrada:** El usuario puede ver un libro generado al azar en la sección de libro recomendado.
- **Salida:** El usuario puede acceder al libro recomendado en cuestión y ver toda su información mediante un acceso por botón.

### Búsqueda por género:
- **Entrada:** El usuario mediante interacción con botones puede seleccionar que aparezca una selección de libros de un género concreto.
- **Salida:** Al pulsar sobre un botón de la sección de géneros, el usuario ve en pantalla una selección de títulos filtrados según el género elegido.

### Consulta sobre un autor de género:
- **Entrada:** El usuario puede conocer al autor, un poco sobre su vida y varias de sus obras más importantes.
- **Salida:** El usuario ve una selección de libros filtrada por dicho autor, así como su título y portada correspondientes.

### Consulta de selecciones (Novedades, Best Sellers):
- **Entrada:** El usuario puede ver las obras más relevantes de la historia en el apartado Best Sellers, así como una lista de libros cuyo género es aleatorio cada vez que recarga la página en el apartado Novedades.
- **Salida:** El usuario puede ver una lista de libros filtrados por el género que le haya tocado en esa ocasión, acompañados por su título y su portada.

### Recogida de datos mediante formulario de contacto:
- **Entrada:** El usuario puede mandar un formulario con un mensaje de recomendación, avisando de algún error o de lo que quiera.
- **Salida:** Al pulsar el botón de “enviar” no ocurrirá nada puesto que para este proyecto no se requieren los conocimientos necesarios.

---

## Estándares de desarrollo.
- Las páginas no deben tardar más de 2s en cargar, salvo las secciones que cargan los libros mediante petición a la API, que puede tardar hasta 5s en cargar.
- La web debe ser lo más responsive posible dentro de las posibilidades en este desarrollo.
- La web funciona en la mayoría de navegadores.
- Para pantallas de 768px hacia abajo, debe mostrarse el menú colapsable de la barra de navegación.
- Todos los links tienen que estar funcionando.
- Los scripts y demás archivos tienen comentarios relevantes que ayuden a la comprensión del código.

---

## Lenguajes de programación usados.
Para este proyecto se ha usado mayoritariamente **JavaScript, CSS y HTML**. Se han creado algunas estructuras HTML desde JavaScript mediante funciones y arrays de objetos para crear el contenido de forma dinámica.

## Frameworks y librerías.
Como framework se ha usado **Bootstrap** para la creación de bloques de acordeón (F.A.Q.s) y para el formulario de contacto.

## Control de versiones.
Para trabajar en equipo hemos usado **Trello, Git y Github**. En Trello hemos creado las tareas necesarias para la realización del proyecto y cada desarrollador se ha asignado las correspondientes siguiendo el criterio de que cada integrante debía realizar 3 páginas adicionales a las obligatorias que requería el proyecto.

Se creó un repositorio en **GitHub** y cada desarrollador fue creando partes de la web en una rama distinta a la rama principal, a través de pequeños commits cada uno fue añadiendo nuevas actualizaciones hasta que la funcionalidad principal estaba lista.

Para ello se realizaba el correspondiente **pull request** en GitHub, los demás revisaban y hacían merge de la rama a la principal si lo consideraban correcto.

Una vez terminada la tarea que cada uno estaba desarrollando se actualizaba las tareas de Trello.

---

## Descripción de la organización del código.
El proyecto está organizado en carpetas. Salvo la página de `index.html` que se encuentra en la carpeta raíz del proyecto. Los archivos se organizan de la siguiente manera:

- **fonts**: contiene el archivo `.otf` de la tipografía usada en los títulos de la web.
- **images**: contiene tanto las imágenes utilizadas en diversas secciones de la web, así como los iconos utilizados descargados de la librería Iconify.
- **pages**: contiene las páginas `.html` del proyecto.
- **scripts**: contiene los archivos `.js` que se utilizan en diversas páginas del proyecto. Algunos de estos son exclusivos de unas páginas y otros se utilizan de forma recurrente (ej. `nav.js` o `footer.js`).
- **styles**: contiene los archivos `.css` del proyecto. Al igual que los archivos `.js`, existen algunos utilizados solo de forma exclusiva para ciertas páginas y principalmente `general.css` es usado en varias páginas del proyecto para los estilos generales de la web.

---

## Explicación de los módulos principales del proyecto.

### **Index:**
Esta página utiliza varias funciones para mostrar los elementos en el HTML del proyecto. Utiliza arrays de objetos que se le pasa a las funciones como argumento, para enlazar e insertar diferentes secciones en el index. Y que se le dan una apariencia coherente con diferentes archivos CSS a los que se les llama desde el archivo `home.js`.

### **Libros:**
La sección incluye una sugerencia aleatoria que se actualiza con cada recarga de la página. Además, permite filtrar los libros por autor o título. Si no se ingresa ningún criterio de búsqueda, se mostrará una selección aleatoria de libros. Para obtener más información sobre un libro, se puede hacer clic en 'Ver libro', lo que abrirá la página `book.html`.

### **Libro individual:**
La sección muestra la información del libro seleccionado, obtenida a partir de los datos extraídos de su URL.

### **Géneros:**
Funciona muy parecido a `index.html`, con el añadido de que utiliza una función asíncrona con una petición `try..catch` que pide a la API la selección de género seleccionada por el usuario.

### **Eventos:**
Funciona muy parecido a `index.html`.

### **Contacto:**
Esta sección es un sencillo formulario de contacto, con un par de inputs y un botón para enviarlo.

---

## Relación entre ellos.

Las relaciones entre las páginas son:

- **Barra de navegación:**
  - **Logotipo:** Enlaza con `index.html` desde cualquier página.
  - **Libros:** Enlaza, a través de *Búsqueda avanzada* y *Búsqueda por géneros*, con `books.html` y `genres.html` desde cualquier página.
  - **Eventos:** Enlaza con `events.html` desde cualquier página.
  - **Contacto:** Enlaza con `contact.html` desde cualquier página.

- **Index.html:**
  - **Botón "¡Apúntate!"**: Enlaza con la página de eventos (`events.html`).
  - **Sección Recomendados:**
    - **Best Sellers:** Enlaza con la página de Best Sellers (`bestSellers.html`).
    - **Mejor autor de Fantasía:** Enlaza con la página de un autor de Fantasía (`fantasy.html`).
    - **Mejor autora de Thriller:** Enlaza con la página de un autor de Thriller (`thriller.html`).
  - **Sección Novedades:**
    - **Ver más:** Enlaza con …
    - **Nuevos títulos que están arrasando este Febrero 2025:** Enlaza con la página de Novedades (`news.html`).
    - **Títulos confirmados para Marzo 2025:** Enlaza con la página de Novedades (`news.html`).

- **Books.html:**
  - **Botón "Buscar":** Muestra los resultados de la búsqueda. Una vez mostrados los libros de la búsqueda enlaza con la página del libro (`book.html`).
  - **Sección Nuestra sugerencia:**
    - **Ver libro:** Enlaza con la página del libro en concreto (`book.html`).

- **Events.html:**
  - **Botón "¡Apúntate!"**: Enlaza con la página de eventos (`events.html`).
  - **Sección F.A.Q:**
    - **Ver más:** Enlaza con la página de F.A.Q del evento (`faq__page.html`).

- **Contact.html:**
  - **Botón "Enviar":** Es interactuable pero en este proyecto no envía nada.

- **Footer:**
  - **AVO:** Enlaza con la página que contiene el aviso legal y cookies.
  - **Libros:** Enlaza con `books.html` desde cualquier página.
  - **¡Contacta con nosotros!:** Enlaza con `contact.html` desde cualquier página.

---

## Servicios externos utilizados (APIs).
Para este proyecto hemos usado la API **Open Library** en nuestra web para:
- Que el usuario pueda realizar una búsqueda de un libro mediante el nombre del título y/o nombre de autor.
- Que se le muestre al usuario una recomendación de un título literario (generado al azar).
- Que el usuario pueda explorar diversos títulos filtrados por género literario.
- Que el usuario pueda acceder a una sección de novedades donde filtran los libros por género, el cual se elige de manera aleatoria al recargar la página.
- Que el usuario pueda ver mediante un filtrado por autor libros en secciones destacadas. (Ej. *Mejor autor de fantasía*.)

---

## Problemas encontrados y soluciones aplicadas.
- En la creación de la página **Best Sellers**, la API no proporcionaba la información específica necesaria. Para solucionar esto, se investigaron en internet diez libros populares, los cuales se almacenaron en un objeto. A partir de estos títulos, se realizaron búsquedas en la API para extraer y mostrar su información.
- En la creación de la página **Libro**, se decidió utilizar la URL como método para enviar los datos desde **Libros** y realizar las peticiones a la API de manera eficiente. Fue necesario realizar dos peticiones, ya que ninguna de ellas, por sí sola, proporcionaba toda la información requerida.
- En la creación de las páginas **Autor de Fantasía** y **Autora de Thriller**, cuando haces una petición a la API sobre las obras del autor, no te da el ID de la imagen de la portada de cada libro. Fue necesario hacer otra petición por cada libro filtrada por el título, para así sacar la imagen de portada.

---

## Mejoras que pueden implementarse en el futuro.
- Hacer que la página de contacto tenga una funcionalidad real y el mensaje se pueda enviar y almacenar en una base de datos.
- Que el usuario pueda crear un perfil y tener su propia biblioteca con libros a su elección, poner reviews y valoraciones y compartirlo con otros usuarios.



