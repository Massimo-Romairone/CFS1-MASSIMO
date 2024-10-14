import { ComputadoraBuilder } from "./ComputadoraBuilder";

let miComputadora = new ComputadoraBuilder().addAlmacenamiento("1 tb HDD").addProcesador("Intel Pentium Gold G5400").addRam("16 gb").addTarjetaGrafica("AMD Radeon R7 240").addSistemaOperativo("Win 10 Pro").build();

console.log(miComputadora.toString());

