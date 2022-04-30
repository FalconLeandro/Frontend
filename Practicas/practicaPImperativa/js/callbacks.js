// Pasar un callback
// Vamos a crear tres funciones y ver cómo empezar a trabajar con callbacks.

// La primera función se llamará doble. Esta recibirá un número y retornará el doble.

// La segunda función se llamará triple. Esta recibirá un número y retornará el triple.

// La tercera función se llamará aplicarCallback y recibirá por parámetro un numero y una función. Esta retornará el valor de aplicar dicha función al valor que recibió.

let doble = num => num*2;
let triple = num => num*3;
let aplicarCallback = (num,callback) => callback(num);
console.log(aplicarCallback(5,triple)); 