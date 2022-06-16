//Ejercicio 1:

//Objetos Dentro de Arreglos

/* 
Supongamos que tenemos un Arreglo llamado autos que tiene dos Objetos (un auto marca "Citroen" y otro marca "Honda").
*/

// let autos = [
//   {
//     marca: "Citroen",
//     modelo: "C3",
//     año: 2013,
//     dueño: "Juan",
//     color: {
//       capot: "gris",
//       puertas: "negro",
//     },
//     dueñosAnteriores: [], // Lo compro 0KM
//   },
//   {
//     marca: "Honda",
//     modelo: "Fit",
//     año: 2016,
//     dueño: "Santiago",
//     color: {
//       capot: "rojo",
//       puertas: "rojo",
//     },
//     dueñosAnteriores: ["Jorge", "Iván"],
//   },
// ];

/* 
Santiago le compra el auto a Juan y le pinta el capot a negro.
¿Cómo harías para modificar esas Propiedades?
*/

// autos[0].dueño = 'Santiago';
// autos[0].color.capot = 'Negro';
// autos[0].dueñosAnteriores = 'Juan';

// console.log(autos[0]);

//PREGUNTAS - (solo enviar la opcion que para ustedes es correcta)

/* 
A)
Utilizamos pop() para ...

- Ingresar un elemento en la última posición del array
- Eliminar un elemento ubicado en la primera posición del array
- Ingresar un elemento en la primera posición del array
--> Eliminar un elemento ubicado en la última posición del array */  

/*
B) 
Para encontrar la posición de un elemento dentro de un array, ¿cuál es la instrucción correcta?

--> ["a", "b", "c", "d"].indexOf("c")
- ["a", "b", "c", "d"].getItem("c")
- ["a", "b", "c", "d"].positionOf("c")
- ["a", "b", "c", "d"].get("c")
*/

/*
C) 
¿A qué valor estamos accediendo?

let miArray = ["Ana", "Pedro", "Pablo"]
miArray[miArray.length - 1]

- Ana
- Pedro
--> Pablo
- undefined

*/

/*
D) 
¿Cuál o cuales son las formas correctas de agregarle un nuevo dato a un objeto llamado persona?

--> persona."edad" = 25
- persona['edad'] = 25
- persona.edad = 25
- "persona".edad = 25

*/

/*
E) 
¿Qué se termina mostrando?

let perro = {
    nombre: "Charly",
    edad: 6
}
let key = "nombre"
console.log(perro[key])

- 0
- key
- nombre
--> Charly
*/

/*
F) 
¿Qué se termina mostrando?

let musicos = [
    {
        nombre: "Luca Prodan",
        idiomas: ["Ingles", "Español"]
    },
    {
        nombre: "Luis A. Spinetta",
        idiomas: ["Español"]
    }
]
console.log(musicos[1].idiomas[0])

- undefined
--> Español
- Inglés
- Luca Prodan
*/

/* 
//Ejercicio 2: 

Una funcion multiplicador que tome dos números como Parámetros y devuelva el producto de los dos.

Una funcion resta que tome dos números como Parámetros y devuelva el la resta de los dos.

Una funcion sumador que tome 4 numeros como parametros y te devuelva la suma de los 4. 

*/
function multiplicador(num1,num2) {
  return num1 * num2;
} 
function restador(num1,num2) {
  return num1 - num2;
}
function sumador(num1,num2,num3,num4) {
  return num1 + num2 + num3 + num4;
}
/* 
//Ejercicio 3: 

Giannina necesita necesita comprar todo lo necesario para poder cocinar unas pizzas:

let pizzas = ["harina", "levadura", "queso", "pure de tomates", "cebolla"]

- Agregá dos nuevos productos al final de la lista(lo que le quieras poner a tu pizza).

- Agregá dos productos al principio de tu lista(lo que le faltaria para la salsa).

- Determiná cuán largo es el Arreglo en este momento.

- Sacá un producto y guardalo en una Variable que se llame noHabia.

- Sacá un producto y guardalo en otra Variable que se llame comprado.

- ¿Cuán largo es el Arreglo ahora?

*/
let pizzas = ["harina", "levadura", "queso", "pure de tomates", "cebolla"];
pizzas.push('albahaca');
pizzas.push('cherry');
pizzas.unshift('ajo');
pizzas.unshift('oregano');
console.log(pizzas.length); 
let noHabia = pizzas.pop();
let comprado = pizzas.shift();
console.log(noHabia); 
console.log(comprado);
/* 
//Crear un array VACÍO, que tenga el nombre de autos. 
*/

/*
// Usando estos 3 Objetos
*/
let ford = {
    año	 : 2015,
    color	: "blanco",
    puertas: 5
}
   
let peugeot = {
año	 : 2010,
color	: "rojo",
puertas: 3
}
   
let volkswagen = {
año	 : 2012,
color	: "gris",
puertas: 4
}
/*
//Estos 3 objetos, ahora tenes que pensar como podrias agregarlos al array. (utilizando un método JS, pensa cuál podrías utilizar)
*/

let autos = [];
autos.push(ford);
autos.push(peugeot);
autos.push(volkswagen);
console.log(autos);



/*
// Mostrar por consola el array para ver que contenga esos objetos.


   

/* Tenes que crear una función que reciba el array autos como unico parámetro, e incremente en 3 la cantidad de puertas que van a tener los autos en el futuro con una modificacion, llámala futurosAutos. Debes utilizar una estructura de repetición. */

function futurosAutos(array) {
  for (let i = 0; i < array.length; i++) {
    array[i].puertas += 3;
  }
}
futurosAutos(autos);
console.log(autos);

// - Declarar 3 arrays de edades por ejemplo -> [10, 9, 8, 22, 55, 80, 5, 63, 29, 9] , luego desarrollar las siguientes funciones:
// 1 - Funcion que reciba un array de edades y retorne el promedio 
// 2 - Funcion que reciba un array de edades y retorne el mayor elemento // 80
// 3 - Funcion que reciba un array de edades y retorne el menor elemento // 5
// 4 - Funcion que reciba un array de edades y retorne true si encuentra algun elemento repetido o false caso contrario
// 5 - Funcion que reciba un array de edades y una edada buscar, retorne el primer índice si encuentra coincidencia o null caso contrario
// 6 - Funcion que reciba un array de edades y retorne un objeto literal con dos propiedades que contengan un array
//    {
//       edadesMenor : "// edades menor a 18",  
//       edadesMayor : "// edades menor a 18"
//    }

// nota : Se recomienda utilizar estructuras y conceptos vistos en la materia, pueden resolver con metodos pero tambien de forma imperativa (for if)

let edades = [10, 9, 8, 22, 55, 80, 5, 63, 29, 9];
function promediar(arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  return 'El promedio de todas las edades es: ' + sum / arr.length;
}
console.log(promediar(edades));

function mayor(arr) {
  let mayor = 0;
  for (let i = 0; i < arr.length; i++) {
    if (mayor < arr[i]) {
      mayor = arr[i];
    }
  }
  return 'El mayor es: ' + mayor;
}
console.log(mayor(edades));

function menor(arr) {
  let i = 0;
  let menor = arr[i];
  
  for (i; i < arr.length; i++) {

    if (menor > arr[i]) {
      menor = arr[i];
    }
  }
  return 'El menor es: ' + menor;
};
console.log(menor(edades));

function comparar(arr) {
 let hayRepetidos;
 let numeroRepetido;
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length; j++) {
      if (arr[i]==arr[j]) {
        hayRepetidos = true;
        numeroRepetido = arr[j];
      }else{
        hayRepetidos = false;
      }
      
    }
  }
  return 'Hay repetidos: ' + hayRepetidos  + '\nEs el número: ' + numeroRepetido;
}
console.log(comparar(edades));

function buscar(arr,elemento) {
  let posElemento = arr.indexOf(elemento);
  if ( posElemento != -1) {
    return 'El elemento se encuentra en la posicion: ' + posElemento;
  } else {
    return 'El elemento no existe';
  }
  
}
console.log(buscar(edades, 22));


function mayorMenor(arr) {
  let objetoEdades = {
    edadesMenor:[],
    edadesMayor:[],
  };
  for (let i = 0; i < arr.length; i++) {
    if (arr[i]>18) {
      objetoEdades.edadesMayor.push(arr[i]);
    } else {
      objetoEdades.edadesMenor.push(arr[i]);
    }
  }
  return objetoEdades;
  
}
console.log(mayorMenor(edades));