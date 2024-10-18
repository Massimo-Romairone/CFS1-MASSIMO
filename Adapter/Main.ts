import { AdaptadorVinilo } from "./AdaptadorVinilo";
import { ReproductorMusica } from "./IReproductorMusica";
import { Vinilo } from "./Vinilo";


const vinilo1:Vinilo = new Vinilo();
const adaptador1:ReproductorMusica = new AdaptadorVinilo(vinilo1);

adaptador1.reproducir()
adaptador1.detener()