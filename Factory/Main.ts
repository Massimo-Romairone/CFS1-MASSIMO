import { Animal } from "./Animal";
import { Fabrica } from "./Fabrica";


let miPerro:Animal = Fabrica.crearAnimal("Perro", "Firulais", "Caniche");
console.log(miPerro);
miPerro.emitirSonido();
miPerro.moverse();

let miGato:Animal = Fabrica.crearAnimal("Gato", "Polenta", "Siames");
console.log(miGato);
miGato.emitirSonido();
miGato.moverse();

let miPajaro:Animal = Fabrica.crearAnimal("Pajaro", "Piolin", "Canario");
console.log(miPajaro);
miPajaro.emitirSonido();
miPajaro.moverse();


try{
    let animal:Animal = Fabrica.crearAnimal("Conejo", "Raul", "AAA");
    console.log(animal);
}catch(error){
    console.log(error.message);
}

console.log("Hola");







