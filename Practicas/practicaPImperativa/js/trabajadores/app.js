const jsonHelper = require(__dirname + "/jsonHelper");
let JsonTrabajadores = jsonHelper.leerJson("trabajadores");

//objeto literal con props y métodos
const catalogTrabajadores = {
  trabajadores: JsonTrabajadores,
  //NO modificar esto
  mostrarUnTrabajador: function (trabajador) {
    console.table({
      [trabajador.id]: {
        nombre: trabajador.nombre,
        oficio: trabajador.oficio,
        honorarios: trabajador.precioConsulta,
        consultas: trabajador.consultasRealizadas,
        matriculado: trabajador.matriculado,
      },
    });
  },
  listarTodos: function (trabajadoresAMostrar) {
    let datos = [];
    for (let i = 0; i < trabajadoresAMostrar.length; i++) {
      datos.push(this.traerUnTrabajador(trabajadoresAMostrar[i]));
    }
    console.table(datos);
  },
  traerUnTrabajador: function (trabajador) {
    return {
      nombre: trabajador.nombre,
      honorarios: "$" + trabajador.honorarioConsulta,
      oficio: trabajador.oficio,
      matriculado: trabajador.matriculado,
    };
  },
  //fin de NO modificar
  //tu código a partir de aquí...
  //...

}; 

console.log("\n****** mostrar todos los trabajadores *****");
console.log(catalogTrabajadores.trabajadores);

console.log("\n****** punto 1 ¿cuál es la única propiedad del objeto literal? *****");
console.log('trabajadores: JsonTrabajadores,')

console.log("\n****** punto 2 ¿cómo se denomina a las funciones dentro de un obj literal? *****");
console.log('Metodos')

console.log("\n****** punto 3 mostrar un trabajador *****");
console.log(mostrarUnTrabajador())

console.log("\n****** punto 4 Listar habilitados ******");
console.log('Tu respuesta')

console.log("\n****** punto 5 Buscar por Nombre ******");
console.log('Tu respuesta')

console.log("\n****** punto 6 Incrementar Precio de la Consulta ******");
console.log('Tu respuesta')