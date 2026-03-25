//==============================================
//Capa de persistencia - Interfaz CRUD SuperHero
//==============================================

//Clase para implementar la interfaz
export default class IRepository{
    obtenerPorId(id){
        throw new Error("Método 'obtenerPorId()' no implementado");
    }
    obtenerTodos(){
        throw new Error("Método 'obtenerTodos()' no implementado");
    }
    buscarPorAtributo(atributo, valor){
        throw new Error("Método 'buscarPorAtributo()' no implementado");
    }
    obtenerMayorDe30(){
        throw new Error("Método 'obtenerMayorDe30' no implementado");
    }
}