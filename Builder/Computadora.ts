export class Computadora{
    private procesador:string;
    private ram:string;
    private almacenamiento:string;
    private tarjetaGrafica:string;
    private sistemaOperativo:string

    public constructor(procesador:string,ram:string,almacenamiento:string,tarjetaGrafica:string,sistemaOperativo:string){
        this.procesador = procesador;
        this.ram = ram;
        this.almacenamiento = almacenamiento;
        this.tarjetaGrafica = tarjetaGrafica;
        this.sistemaOperativo = sistemaOperativo;
    }

    public setProcesador(pProcesador:string):void{
        this.procesador = pProcesador;
    }

    public setRam(pRam:string):void{
        this.ram = pRam;
    }

    public setAlmacenamiento(pAlmacenamiento:string):void{
        this.almacenamiento = pAlmacenamiento;
    }

    public setTarjetaGrafica(pGrafica):void{
        this.tarjetaGrafica = pGrafica;
    }

    public setSistemaOperativo(pSistema):void{
        this.sistemaOperativo = pSistema;
    }

    public toString():string{
        let detalles:string = "";
        detalles = `-----LOS DETALLES DE SU COMPUTADORA SON LOS SIGUIENTES----- \n
        -Procesador: ${this.procesador} \n
        -Ram: ${this.ram} \n
        -Almacenamiento: ${this.almacenamiento} \n
        -Tarjeta Grafica: ${this.tarjetaGrafica} \n
        -Sistema Operativo: ${this.sistemaOperativo}.`

        return detalles;
    }
}