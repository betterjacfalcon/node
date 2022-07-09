const { option } = require('yargs');
const { crearArhivo } = require('./helpers/multiplicar');
const argv = require ('yargs')
        .option('v', {
            alias: 'valor',
            type: 'number',
            demandOption: true
        })
        .option('l', {
            alias: 'listar',
            type: 'boolean',
            demandOption: true,
            default: false
        })
        .check((argv, option) =>{
            if (isNaN(argv.v)){
            throw 'La base tiene que ser un numero'
            }
            return true
        })
        .argv;


console.clear();

console.log (argv);

console.log('base yars', argv.valor);

/*const [ , , arg3='valor=5'] = process.argv;
const [ , valor=5] = arg3.split('=');*/

//const valor = 5;
crearArhivo(argv.v, argv.l)
    .then( nombreArchivo => console.log(nombreArchivo,'creado') )
    .catch(err => console.log(err));


