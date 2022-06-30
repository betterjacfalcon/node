const fs = require('fs');

console.clear();
console.log('==========================')
console.log('       Tabla del 5')
console.log('==========================')
const valor = 4;
let salida = '';
for (let i=1;i<=10;i++) { 
   salida += ` ${i} *  ${valor} = ${valor * i} \n`;
}

console.log(salida);

fs.writeFile(`tabla-${valor}.txt`, salida, (err) => {
    if (err) throw err;
    console.log('archivo creado');
})