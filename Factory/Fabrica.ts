import { Animal } from "./Animal";
import { Gato } from "./Gato";
import { Pajaro } from "./Pajaro";
import { Perro } from "./Perro";

export class Fabrica{
    static crearAnimal(tipo: string, nombre: string, raza: string):Animal{
        if(tipo === 'Perro'){
            return new Perro(nombre, raza);
        }else if(tipo === 'Gato'){
            return new Gato(nombre, raza);
        }else if(tipo === 'Pajaro'){
            return new Pajaro(nombre, raza);
        }else{
            throw new Error("Tipo de animal no soportado");
        }
    }
}