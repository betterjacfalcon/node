console.log('Inicio de Programa'); //Ejecuta 1. Se regitra en la pila de proceso 2. Se ejecuta 

setTimeout((argumento) => {
    console.log('Primer Timer'); //tarea asincrona - 1. Se registra en la pila de procesos 2. Node Apis 3. Se cola en Pila Callbacks 4. Se cola en la pila de procesos  y se ejecuta 5ta
}, 3000);

setTimeout((argumento) => {
    console.log('Segundo Timer'); //tarea asincrona - 1. Se registra en la pila de procesos 2. Node Apis 3. Se cola en Pila Callbacks 4. Se cola en la pila de procesos y se ejecuta 3ero
}, 0);

setTimeout((argumento) => {
    console.log('Tercer Timer');  //tarea asincrona - 1. Se registra en la pila de procesos 2. Node Apis 3. Se cola en Pila Callbacks 4. Se cola en la pila de procesos y ejecuta 4ta
}, 0);


console.log('Fin de Programa'); //Ejecuta 1. Se regitra en la pila de proceso 2. Se ejecuta 