import { ReproductorMusica } from "./IReproductorMusica";
import { Vinilo } from "./Vinilo";

export class AdaptadorVinilo implements ReproductorMusica{
    private vinilo:Vinilo;

    public constructor(pVinilo:Vinilo){
        this.vinilo = pVinilo;
    }

    public reproducir():void{
        this.vinilo.colocarAguja();
        console.log("Reproduciendo Vinilo.");
    }

    public detener():void{
        this.vinilo.levantarAguja();
        console.log("Deteniendo el Vinilo.");
    }
}