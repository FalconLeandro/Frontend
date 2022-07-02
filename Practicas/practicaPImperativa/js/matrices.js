
// //********MATRIZ MACHINE by Leandroide*************

// //Función para crear matriz:
// function crearMatriz(filas,columnas) {
//     let matriz=new Array(filas);
//     for (let i = 0; i < filas; i++) {
//         matriz[i]=new Array(columnas);
//     }
//     return matriz
// }

// let matrizCreada = crearMatriz(10,10) //<--Acá podés configurar la cantidad de filas y columnas de tu matriz (filas,columnas)

// //Función para llenar matriz (con números enteros positivos):
// function llenarMatriz(matriz,llenadoAleatorio,rango) {
//     let acumulador = 1;
//     for (let i = 0; i < matriz.length; i++) {
//         for (let j = 0; j < matriz[i].length; j++) {
//             if (llenadoAleatorio === true) {
//                 matriz[i][j]=Math.floor(Math.random()*rango)
//             } else {
//                 matriz[i][j]=acumulador++
//             }
//         }
//     }
//     console.table(matriz);
//     return matriz
// }
// let matrizLlena = llenarMatriz(matrizCreada,true,10); //<--Si querés llenado aleatorio pasale true como segundo parametro, y como tercero el rango de números. Ejemplo: llenarMatriz(array,true,10) mostrará tu array (ya definido) relleno con números aleatorios entre 1 y 10

// //Función para sumar los valores de los elementos de tu matriz:
// function sumarElementos(matriz) {
//     let acumulador = 0;
//     for (let i = 0; i < matriz.length; i++) {
//             acumulador += matriz[i].reduce((a,b)=>a+b);
//     }
//     return 'Suma de los valores de todos los elementos: ' + acumulador
// }
// console.log(sumarElementos(matrizLlena)); 


function ordenAlfabetico(lista) {
    lista.sort((a,b) => {
        if (condition) {
            
        } else {
            
        }
    })
}


