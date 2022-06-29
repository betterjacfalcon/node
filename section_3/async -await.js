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

const getInfoUsuario = async (id) =>{
    try{
        const empleado = await getEmpleado(id);
        const salario = await getSalario (id);
        return `El salario del empleado : ${empleado} es de ${salario}`;
    }catch(error){
        throw error;
    }

}

const id = 3;

getInfoUsuario( id )
.then(msg => console.log(msg))
.catch(err => console.log(err));