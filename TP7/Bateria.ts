export class Bateria{

    private nivelDeBateria:number;
    private marca:string;

    public constructor(nivelDeBateria:number,marca:string){
        this.nivelDeBateria = nivelDeBateria;
        this.marca = marca;
    }

    getNivelBateria():number{
        if(this.nivelDeBateria === 0){
            throw new Error('El telefono no tiene bateria.');
        }
        return this.nivelDeBateria;
    }

    getMarca():string{
        return this.marca;
    }
}