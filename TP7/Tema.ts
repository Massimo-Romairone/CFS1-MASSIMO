export class Tema{
    private nombre:string;
    private duracion:number;

    public constructor(nombre:string,duracion:number){
        this.nombre = nombre;
        this.duracion = duracion;
    }

    public getNombre():string{
        return this.nombre;
    }

    public toString():string{
        return this.getNombre();
    }

    public getDuracion():number{
        return this.duracion;
    }
}