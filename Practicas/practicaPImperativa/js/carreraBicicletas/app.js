// const jsonHelper = require('../equipo');
// let bicicletas = jsonHelper.leer('/carreraBicicletas/listado.json');

// carrera= {
//     bicicletas:bicicletas,
// }
// console.log(carrera.bicicletas);
const jsonHelper = require('../equipo');
let bicicletas = jsonHelper.leer('/carreraBicicletas/listado.json');

// C. Agregar un método ciclistasHabilitados que devuelva una lista donde los
// ciclistas tengan un dopaje negativo.
// ○ Este método no recibirá ningún parámetro.
// ○ Este método devolverá un array con los autos que estén habilitados
// para correr.

// D. Agregar un método listarBicicletas que reciba como parámetro un array
// de ciclistas e imprima por consola la siguiente información:
// ○ El nombre ciclista
// ○ El peso de la bicicleta
// ○ El largo de la bicicleta
// ○ El estado del ciclista
// i. “inhabilitado” → si dopaje es true
// ii. “habilitado” → si dopaje es false

// E. Agregar un método buscarPorId que permita buscar un ciclista en
// función de su id.
// ○ Este método recibirá por parámetro un number que represente el
// id a buscar
// ○ En caso de encontrar un ciclista con el id buscado, devolverá el
// objeto literal que lo representa.
// ○ En caso contrario devolverá undefinded

// G. Agregar un método ordenarPorRodado que ordene las bicicletas de
// menor a mayor según su rodado.
// ○ Este método no recibirá ningún parámetro.
// ○ Este método devolverá un array con todos las bicicletas ordenadas
// por rodado.
// Recordemos que Javascript tiene un método para hacer justamente lo que
// necesitamos 😉.

carrera={
    bicicletas:bicicletas,
    bicicletasPorTanda:4,
    ciclistasHabilitados: function() {
        let habilitados = this.bicicletas.filter(bicicleta=>bicicleta.dopaje==false);
        return habilitados;
    },
    listarBicicletas: function() {
        
        this.bicicletas.forEach(bicicleta => {
            let estado;
            if (bicicleta.dopaje==false) {
                estado='habilitado';
            } else {
                estado='inhabilitado';
            };
            console.log('Ciclista: ' + bicicleta.ciclista + ', marca: ' + bicicleta.marca + ', rodado: ' + bicicleta.rodado + ', peso: ' + bicicleta.peso + 'kg, largo: ' + bicicleta.largo + ', estado: ' + estado);
        });
    },
    buscarPorId: function(id) {
        let resultadoBusqueda= this.bicicletas.find(bicicleta=>bicicleta.id==id)
        return resultadoBusqueda;
    },
    buscarPorRodado:function(rodado) {
        let tanda = this.ciclistasHabilitados().filter(bicicleta=>bicicleta.rodado==rodado);
        return tanda;
    },
    ordenarPorRodado:function() {
        let listaOrdenada= this.bicicletas.sort((a,b)=> a.rodado - b.rodado);
        return listaOrdenada;
    }
    
}
console.log(carrera.ordenarPorRodado());