import SuperHero from '../models/SuperHero.mjs';
import IRepository from './IRepository.mjs';

class SuperHeroRepository extends IRepository {

   //Buscar Todos
    async obtenerTodos() {
        return await SuperHero.find();
    }

    //Busqueda por ID
    async obtenerPorId(id) {
        return await SuperHero.findById(id);
    }
    
    //Busqueda por Atributo
    async buscarPorAtributo(atributo, valor) {
        //Diferenciar mayúsculas/minúsculas (case-sensitive real) 
        //¿Qué hace strength: 3?
        // 1 → ignora acentos y mayúsculas
        // 2 → distingue acentos pero no mayúsculas
        // 3 → distingue TODO (case-sensitive real)
        return await SuperHero.find({ [atributo]: valor }).collation({ locale: "es", strength: 1 });         
    }

    //Busqueda mayores de 30
    async obtenerMayoresDe30() {
        //Operador de comparación - $gt = “greater than” (mayor que)
        return await SuperHero.find({edad: {$gt: 30}});

        //Que sea del planeta "Tierra" o mayor a 30
        //return await SuperHero.find({ $or: [{ planetaOrigen: "Tierra" }, { edad: { $gt: 30 } }]});
        //El planeta de Origen es igual a "Tierra" y la edad del superheroe está entre 20 y 30 años.
        //return await SuperHero.find ({ $and : [{ planetaOrigen: "Tierra" }, { "edad" : { $gte : 20 , $lte : 30 } }]}); 
    }


    //Insertar registros
    async insertarSuperheroes(datos) {
    
    // Se crea una nueva instancia del modelo SuperHero con los datos proporcionados.
        const hero = new SuperHero(datos); //Agrega los datos de body postman
     
    //save() es un método de Mongoose que se utiliza para guardar un documento en la base de datos.
     //  En este caso, hero.save() guarda el nuevo superhéroe creado en la colección "Grupo-12".
     // El resultado de esta operación será el documento guardado, incluyendo su ID generado automáticamente por MongoDB.
         return await hero.save();

    }

    //Actualizar registro
    async actualizarSuperheroes(nombreSuperHeroe,datosActualizados) {
        // SuperHero.updateOne() es un método de Mongoose que se utiliza para actualizar un documento en la colección "Grupo-12".
         return await SuperHero.updateOne(
            {nombreSuperHeroe},  
            {$set: datosActualizados}, //actualiza los datos de body postman
    );
    }

    //Eliminar registro
    async eliminarSuperheroes(nombreSuperHeroe) {
          return await SuperHero.deleteOne({nombreSuperHeroe}); 
    }
}
    
export default new SuperHeroRepository();