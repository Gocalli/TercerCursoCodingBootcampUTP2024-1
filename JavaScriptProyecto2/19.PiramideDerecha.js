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
    Crea una una imagen de un Triangulo a la derecha en la columna 40
     Output:                           A
                                      AA
                                     AAA
                                    AAAA
                                   AAAAA
                                  AAAAAA
                                   AAAAA
                                    AAAA
                                     AAA
                                      AA
                                       A
*/


function triangulo() {
    //Altura de la 1era Mitad del Triangulo
    let Altura = 6;
//Espacio que tiene para dar la impresion de un triangulo
    let espacio = Altura - 1 + 34;
//Numero de triangulos a imprimir
    let Numerito = 1;
//El espacio Definido y al cual se le va a sumar los espacios y las Z
    let Forma = '';
    
    for (let i = 0; i < Altura; i++) {

        for (let j = 0; j < espacio; j++) {

            Forma += ' ';
        }
        for (let j = 0; j < Numerito; j++) {

            Forma += 'A';
        }
        espacio--;

        Numerito += 1;

        console.log(Forma);

        Forma = '';
    }

    espacio = 35;

    Numerito = Altura * 2 - 7;
                                        
                                            
    for (let i = 0; i < Altura - 1; i++) {
        for (let j = 0; j < espacio; j++) {

            Forma += ' ';
        }
        for (let j = 0; j < Numerito; j++) {

            Forma += 'A';
        }
        espacio++;
        Numerito -= 1;
        console.log(Forma);
        Forma = '';
    }

}
triangulo()