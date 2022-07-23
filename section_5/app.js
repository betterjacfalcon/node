import { inquirerMenu } from './helpers/inquirer.js';
import colors from 'colors';

console.clear();

const main = async() => {
    console.log('Hola mundo');

    let opt='';

    /*do {
       opt = await inquirerMenu();
       console.log({opt});
       if (opt !== '0') console.log({opt});
    } while (opt !== '0');*/

    do {
        opt = await inquirerMenu();
        console.log({ opt });    
      } while (opt !== '0');
    };



main();