//=======================================
//Lógica de negocio - Servicios SuperHero
//=======================================

import SuperHeroRepository from '../repositories/SuperHeroRepository.mjs';

export async function obtenerSuperheroePorId(id) {
    return await SuperHeroRepository.obtenerPorId(id);
}

export async function obtenerTodosLosSuperheroes() {
    return await SuperHeroRepository.obtenerTodos();
}

export async function buscarSuperheroesPorAtributo(atributo, valor) {
    return await SuperHeroRepository.buscarPorAtributo(atributo, valor);
}

export async function obtenerSuperheroesMayoresDe30() {
    return await SuperHeroRepository.obtenerMayoresDe30();
}
//Insertar registros
export async function insertarSuperheroes(datos) {
    return await SuperHeroRepository.insertarSuperheroes(datos);
}
//Actualizar registro
export async function actualizarSuperheroes(nombreSuperHeroe,datosActualizados) {
    return await SuperHeroRepository.actualizarSuperheroes(nombreSuperHeroe,datosActualizados);
}
//Eliminar registro
export async function eliminarSuperheroes(nombreSuperHeroe) {
    return await SuperHeroRepository.eliminarSuperheroes(nombreSuperHeroe);
}