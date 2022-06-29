const cromosoma = {
    nombre: 'cromosoma 1',
    tipo: 'autosomas',
    mide: '7.5cm',
    getNombre(){
        return `${this.nombre} ${this.tipo} ${this.mide}`
    }
}
function imprimirHeroes({nombre, tipo, mide }){   
    console.log (nombre, tipo, mide);
}

/*function imprimirHeroes(heroe){
    const {nombre, tipo, mide } = cromosoma;
    console.log (nombre, tipo, mide);
}

const {nombre, tipo, mide } = cromosoma;
console.log (nombre, tipo, mide);*/

imprimirHeroes(cromosoma);

const heroes = ['peter', 'martin', 'alejandra'];

/*const [h1, h2, h3] = heroes;

console.log(h1, h2, h3);*/

const [ , , h3] = heroes;

console.log(h3);