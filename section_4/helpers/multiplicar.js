const fs = require('fs');
const crearArhivo = async( valor = 5, listar = false) => {
    try{

        let salida = '';
        for (let i=1;i<=10;i++) { 
            salida += ` ${i} *  ${valor} = ${valor * i} \n`;
        }
        if (listar){
        console.log('==========================')
        console.log(`       Tabla del ${valor}`)
        console.log('==========================')
        console.log(salida);}
        
        /*fs.writeFile(`tabla-${valor}.txt`, salida, (err) => {
            if (err) throw err;
            console.log('archivo creado');
        })*/
        
        fs.writeFileSync(`tabla-${valor}.txt`, salida);
        return `tabla-${valor}.txt creado`;
    }catch( err){
        throw err;
    }   
     
}
module.exports = {
    crearArhivo
}