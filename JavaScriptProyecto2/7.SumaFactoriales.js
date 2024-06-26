/*
- Fecha de publicación: 16.04.2023
- Hora de publicación: 15:30pm
- Versión de su código: 64
- Autores: Ing(c):   Luisa Victoria, Lizeth Victoria, Andrea Zapata, Juan Manuel Hurtado, Santiago Castaño, Andres Jaramillo, Camilo
- Nombre del lenguaje utilizado: “ECMASCRIPT 6.0” (javascript 6.0)
- Versión del lenguaje utilizado: 6.0
- Universidad Tecnológica de Pereira
- Programa de Ingeniería de Sistemas y Computación
- Descripción de la funcionalidad del programa: 
    Leer un número entero N, no negativo y mostrar la suma de los factoriales de todos los 
    números desde 0 hasta N
        Input: 5
        Output: = 0! + 1! + 2! + 3! + 4! + 5!
                = 1! + 1! + 2! + 6! + 24! + 120!= 154
*/

const prompt = require('prompt-sync')();
//ARREGLAR CUANDO NO RECIBE UN NUMERO
function CalcularFactorial() {

    let n = prompt("Ingrese el numero POSITIVO para calcular su factorial: ");
    let nNum = parseInt(n);
    //---Comprobar si n es un numero---
    while (!Number.isInteger(nNum)) {
    if (!Number.isInteger(nNum)) {
        n = prompt("Por favor ingrese un numero: ");
        nNum = parseInt(n);
        }
    }
    //---Comprobar si n es positivo---
    while (n < 0) {
        if (n < 0) {
            n = prompt("Ingrese el numero POSITIVO para calcular su factorial: ");
            n = parseInt(n);
            nNum = n;
            //---Comprobar si n es un numero---
            if (!Number.isInteger(nNum)){
                while (!Number.isInteger(nNum)) {
                    if (!Number.isInteger(nNum)) {
                        n = prompt("Por favor ingrese un numero: ");
                        nNum = parseInt(n);
                        }
                    }
                }
            }
        }

        //---variable auxiliar para imprimir n-veces---
        let nSub2 = n;
        //---Imprimir numeros sin calcular---
        
        console.log("Si n = " + nSub2);
        process.stdout.write("= ");

        var ContadorImprimir = 0;

        while(ContadorImprimir <= nSub2) {
            if (ContadorImprimir < nSub2) {
                process.stdout.write(ContadorImprimir.toString() + "!" + " + ");
            }
            else {
                process.stdout.write(ContadorImprimir.toString() + "!\n");
            }
            ContadorImprimir ++;
    }
    ContadorImprimir = 0;

    //---Calcular factorial---
    let factorial = 1;
    let resultado = 1;
    let contadorFactorial = n;
    let sumatoria = 0;
    let arrayFactorial = [];

    //---Contador externo para calcular cada factorial----
    while (contadorFactorial >= 0) { 
        contadorFactorial--;

        while(factorial <= n) {
            resultado = factorial * resultado;
            factorial ++;
        }

        //---Acumulando resultados---
        sumatoria = sumatoria + resultado;
        arrayFactorial.push(resultado);

        factorial = 1;
        resultado = 1;
        n--
    }
    //---Imprimir resultados factoriales---
    arrayFactorial.reverse();
    process.stdout.write("= ");
    while(ContadorImprimir <= nSub2) {
        if (ContadorImprimir < nSub2) {
            process.stdout.write(arrayFactorial[ContadorImprimir] + "!" + " + ");
        }
        else {
            process.stdout.write(arrayFactorial[ContadorImprimir] + "!");
        }
        ContadorImprimir ++;
    }
    process.stdout.write("= " + sumatoria);
}
CalcularFactorial()