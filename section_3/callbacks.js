//setTimeout();

const getUsuariobyId = (id,calback) => {

    const user = {
        id,
        nombre:'alejandra'
    }
    setTimeout(() => {
        calback(user)
    },1500 );
}

getUsuariobyId(10, (usuario) => {
   console.log(usuario.id);
   console.log(usuario.nombre.toUpperCase());
});
