//const { resolve } = require('path');

require('colors');

const mostrarMenu = () => {

    return new Promise((resolve) => {
        console.clear();
        console.log('==============================='.yellow);
        console.log('Seleccione una opcion'.yellow);
        console.log('==============================='.yellow);
        console.log(`${'1.'.yellow} Crear una tarea`);
        console.log(`${'2.'.yellow}  Listar las tarea`);
        console.log(`${'3.'.yellow}  Listar las tarea completadas`);
        console.log(`${'4.'.yellow}  Listar las tarea pendientes`);
        console.log(`${'5.'.yellow}  Completar tarea(s)`);
        console.log(`${'6.'.yellow}  Borrar tarea`);
        console.log(`${'0.'.yellow}  Salir \n`);

        const readline = require('readline').createInterface({
            input: process.stdin,
            output: process.stdout

        });

        readline.question('Selecciones una opcion: ', (opt) => {
            readline.close();
            resolve(opt);
        });

    });


}

const pausa = () => {
    return new Promise((resolve) =>{
        const readline = require('readline').createInterface({
            input: process.stdin,
            output: process.stdout
    
        });
    
        readline.question(`\nPresion ${'ENTER'.blue}\n`, (opt) => {
            readline.close();
            resolve();
        });
    });
}

module.exports = {
    mostrarMenu,
    pausa
}

export  { pausa };