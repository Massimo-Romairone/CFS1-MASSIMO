import { Animal } from "./Animal";

export class Pajaro extends Animal{

    public constructor(nombre:string,raza:string){
        super(nombre,raza);
    }

    public emitirSonido(){
        console.log("El pajaro de raza: " + this.raza + " y nombre: " + this.nombre + " esta ladrando");
    }

    public moverse(){
        console.log("El pajaro de raza: " + this.raza + " y nombre: " + this.nombre + " se esta moviendo");
    }
}