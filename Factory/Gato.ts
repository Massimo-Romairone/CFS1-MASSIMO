import { Animal } from "./Animal";

export class Gato extends Animal{

    public constructor(nombre:string,raza:string){
        super(nombre,raza);
    }

    public emitirSonido(){
        console.log("El gato de raza: " + this.raza + " y nombre: " + this.nombre + " esta ladrando");
    }

    public moverse(){
        console.log("El gato de raza: " + this.raza + " y nombre: " + this.nombre + " se esta moviendo");
    }
}