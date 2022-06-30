const { crearArhivo } = require('./helpers/multiplicar');

const valor = 4;
console.clear();
crearArhivo(valor)
    .then( nombreArchivo => console.log(nombreArchivo,'creado') )
    .catch(err => console.log(err));


