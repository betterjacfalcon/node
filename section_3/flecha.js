function sumar(a, b){
    return a+b;
}

const restar = (a,b) => {
	return  a-b;
}

const multiplicar = (a,b) => a*b; //no es necesario el return ni la llave cuando es una sola linea
const saludar = ( ) => 'Hola mundo';

console.log(sumar(5,10));
console.log(restar(5,10));
console.log(multiplicar(5,10));
console.log(saludar( ));