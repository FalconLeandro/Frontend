// Estructura for
// Vamos a programar una función que se comporte como un loro. Sí, todo lo que "oye", ¡lo repite!

// La función debe llamarse loro y debe recibir como parámetro el texto y repetirlo 5 veces por consola.

// function loro(texto) {
//     for (let i = 0; i<=4; i++) {
//          console.log(texto);
//     }
//     return texto
// }
// console.log(loro('hola'));

// Estructura for2
// ¡Vamos a crear una función interesante!

// En este ejercicio nuestra tarea es completar la función noParesDeContarImparesHasta. Esta función recibe un número X por parámetro y cuenta la cantidad de números impares que hay desde el número 0 hasta el número X (inclusive) y luego retorna ese valor. Para resolver la ejercitación debemos utilizar el for .

// function noParesDeContarImparesHasta(num) {
//     let contador = 0;
//     for (let i = 0; i <= num; i++) {
//         if (i%2!=0) {
//             contador++;
//             console.log(i);
//         }
//     }
//     return 'Total de ' + contador + ' números impares';
// }
// console.log(noParesDeContarImparesHasta(100));

// Queremos construir una función llamada encontreUn5 que reciba un array como parámetro llamado numeros. La función deberá recorrer este array e imprimir por consola cada uno de los números. En caso de encontrar un 5, deberá cortar la ejecución e imprimir por consola el texto "Se encontró un 5!".

// Para resolver este ejercicios DEBES utilizar el do-while.
// let numeros = [0,1,2,3,4,5,6,7,8,9];

// function encontreUn5(array) {
//     let i = 0;
//     do {
//         console.log(array[i]);
//         i++

//     } while (i!=5);
//     return 'Se encontró un 5'
// }
// console.log(encontreUn5(numeros));

// Ejercicio 2
// Vamos a crear una función y asignarla a una variable!.

// Para este ejercicio te damos la función tablaDeMultiplicar ya definida, la cual recibe un número como parámetro. Queremos que al ejecutarse la función muestre por consola la tabla de multiplicar del 1 al 10 del número que reciba.

// function tablaDeMultiplicar(num) {
//     let i = 1;
//     console.log('--- Tabla del ' + num + ' ---');
//     console.log('');
//        do {
           
//            console.log(num + ' * ' +  i + ' = ' + (num * i));
//            i++
//        } while (i<=10);
// }

// console.log(tablaDeMultiplicar(7));

// 1. Partimos de nuestro array de películas, el cual estaba conformado de la
// siguiente manera:
// let peliculas = ["star wars", "totoro", "rocky", "pulp fiction", "la
// vida es bella"]
// Nos habían solicitado que pasemos todos los elementos a mayúsculas, lo cual
// en su momento lo habíamos hecho de manera “manual”. Ahorá, hagámoslo de una
// forma más automática, utilizando bucles.

// let peliculas = ["star wars", "totoro", "rocky", "pulp fiction", "la vida es bella"];

// function pasarAMayusculas(array) {
//     for (let i = 0; i <= array.length; i++) {
//         array[i] = array[i].toUpperCase();
//     }
//     return array
// }
// console.log(pasarAMayusculas(peliculas));
