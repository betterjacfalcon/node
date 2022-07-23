import inquirer from 'inquirer';
import colors from 'colors';

const menuOpts = [
    {
        type: 'list',
        name: 'opcion',
        message: 'Que desea hacer?',
        choices: [
            {
                value: '1',
                name: `${'1.'.yellow} Crear una tarea`
            },
            {
                value: '2',
                name: `${'2.'.yellow}  Listar las tarea`
            },
            {
                value: '3',
                name: `${'3.'.yellow}  Listar las tarea completadas`
            },
            ,
            {
                value: '4',
                name: `${'4.'.yellow}  Listar las tarea pendientes`
            },
            {
                value: '5',
                name: `${'5.'.yellow}  Completar tarea(s)`
            },
            {
                value: '6',
                name: `${'6.'.yellow}  Borrar tarea`
            },
            {
                value: '0',
                name:`${'0.'.yellow}  Salir \n`
            }
        
        ]
    }
];

const inquirerMenu = async() => {
    
    console.log('==============================='.yellow);
    console.log('Seleccione una opcion'.yellow);
    console.log('==============================='.yellow);

    const {opcion} = await inquirer.prompt(menuOpts);
  
    return opcion;
}

const pausa = async() => {

    const questions = [
        {
        type: 'input',
        name: 'enter',
        message: `\nPresion ${'ENTER'.blue}\n`
        }
    
    ]
    console.log('\n')
    await inquirer.prompt(questions);
}



export  { inquirerMenu, pausa };