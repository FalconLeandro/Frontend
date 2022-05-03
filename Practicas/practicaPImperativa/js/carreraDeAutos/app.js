const jsonHelper = require('./equipo.js');
let equipoBis = jsonHelper.leer('listado.json');

console.log(equipoBis.piloto[0]);