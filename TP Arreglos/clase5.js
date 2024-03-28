"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//For ejemplos
var readlineSync = require("readline-sync");
/*
for(let numero : number = 0;numero <5;numero++){
    console.log("Hola Mundo");
}

for(let numero : number = 0;numero <5;numero++){
    console.log(numero);
}
*/
var notas = 0;
for (var numero = 0; numero < 10; numero++) {
    var notaActual = readlineSync.questionInt("Ingrese su nota: ");
    notas++;
}
console.log("Cantidad de notas: " + notas);
var promedio = notas / 10;
console.log("El promerdio de tus notas es: " + promedio);
