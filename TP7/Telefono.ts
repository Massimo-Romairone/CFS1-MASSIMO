import { Bateria } from "./Bateria";

export class Telefono{

    protected estaPrendido:boolean;
    protected volumenActual:number;
    protected bateria:Bateria;

    public constructor(bateria:Bateria){
        this.bateria = bateria;
        this.estaPrendido = false;
        this.volumenActual = 10;
    }

    public getEstaPrendido():boolean{
        return this.estaPrendido;
    }

    public setVolumenActual(pVolumen:number):void{
        this.volumenActual = pVolumen;
    }

    public prenderApagar():void{
        if(this.estaPrendido){
            this.estaPrendido = false;
        }else{
            this.estaPrendido = true;
        }
    }

    public mandarMensaje():string{
        let mensaje = "Mensaje Enviado";
        return mensaje;
    }

    public hacerLlamada():string{
        let llamada = "Llamando...";
        return llamada;
    }
}

