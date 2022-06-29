const empleados = [
    {
        id:1,
        nombre: 'sergio'
    },
    {
        id:2,
        nombre: 'alessandra'
    },
    {
        id:3,
        nombre: 'alejandro'
    }

];

const salarios = [
    {
        id:1,
        salario: 2000
    },
    {
        id:2,
        salario: 5000
    }

];

const getEmpleado = (id) => {

    return new Promise((resolve, reject ) => {

    const empleado = empleados.find(e => e.id === id)?.nombre;
        (empleado)
        ? resolve(empleado)
        : reject(`no existe empleado con ${id}`);
        
    });
    
}

const getSalario = (id) => {

    return new Promise((resolve, reject ) => {

    const salario = salarios.find(s => s.id === id)?.salario;
        (salario)
        ? resolve(salario)
        : reject(`no existe salario para el empleado con ${id}`);
        
    });
    
}

const id = 3;
/*getEmpleado(id)
	.then(empleado => console.log(empleado))
    .catch(err => console.log(err));

getSalario(id)
	.then(salario => console.log(salario))
    .catch(err => console.log(err));*/

/*getEmpleado(id)
    .then( empleado => {
        getSalario ( id )
            .then(salario => {
                console.log('El empleado:', empleado, 'tiene un salario de:', salario )
            })
            .catch(err => console.log(err));    
    })
    .catch(err => console.log(err));*/
    
    let nombre;

    getEmpleado (id)
    .then ( empleado =>{ 
        nombre = empleado;
        return getSalario (id )})
    .then ( salario => console.log('El empleado:', nombre, 'tiene un salario de:', salario))
    .catch(err => console.log(err));
      