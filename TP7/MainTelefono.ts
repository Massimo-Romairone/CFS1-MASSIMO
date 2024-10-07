import { Bateria } from "./Bateria";
import { Telefono } from "./Telefono";

let bateriaCel:Bateria = new Bateria(0,"Samsung");
let nuevoCel:Telefono = new Telefono(bateriaCel);
let mensaje = nuevoCel.mandarMensaje();

console.log(nuevoCel);

try{
    console.log(bateriaCel.getNivelBateria());
}catch(error){
    console.log("Error: ", error.message);
}

console.log("Continua la ejecucion.");