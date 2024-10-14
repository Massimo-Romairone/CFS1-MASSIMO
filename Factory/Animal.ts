import { IAnimal } from "./IAnimal";

export class Animal implements IAnimal{
    protected nombre:string;
    protected raza:string;

    public constructor(nombre:string,raza:string){
        this.nombre = nombre;
        this.raza = raza;
    }

    setNombre():string{
        return this.nombre = this.nombre;
    }

    setRaza():string{
        return this.raza = this.raza;
    }

    public emitirSonido(){
        console.log("El perro de raza: " + this.raza + "y nombre: " + this.nombre + "esta ladrando");
    }

    public moverse(){
        console.log("El perro de raza: " + this.raza + "y nombre: " + this.nombre + "se esta moviendo");
    }
}