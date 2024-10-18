class Logger{
    private static instancia:Logger;
    private contadorMensajes:number;

    private constructor(){
        this.contadorMensajes = 0;
    }

    public static getInstancia():Logger{
        if(!Logger.instancia){
            Logger.instancia = new Logger();
        }else{
            console.log("Ya existe un Logger, no se puede crear otro");
        }
        return Logger.instancia;
    }

    public contador(mensaje:string):void{
        this.contadorMensajes ++;
        console.log(`${this.contadorMensajes}: ${mensaje}`);
    }
}

const logger1 = Logger.getInstancia();
logger1.contador("Hola soy un mensaje");
logger1.contador("Hola soy un mensaje");
logger1.contador("Hola soy un mensaje");
logger1.contador("Hola soy un mensaje");
logger1.contador("Hola soy un mensaje");


//PRUEBA PARA VERIFICAR QUE EL PATRON SINGLETON FUNCIONA CORRECTAMENTE
const logger2 = Logger.getInstancia();
logger2.contador("Hola soy un mensaje");
logger2.contador("Hola soy un mensaje");
logger2.contador("Hola soy un mensaje");
logger2.contador("Hola soy un mensaje");
logger2.contador("Hola soy un mensaje");