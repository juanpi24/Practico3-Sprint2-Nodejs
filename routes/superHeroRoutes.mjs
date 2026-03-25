//=================================
//Rutas de la API para superhéroes
//=================================

import express from 'express';
import {
    obtenerSuperheroePorIdController,
    obtenerTodosLosSuperheroesController,
    buscarSuperheroesPorAtributoController,
    obtenerSuperheroesMayorDe30Controller,
    insertarSuperheroeController,
    actualizarSuperheroeController,
    eliminarSuperheroeController
} from '../controllers/superheroesController.mjs';

const router= express.Router();

router.get('/heroes', obtenerTodosLosSuperheroesController);
router.get('/heroes/:id', obtenerSuperheroePorIdController);
router.get('/buscar/:atributo/:valor', buscarSuperheroesPorAtributoController);
router.get('/mayoresA30', obtenerSuperheroesMayorDe30Controller);
//ERROR con esta api: /heroes 
//ocurre cuando se intenta pasar una cadena de texto (como "español") a un campo que MongoDB espera que sea un identificador único de 12 bytes o 24 caracteres hexadecimales (ObjectId)
// "mensaje": "Error al obtener el superhéroe",
//     "error": "Cast to ObjectId failed for value \"mayoresA30\" (type string) at path \"_id\" for model \"SuperHero\""


//Rutas CRUD
router.post('/insertar',insertarSuperheroeController);
router.put('/actualizar/:nombre',actualizarSuperheroeController);
router.delete('/eliminar/:nombre',eliminarSuperheroeController);

export default router;