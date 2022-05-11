let numUsuario = prompt('Elegí una opción:\n 1. Piedra\n2.Papel\n3.Tijera');
if (numUsuario==1) {
    alert('Elegiste Piedra')
} else if (numUsuario==2) {
    alert('Elegiste Papel')
} else if (numUsuario==3) {
    alert('Elegiste Tijera')
};

let numSecreto= parseInt(Math.random()*3+1);
if (numSecreto==1) {
    alert('Leandroide eligió Piedra')
} else if (numSecreto==2) {
    alert('Leandroide eligió Papel')
} else if (numSecreto==3) {
    alert('Leandroide eligió Tijera')
}; 
if (numUsuario==1 && numSecreto==1) {
        alert('Empate')
    } else if (numUsuario==1 && numSecreto==2) {
        alert('Perdiste! Papel envuelve a Piedra')
    } else if (numUsuario==1 && numSecreto==3) {
        alert('Ganaste! Piedra rompe Tijera')
    } else if (numUsuario==2 && numSecreto==1) {
        alert('Ganaste! Papel envuelve a Piedra')
    } else if (numUsuario==2 && numSecreto==2) {
        alert('Empate')
    } else if (numUsuario==2 && numSecreto==3) {
        alert('Perdiste! Tijera corta Papel')
    } else if (numUsuario==3 && numSecreto==1) {
        alert('Perdiste! Piedra rompe Tijera')
    } else if (numUsuario==3 && numSecreto==2) {
        alert('Ganaste! Tijera corta Papel')
    } else if (numUsuario==3 && numSecreto==3) {
        alert('Empate')
};
    
    