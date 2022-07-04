const { crearArhivo } = require('./helpers/multiplicar');


console.clear();

const [ , , arg3='valor=5'] = process.argv;
const [ , valor=5] = arg3.split('=');
console.log(valor);

//const valor = 4;

crearArhivo(valor)
    .then( nombreArchivo => console.log(nombreArchivo,'creado') )
    .catch(err => console.log(err));


