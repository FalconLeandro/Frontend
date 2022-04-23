function sumar(num1, num2) {
    return num1 + num2
}
function restar(num1, num2) {
    return num1 - num2
}
function multiplicar(num1, num2) {
    return num1 * num2
}
function dividir(num1, num2) {
    return num1 / num2
}
console.log('--------------Testeo de Operaciones / Calculadora --------------');
console.log(multiplicar(8,8));

// 1. Crear una función que se llame cuadradoDeUnNumero, la cual recibe un número
// como parámetro y deberá retornar ese número elevado al cuadrado.
// Importante: cuadradoDeUnNumero() deberá utilizar la función multiplicar() para
// calcular el cuadrado del parámetro ingresado a potencia()

function cuadradoDeUnNumero(num) {
    return multiplicar(num,num)
}
console.log(cuadradoDeUnNumero(8));

// 2. Crear la función promedioDeTresNumeros, la misma deberá calcular el promedio
// de 3 números, que serán ingresados por parámetro.
// Importante: promedioDeTresNumeros() deberá utilizar algunas funciones
// previamente creadas de nuestra calculadora.

function promedioDeTresNumeros(num1,num2,num3) {
    return dividir((sumar(sumar(num1,num2),num3)),3)
}
console.log(promedioDeTresNumeros(5,2,9));

// 3. Crear la función calcularPorcentaje. Esta recibirá dos parámetros: el número
// total y el porcentaje que se le quiere calcular. Deberá retornar el x% del total.
// Ejemplo: calcularPorcentaje(300, 15) debe retornar 45, ya que es el 15% de 300.
// Importante: calcularPorcentaje() deberá utilizar algunas funciones previamente
// creadas de nuestra calculadora.

function calcularPorcentaje(num,porcentaje) {
    return dividir(multiplicar(num,porcentaje),100)
}
console.log(calcularPorcentaje(300,15));

// 4. Crear una función GeneradorDePorcentaje que recibe dos parámetros y deberá
// retornar el porcentaje del primero con respecto al segundo.
// Ejemplo: GeneradorDePorcentaje(2, 200) deberá retornar 1, ya que 2 es el 1% de
// 200.

function GeneradorDePorcentaje(num1,num2) {
    return multiplicar(dividir(num1,num2),100)
}
console.log(GeneradorDePorcentaje(2,200));
// Crear el código JS que exprese los siguientes enunciados:
// 1. Para subir a una montaña rusa la edad debe ser mayor a 12 años y la altura
// debe ser mayor a 1,30 m.

function sube(edad,altura) {
    return (edad>=12)&&(altura>=1.3)
}
console.log(sube(15,1.2));

// 2. Si no hay suficiente luz o el objeto se mueve rápidamente, la cámara de fotos
// debe usar el flash.

function flash(luz,movimiento) {
    return luz||movimiento
}
console.log(flash(true,true));

// 3. Un estudiante pasa de nivel si su nota es mayor a 7 en sus dos evaluaciones
// parciales, o si obtiene un 4 en el examen final.

function pasa(nota, final) {
    return (nota>=7)||(final>=4)
}
console.log(pasa(7,1));

// MI primer if
// Lograremos con este ejercicio realizar un simple if.

// Declaremos una variable con el nombre dato y asignémosle un valor booleano.

// Luego, deberemos hacer un if que evalúe esa variable y, si el valor es igual a  true, que imprima por consola "es true". Caso contrario, que imprima por consola "es false".

let dato=true;
if (dato==true) {
    console.log('es true');
}else{
    console.log('es false');
}
// En este ejercicio nos viene dada una variable llamada lenguaje, que tiene asignado un string. Nuestro trabajo es construir un condicional if/else para que, si la variable contiene "javascript", imprima por consola el texto "Estoy aprendiendo". De lo contrario, que imprima"Lo aprenderé más adelante".

let lenguaje='javascript' 
if (lenguaje=='javascript') {
    console.log('lo estoy aprendiendo');
} else {
    console.log('lo aprendere mas tarde');
}
// Debemos completar la función puedePasar para que, analizando el nombre que recibe por parámetro, determine si la persona puede pasar o no. Si la persona se llama "Cosme Fulanito"", no lo dejará pasar y lo indicará retornando false; si la persona se llama de otra forma, lo dejará pasar y lo indicará retornando true.

function pasa(name) {
    
    if (name=='cosme fulanito') {
        return true
    } else {
        return false
    }
    
}
console.log(pasa('cosme fulanitx'));

// Revisá el siguiente código y asegúrate de entenderlo para poder avanzar con el
// ejercicio.
// let edad=20 //(el número es a modo de ejemplo, podes cambiarlo o crear otras
// para tener varias pruebas)
// if(edad<18) {
// console.log("No puede pasar al bar.")
// }
// else if(edad<21){
// console.log("Puede pasar al bar, pero no puede tomar alcohol.")
// }
// else{
// console.log("Puede pasar al bar y tomar alcohol.")
// }
// Sin repetirte, modificá tu código de forma tal que cumpla con estas consignas:
// ● Si la edad es negativa, que se muestre en la consola este mensaje: "Error, edad
// inválida. Por favor ingrese un número válido."
// Importante: No se deberá mostrar ningún otro mensaje.
// ● Si tiene 21 años, además de darle la bienvenida, felicitarlo por haber llegado a
// la mayoría de edad.
// ● Si su edad es impar decile en cualquiera de los mensajes: "¿Sabías que tu edad
// es impar?".


function pasaCuliao(edad){
        if(edad<18 && edad>0) {
        console.log("No puede pasar al bar.")
        
        }
        else if(edad<21 && edad>0){
        console.log("Puede pasar al bar, pero no puede tomar alcohol.")
        }
        else if(edad<0){
            console.log('Error, edad inválida. Por favor ingrese un número válido.')
        }
        else{
        console.log("Puede pasar al bar y tomar alcohol. Felicitaciones por haber alcanzado la mayoria de edad")
        }
        if ((edad%2)!=0) {
            console.log('sabias que tue edad es impar?');
        }

}
console.log(pasaCuliao(22));


