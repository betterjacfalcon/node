import inquirer from 'inquirer';
import colors from 'colors';

const menuOpts = [
    {
        type: 'list',
        name: 'opcion',
        message: 'Que desea hacer?',
        choices: ['opt1', 'opt2', 'opt3']
    }
];

const inquirerMenu = async() => {

    console.log('==============================='.yellow);
    console.log('Seleccione una opcion'.yellow);
    console.log('==============================='.yellow);

    const opt = await inquirer.prompt(menuOpts);
  
    return opt;
}



export  { inquirerMenu };