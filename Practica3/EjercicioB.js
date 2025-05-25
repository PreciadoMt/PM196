function verificarUsuario(usuario) {
    return new Promise((resolve, reject) => {
        if (usuario === "admin") {
            resolve("Acceso concedido");
        } else {
            reject("Acceso denegado");
        }
    });
}


verificarUsuario("admin")
    .then(res => console.log(res))      
    .catch(err => console.error(err));

verificarUsuario("Preciado")
    .then(res => console.log(res))
    .catch(err => console.error(err));   

const readline = require('readline');

function verificarUsuario(usuario) {
    return new Promise((resolve, reject) => {
        if (usuario === "admin") {
            resolve("Acceso concedido");
        } else {
            reject("Acceso denegado");
        }
    });
}

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('Ingresa el usuario: ', (usuario) => {
    verificarUsuario(usuario)
        .then(res => console.log(res))
        .catch(err => console.error(err))
        .finally(() => rl.close());
});