import { inquirerMenu, pausa, leerInput } from './helpers/inquirer.js';
import colors from 'colors';
import {Tareas} from './models/tareas.js';
import { guardarDB, leerDB } from './helpers/guardarArchivo.js';

console.clear();

const main = async() => {
    let opt='';
    const tareas = new Tareas();
    const tareasDB = leerDB();

    if (tareasDB){ //cargar tareas
      tareas.cargarTareasFromArray(tareasDB);
    }
       
    do {
       //imprimir menu
        opt = await inquirerMenu();
        switch (opt) {
          case '1': 
             const desc = await leerInput('Descripcion : ');
             tareas.crearTareas(desc);            
            break;
        
          case '2':
            console.log(tareas.listadoArr);
            
            break;
        }
        
        guardarDB(tareas.listadoArr);
        
        await pausa(); 
      } while (opt !== '0');
    };



main();