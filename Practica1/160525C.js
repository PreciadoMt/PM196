const saludoPersonalizado = (nombre, edad) => {
    return "Hola, me llamo ${nombre} y tengo ${edad} años.";
  };

const nombreUsuario = "Preciado";
const edadUsuario = 22;
const saludo = saludoPersonalizado(nombreUsuario, edadUsuario);
console.log(saludo);

