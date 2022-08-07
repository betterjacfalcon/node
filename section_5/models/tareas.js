import {Tarea}  from './tarea.js';

/**
 * _listado
 *  { 'uuid-9b1deb4d-3b7d-4bad-9bdd-2b0d7b3dcb6d: {id:12, desc:ask, completadoEn:'2022-07-22'}'}
 */

class Tareas {
    _listado = {};

    constructor(){
        this._listado = {};
    }

    crearTareas(desc =''){
        const tarea = new Tarea(desc);
        this._listado[tarea.id]= tarea;
    }
}


export  { Tareas};

