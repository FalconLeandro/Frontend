// Primero vamos a crear una matriz de 2x2 con Js.
// ¿Cómo accedo al valor almacenado en 1-1?
// ¿Cómo puedo cambiar el valor almacenado en 1-0?
// Probemos ahora crear matrices que no sean cuadradas, ¿como lo haríamos?
// Sugerencia: te recomendamos que uses console.table() en vez de console.log() para poder visualizar mejor la matriz.



// let arrayMatriz = []
// let arrayX=["x0","x1"]
// let arrayY=["y0","y1"]
// arrayMatriz[0] = arrayX
// arrayMatriz[1] = arrayY
// console.table(arrayMatriz)

// console.log(arrayMatriz[1][1]); 

// arrayMatriz[1][0]='papa';
// console.table(arrayMatriz);

//mesa de trabajo

/**
 * Declara una variable que contenga una matriz
 * de 5x5 llena de puros numeros enteros y positivos
 */


function crearMatriz(filas,columnas) {
    let matriz=new Array(filas);
    for (let i = 0; i < 5; i++) {
        matriz[i]=new Array(columnas);
    }
    console.table(matriz);
    return matriz
}

let matrizCreada = crearMatriz(12,6)


function llenarMatriz(matriz) {
    
    for (let i = 0; i < matriz.length; i++) {
        for (let j = 0; j < matriz[i].length; j++) {
            matriz[i][j]=Math.floor(Math.random()*10)
        }
    }
    console.table(matriz);
    return matriz
}
let matrizLlena = llenarMatriz(matrizCreada);

function sumarElementos(arr) {
    let acumulador = 0;
    for (let i = 0; i < arr.length; i++) {
        acumulador += arr[i].reduce((a,b)=>a+b);
    }
    return acumulador
}
let totalSuma = sumarElementos(matrizLlena);
console.log(totalSuma);


/**
 * Luego, escribe un algoritmo para sumar todos
 * los numeros en la matriz.
 */