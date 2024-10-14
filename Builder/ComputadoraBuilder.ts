import { Computadora } from "./Computadora";

export class ComputadoraBuilder{
    private computadora:Computadora;

    public constructor(){
        this.computadora = new Computadora("Sin procesador","Sin ram","Sin almacenamiento","Sin grafica","Sin sistema operativo");
    }

    public addProcesador(procesador:string):ComputadoraBuilder{
        this.computadora.setProcesador(procesador);
        return this;
    }

    public addRam(ram:string):ComputadoraBuilder{
        this.computadora.setRam(ram);
        return this;
    }

    public addAlmacenamiento(almacenamiento:string):ComputadoraBuilder{
        this.computadora.setAlmacenamiento(almacenamiento);
        return this;
    }

    public addTarjetaGrafica(grafica:string):ComputadoraBuilder{
        this.computadora.setTarjetaGrafica(grafica);
        return this;
    }

    public addSistemaOperativo(sistema:string):ComputadoraBuilder{
        this.computadora.setSistemaOperativo(sistema);
        return this;
    }

    public build():Computadora{
        return this.computadora;
    }
}