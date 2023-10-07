/*

El DOM = document object model  modelo objeto del documento 

Objeto en Javascript, por lo tanto va a tener propiedades y comportamientos asociados.

atributos y funciones (métodos)


Es en forma más sencilla una variable en JS que va a traer una abstracción de mi documento de HTML
*/
const nombre = "Mali";
let edad = 24;

// tipo de cajón
// {}
const scoobyDoo = {
    raza: "Gran danés",
    noPatas: 4,
    puedeHablar: true,
    color: "café con manchas"
}

// no funciona scoobyDoo = algo
scoobyDoo.color = "café con manchas negras"

// alert('Hola mundo')
console.log("hola mundo", nombre)
// document.write("hola mundo")


let titulo = document.getElementById('titulo');
console.log(titulo);

let objetoDeLabibliotecaTypewriter = new Typewriter(titulo, {
    loop: true
});

objetoDeLabibliotecaTypewriter
    .typeString('Malinali Becerril')
    .deleteChars(17)
    .pauseFor(500)
    .typeString('Desarrollo web')
    .pauseFor(2500)
    .deleteChars(14)
    .start();

