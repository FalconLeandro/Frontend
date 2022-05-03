// const fs = require('fs');
// let listadoJson = fs.readFileSync(__dirname + '/listado.json', 'utf-8');
// let listadoJs = JSON.parse(listadoJson);
// console.log(listadoJs);

const fs = require('fs');
const jsonHelper = {
    leer : function (archivo) {
        let contenido = fs.readFileSync(__dirname + '/' + archivo, 'utf-8');
        return JSON.parse(contenido);
    }
}
module.exports = jsonHelper;