//==============================
//Controladores para superhéroes
//==============================

import {obtenerSuperheroePorId, obtenerTodosLosSuperheroes, buscarSuperheroesPorAtributo, obtenerSuperheroesMayoresDe30,insertarSuperheroes, actualizarSuperheroes, eliminarSuperheroes} from '../services/superheroesService.mjs';

import {renderizarSuperheroe,renderizarListaSuperheroes} from '../views/responsiveView.mjs';


 export async function obtenerTodosLosSuperheroesController(req, res) {
    try{
        const superheroe= await obtenerTodosLosSuperheroes();
        const superheroeFormateado= renderizarListaSuperheroes(superheroe);
        res.status(200).json(superheroeFormateado);
    } catch(error){
        res.status(500).send({mensaje: 'Error al obtener los superhéroes', error: error.message});
    }
 }


export async function obtenerSuperheroePorIdController(req,res) {
    try {
        const {id} =req.params;
        const superheroe= await obtenerSuperheroePorId(id);
        if(!superheroe){
            return res.status(404).send({mensaje:'Superhéroe no encontrdo'});
        }

        const superheroeFormateado= renderizarSuperheroe(superheroe);
        res.status(200).json(superheroeFormateado);
    }catch(error){
        res.status(500).send({mensaje:'Error al obtener el superhéroe', error: error.message});

    }
 }

 export async function buscarSuperheroesPorAtributoController(req, res) {
    try{
        const {atributo, valor}= req.params;
        const superheroes= await buscarSuperheroesPorAtributo(atributo, valor);
        console.log(superheroes);
        console.log({atributo, valor});
        if(superheroes.length===0){
            return res.status(404).send(
                {mensaje: 'No se encontraron superhéroes con ese atributo'});
        }
        const superheroesFormateado= renderizarListaSuperheroes(superheroes);
        res.status(200).json(superheroesFormateado);
    } catch(error){
        res.status(500).send({mensaje: 'Error al buscar los superhéroes', error: error.message});
    }
 }

 export async function obtenerSuperheroesMayorDe30Controller(req, res) {
    try {
        const superheroes= await obtenerSuperheroesMayoresDe30();
       
        if (superheroes.length===0){
            return res.status(404).send(
                {mensaje: 'No se encontraron superhéroes mayores de 30 años'});
        }
        const superheroesFormateado= renderizarListaSuperheroes(superheroes);
        res.status(200).json(superheroesFormateado);
        
    } catch (error) {
        res.status(500).send(
            {mensaje: 'Error al obtener superhéroes mayores de 30', error: error.message});
        }    
}

//Insertar registros
export async function insertarSuperheroeController(req, res) {
    try {
        // req.body contiene los datos del nuevo superhéroe enviados en la solicitud.
        const superheroes= await insertarSuperheroes(req.body);
        console.log(superheroes);
        if (superheroes.length===0){
            return res.status(404).send(
                {mensaje: 'No se inserto'});
        }
        
        res.status(201).json({mensaje:'Superhéroes Insertados:', resultado: superheroes});
        
    } catch (error) {
        res.status(500).send(
            {mensaje: 'Error al insertar superhéroes', error: error.message});
        }    
}

//Actualizar registro
export async function actualizarSuperheroeController(req, res) {
    try {
         const nombre= req.params.nombre;
         const superheroes= await actualizarSuperheroes(nombre, req.body);
       
        if (superheroes.matchedCount===0){
            return res.status(404).send(
                {mensaje: 'Nombre del Superhéroe no encontrado'});
        }
        
        res.status(200).json({mensaje:'Superhéroe Actualizado:', resultado: superheroes});
        
    } catch (error) {
        res.status(500).send(
            {mensaje: 'Error al actualizar superhéroes', error: error.message});
      }        
}

//Eliminar registro
export async function eliminarSuperheroeController(req, res) {
    try {
         const nombre= req.params.nombre;
         const superheroes= await eliminarSuperheroes(nombre);
       
        if (superheroes.deletedCount===0){
            return res.status(404).send(
                {mensaje: 'Nombre del Superhéroe no encontrado'});
        }
        
        res.status(200).json({mensaje:'Superhéroe Eliminado:', resultado: superheroes});
        
    } catch (error) {
        res.status(500).send(
            {mensaje: 'Error al eliminar superhéroes', error: error.message});
      }        
}
        
    

