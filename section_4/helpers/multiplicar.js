const fs = require('fs');
const colors = require('colors');
const crearArhivo = async( valor = 5, listar = false) => {
    try{

        let salida = '';
        for (let i=1;i<=10;i++) { 
            salida += ` ${i} ${'x'.green} ${valor} ${'='.yellow} ${valor * i} \n`;
        }
        if (listar){
        console.log('=========================='.green)
        console.log('Tabla del'.green, colors.blue(valor))
        console.log('=========================='.green)
        console.log(salida);}
        
        /*fs.writeFile(`tabla-${valor}.txt`, salida, (err) => {
            if (err) throw err;
            console.log('archivo creado');
        })*/
        
        fs.writeFileSync(`tabla-${valor}.txt`, salida);
        return `tabla-${valor}.txt`;
    }catch( err){
        throw err;
    }   
     
}
module.exports = {
    crearArhivo
}