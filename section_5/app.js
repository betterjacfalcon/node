import { inquirerMenu, pausa, leerInput } from './helpers/inquirer.js';
import colors from 'colors';
import {Tareas} from './models/tareas.js';

console.clear();

const main = async() => {
    console.log('Hola mundo');

    let opt='';
    const tareas = new Tareas();
    /*do {
       opt = await inquirerMenu();
       console.log({opt});
       if (opt !== '0') console.log({opt});
    } while (opt !== '0');*/

    do {
        opt = await inquirerMenu();
        switch (opt) {
          case '1': 
             const desc = await leerInput('Descripcion : ');
             tareas.crearTareas(desc);            
            break;
        
          case '2':
            console.log(tareas._listado);
            break;
        }
        
        
        
        await pausa() ; 
      } while (opt !== '0');
    };



main();