const { log } = require('console');
const jsonHelper = require('./equipo.js');
let autos = jsonHelper.leer('listado.json');

carrera = {
    autos:autos,
    autosPorTanda:6,
    autosHabilitados:function (){
        let habilitados = this.autos.filter((auto)=>auto.sancionado==false);
        return habilitados;
    },
    listarAutos:function(){
        
        
        let listado = this.autos.map(function(auto){
            let estado;
            if (auto.sancionado==true) {
                estado='Sancionado';
            } else {
                estado='Habilitado';
            }
            console.log('Piloto: ' + auto.piloto + ', patente: ' + auto.patente + ', peso en kg: ' + auto.peso + ', estado: '+ estado);
        })
        
        return listado;
    },
}

console.log(carrera.listarAutos());