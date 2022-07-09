
const { crearArhivo } = require('./helpers/multiplicar');
const  argv  = require ('./config/yargs');

console.clear();


/*const [ , , arg3='valor=5'] = process.argv;
const [ , valor=5] = arg3.split('=');*/


crearArhivo(argv.v, argv.l)
    .then( nombreArchivo => console.log(nombreArchivo,'creado') )
    .catch(err => console.log(err));


