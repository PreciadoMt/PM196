const persona = {
    nombre: "Uriel Ivan",
    edad: 22,
    direccion: {
    ciudad: "Qro" ,
    pais: "MX"
    }
};

const { nombre, edad, direccion: { ciudad, pais } } = persona;

console.log("Me llamo " + nombre + ", tengo " + edad + " años y vivo en " + ciudad);

