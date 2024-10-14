import { Animal } from "./Animal";

export class Perro extends Animal{

    public constructor(nombre:string,raza:string){
        super(nombre,raza);
    }

    setNombre():string{
        return this.nombre = this.nombre;
    }

    setRaza():string{
        return this.raza = this.raza;
    }

    public emitirSonido(){
        console.log("El perro de raza: " + this.raza + " y nombre: " + this.nombre + " esta ladrando");
    }

    public moverse(){
        console.log("El perro de raza: " + this.raza + " y nombre: " + this.nombre + " se esta moviendo");
    }
}