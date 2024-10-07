import { Playlist } from "./Playlist";
import { Tema } from "./Tema";

let tema1:Tema = new Tema("Cancion 1",1);
let tema2:Tema = new Tema("Cancion 2",2);
let tema3:Tema = new Tema("Cancion 3",1);
let tema4:Tema = new Tema("Cancion 4",3);
let tema5:Tema = new Tema("Cancion 5",1);

let playlist1:Playlist = new Playlist("Playlist 1");
let playlist2:Playlist = new Playlist("Playlist 2");

try{
    console.log(playlist2.getDuracion());
}catch(error){
    console.log("Error: ",error.message);
}

console.log("Continua la ejecucion...");

playlist2.add(tema4);
console.log(playlist2.getDuracion());