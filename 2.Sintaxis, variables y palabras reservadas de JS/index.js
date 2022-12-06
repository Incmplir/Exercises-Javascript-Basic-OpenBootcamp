/* Crea un nuevo archivo JS que contenga una lista con los siguientes elementos:

- Tu nombre (string)

- Tu edad (number)

- ¿Eres desarrollador? (boolean)

- Tu fecha de nacimiento (Date)

- Tu libro favorito (Objeto con propiedades: titulo, autor, fecha, url) */

const nombre = "Christian";
const edad = 19;
const programador = true;
const nacido = new Date("May 09 2003");
const libro = {
    titulo: "Metro 2033",
    autor: "Dmitry Glukhovsky",
    fecha: new Date("2002"),
    url: "https://books.google.cl/books?id=ofk_hFHoLnkC&lpg=PP1&pg=PP1#v=onepage&q&f=false",
};
console.log(nombre, edad, programador, nacido, libro);