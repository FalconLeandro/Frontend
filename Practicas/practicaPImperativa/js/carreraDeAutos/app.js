// 1. Obtener el listado de posibles participantes
// Tomando como base el siguiente archivo JSON,
// ● Leer el archivo utilizando el módulo correspondiente de Node
// ● Parsearlo utilizando las herramientas que te provee Javascript
// ● Guardar el listado en una variable
// Resultado esperado: variable conteniendo un array con todos los autos.

const { log } = require('console');
const jsonHelper = require('./equipo.js');
let autos = jsonHelper.leer('listado.json');

// 2. Crear un objeto literal que represente la carrera
// Este objeto literal, que podemos llamar carrera, será nuestra representación de
// la carrera (valga la redundancia) con su datos (propiedades) y sus
// funcionalidades (métodos).

// A. Agregar una propiedad llamada autos que contenga los autos obtenidos
// en el punto anterior.

// B. Agregar una propiedad llamada autosPorTanda que contenga el valor 6.
// Este valor representará la cantidad máxima de autos por tanda.

// C. Agregar un método autosHabilitados, que retorne todos los autos
// habilitados, es decir, aquellos que no estén sancionados.
// ○ Este método no recibirá ningún parámetro.
// ○ Este método devolverá un array con los autos que estén habilitados
// para correr.

// D. Agregar un método listarAutos que reciba como parámetro un array de
// autos e imprima por consola la siguiente información:
// ○ El nombre piloto
// ○ La placa o patente del auto
// ○ El peso del auto
// ○ El estado del piloto
// i. “sancionado” → si sancionado es true
// ii. “habilitado” → si sancionado es false
// Resultado esperado al ejecutar el método: un mensaje por consola por
// cada auto con el siguiente formato:
// Piloto: ______, patente: ______, peso en kg: ______, estado: ______.
// Ejemplos:
// Piloto: Leandro Ezequiel, patente: ABC123, peso en kg: 267, estado: habilitado.
// Piloto: Esteban Piazza , patente: EFG567, peso en kg: 357, estado: sancionado.

// E. Agregar un método buscarPorPatente que permita buscar el auto en
// función de su patente.
// ○ Este método recibirá por parámetro un string que represente la
// patente a buscar
// ○ En caso de encontrar un auto con la patente buscada, devolverá el
// objeto literal que lo representa.
// ○ En caso contrario devolverá undefinded

// F. Agregar un método buscarPorCilindrada que permite filtrar los autos
// habilitados, siempre y cuando su propiedad cilindrada sea menor o igual
// a la cilindrada enviada como argumento.
// ○ Este método recibirá por parámetro un number que represente la
// cilindrada máxima a buscar.
// ○ Este método devolverá un array con todos los autos que cumplan
// con la condición mencionada.
// ○ En caso de no encontrar ningún auto, devolverá un array vacío.
// ○ Este método debe usar autosHabilitados para buscar incluir
// solamente aquellos autos que estén habilitados.

// G. Agregar un método ordenarPorVelocidad que ordene los autos de
// menor a mayor según su velocidad.
// ○ Este método no recibirá ningún parámetro.
// ○ Este método devolverá un array con todos los autos ordenados por
// velocidad.
// Recordemos que Javascript tiene un método para hacer justamente lo que
// necesitamos 😉.

carrera = {
    autos:autos,
    autosPorTanda:6,
    autosHabilitados:function (){
        let habilitados = this.autos.filter((auto)=>auto.sancionado==false);
        return habilitados;
    },
    listarAutos:function(){
        this.autos.forEach(function(auto){
            let estado;
            if (auto.sancionado==true) {
                estado='Sancionado';
            } else {
                estado='Habilitado';
            }
            console.log('Piloto: ' + auto.piloto + ', patente: ' + auto.patente + ', peso en kg: ' + auto.peso + ', estado: '+ estado);
        })
    },
    buscarPorPatente:function(patente) {
        let resultadoBusqueda = this.autos.find((auto)=>auto.patente===patente);
        return resultadoBusqueda;
    },
    buscarPorCilindrada:function(num) {
        
        let autosDentroDelRango = this.autosHabilitados().filter((auto)=>auto.cilindrada<=num);
        return autosDentroDelRango
    },
    ordenarPorVelocidad:function() {
        // let listaOrdenada = this.autos.map(function(elemento) {
        //     return autos.elemento.velocidad.sort();
        // });
        // return listaOrdenada.sort();
        let listaOrdenada = this.autos.sort((a, b) => {
            return a.velocidad - b.velocidad;
        });
        return listaOrdenada;

    }
}

console.log(carrera.ordenarPorVelocidad());