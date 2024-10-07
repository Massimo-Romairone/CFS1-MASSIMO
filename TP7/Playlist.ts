import { Tema } from "./Tema";

export class Playlist{
    private nombre:string;
    private temas:(Tema | Playlist)[];

    public constructor(nombre:string){
        this.nombre = nombre;
        this.temas = [];
    }

    public add(elemento:Tema | Playlist){
        this.temas.push(elemento);
    }

    public getNombre():string{
        return this.nombre;
    }

    public getTemas():(Tema | Playlist)[]{
        return this.temas;
    }

    public toString():string{
        let resultado:string = "";
        resultado += " - " + this.getNombre() + " -\n";

        for(let elemento of this.temas){
            resultado += " " + elemento.toString() + "\n";
        }
        return resultado;
    }

    public getDuracion():number{
        if(this.temas.length === 0){
            throw new Error('La lista de temas esta vacia');
        }

        let resultado:number = 0;

        this.temas.forEach(element => {
            resultado += element.getDuracion();
        })
        
        return resultado;

    }
    
}