// const nombre = 'Leandro';
// var edad = 35;
// var peso = 85;
// var altura = 1.93;
// var prepaga = false;
// let imc = peso/(altura*altura);

// console.log(nombre +' tiene ' + edad + ' y su índice de masa corporal es de ' + imc)

// function test(x,y){
//     return x*2;
//     console.log(x);
//     return x/2;
// }
// test(10);



/*1. Crear una función que convierta pulgadas en centímetros. Es decir, recibe por
parámetro pulgadas y retorna su equivalente en centímetros.*/
function conversor(numero){
    return numero * 2.54
}
console.log(conversor(1100));


/*2. Crear una función que recibe un string y lo convierte en una URL.
Ejemplo: “pepito” es devuelto como “http://www.pepito.com”.*/

function toUrl(string){
    return 'http://www.' + string + '.com' 
}
console.log(toUrl('leandroide'))

/*3. Crear una función que recibe un string y devuelve la misma frase, pero con
admiración.*/

function admiracion(string){
    return '¡' + string + '!'
}
console.log(admiracion('culo'))

/*4. Crear una función que calcule la edad de los perros, considerando que 1 año
para nosotros son 7 de ellos.*/

function edadPichos(años){
    return años * 7
}
console.log(edadPichos(4))

/*5. Crear una función que calcule el valor de tu hora de trabajo, introduciendo tu
sueldo mensual como parámetro. Considera que tu mes de trabajo tiene 40
horas.*/

function pagoPorHora(sueldo){
    return sueldo/(26*8)
}
console.log(pagoPorHora(120000))


/*6. Crear la función calculadorIMC() que reciba la altura en metros y el peso en
kilogramos y calcule el IMC de una persona. Luego, ejecutar la función
probando diferentes valores.*/

function imcCalc(altura,peso){
    return peso/(altura*altura)
}
console.log(imcCalc(1.93,90))

/* 1. Crear una función que recibe un string en minúscula, lo convierta a
 mayúsculas y lo retorne. Pista: investigá qué hace el método de strings:
 toUpperCase()*/

function toUpper(string){
    return string.toUpperCase() 
}
console.log(toUpper('cacona'))

// 2. Crear una función que recibe un parámetro y devuelve qué tipo de dato
// es ese parámetro. Pista: te servirá revisar qué hace la palabra reservada
// typeof.

function tipoDato(dato){
    return typeof dato
}
console.log(tipoDato('sdfgsdf'))
// 3. Crear una función a la que le pasamos el radio de un círculo y nos
// devuelve la circunferencia. Pista: investigá si el objeto Math tiene entre sus
// propiedades el número pi.

function circun(radio){
    return 2*Math.PI*radio
}
console.log(circun(5))

console.log(Math.random())

// Definir y crear una función es lo mismo, en este caso, definamos una que muestre en
// la consola un saludo. Luego, para poder ejecutarla, debemos invocarla o llamarla. Que
// sea algo así:
// function saludar() {
// console.log("hola, tanto tiempo sin verte.");
// }
// saludar()

// Muy bien, ahora deberemos modificar la función para que tome por parámetro un
// nombre y salude a esa persona cuando el lenguaje la ejecute.

function saludar(name) {
    console.log('hola ' + name +', tanto tiempo sin verte.');
    }
    saludar('Leandro')