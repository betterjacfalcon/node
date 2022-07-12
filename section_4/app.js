
const { crearArhivo } = require('./helpers/multiplicar');
require('colors');
const  argv  = require ('./config/yargs');

console.clear();


/*const [ , , arg3='valor=5'] = process.argv;
const [ , valor=5] = arg3.split('=');*/


crearArhivo(argv.v, argv.l, argv.h)
    .then( nombreArchivo => console.log(nombreArchivo.rainbow,'creado') )
    .catch(err => console.log(err));


