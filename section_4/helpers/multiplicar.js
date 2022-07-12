const fs = require('fs');
const colors = require('colors');
const crearArhivo = async( valor = 5, listar = false, hasta) => {
    try{

        let salida, consola = '';
        for (let i=1;i<=hasta;i++) { 
            salida += ` ${i} ${'x'} ${valor} ${'='} ${valor * i} \n`;
            consola += ` ${i} ${'x'.green} ${valor} ${'='.yellow} ${valor * i} \n`;
        }
        if (listar){
        console.log('=========================='.green)
        console.log('Tabla del'.green, colors.blue(valor))
        console.log('=========================='.green)
        console.log(consola);}
        
        /*fs.writeFile(`tabla-${valor}.txt`, salida, (err) => {
            if (err) throw err;
            console.log('archivo creado');
        })*/
        
        fs.writeFileSync(`./salida/tabla-${valor}.txt`, salida);
        return `./salida/tabla-${valor}.txt`;
    }catch( err){
        throw err;
    }   
     
}
module.exports = {
    crearArhivo
}