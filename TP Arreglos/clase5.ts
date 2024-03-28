//For ejemplos
import * as readlineSync from 'readline-sync';
/*
for(let numero : number = 0;numero <5;numero++){
    console.log("Hola Mundo");
}

for(let numero : number = 0;numero <5;numero++){
    console.log(numero);
}
*/

let notas : number = 0;

for(let numero = 0;numero < 10;numero ++){
    let notaActual = readlineSync.questionInt("Ingrese su nota: ");
    notas ++;
}

console.log("Cantidad de notas: " + notas);

let promedio : number = notas / 10;

console.log("El promedio de tus notas es: " + promedio);
