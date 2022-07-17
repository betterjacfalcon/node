require('colors');
const{ mostrarMenu, pausa } = require('./helpers/mensaje');

console.clear();

const main = async() => {
    console.log('Hola mundo');
    mostrarMenu();
    pausa();
}

main();