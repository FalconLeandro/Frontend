var contadorLeandroide = 0;
var contadorUsuario = 0;
var jugarDeNuevo = true;
var nombreUsuario ='';
alert('Bienvenido a mi primer juego pedorro: Piedra, papel y tijera');
nombreUsuario=prompt('¿Cuál es tu nombre?');
do {
    do {
        let numUsuario = prompt("Elegí una opción " + nombreUsuario +  ":\n1. Piedra\n2. Papel\n3. Tijera                                           4. Salir");
        if (numUsuario == 1) {
            alert("Elegiste Piedra");
        } else if (numUsuario == 2) {
            alert("Elegiste Papel");
        } else if (numUsuario == 3) {
            alert("Elegiste Tijera");
        } else if (numUsuario == 4) {
            alert("Adios! :(");
            break;
        } else {
            alert("Formato ingresado invalido");
        }
      
        let numSecreto = parseInt(Math.random() * 3 + 1);
        if (numSecreto == 1) {
          alert("Leandroide eligió Piedra");
        } else if (numSecreto == 2) {
          alert("Leandroide eligió Papel");
        } else if (numSecreto == 3) {
          alert("Leandroide eligió Tijera");
        }
      
        if (numUsuario == 1 && numSecreto == 1) {
          alert("Empate");
        } else if (numUsuario == 1 && numSecreto == 2) {
          alert("Perdiste! Papel envuelve a Piedra");
          contadorLeandroide++;
        } else if (numUsuario == 1 && numSecreto == 3) {
          alert("Ganaste! Piedra rompe Tijera");
          contadorUsuario++;
        } else if (numUsuario == 2 && numSecreto == 1) {
          alert("Ganaste! Papel envuelve a Piedra");
          contadorUsuario++;
        } else if (numUsuario == 2 && numSecreto == 2) {
          alert("Empate");
        } else if (numUsuario == 2 && numSecreto == 3) {
          alert("Perdiste! Tijera corta Papel");
          contadorLeandroide++;
        } else if (numUsuario == 3 && numSecreto == 1) {
          alert("Perdiste! Piedra rompe Tijera");
          contadorLeandroide++;
        } else if (numUsuario == 3 && numSecreto == 2) {
          alert("Ganaste! Tijera corta Papel");
          contadorUsuario++;
        } else if (numUsuario == 3 && numSecreto == 3) {
          alert("Empate");
        }
        alert(contadorUsuario + ' a ' + contadorLeandroide);
    } while (contadorLeandroide < 3 && contadorUsuario < 3 && jugarDeNuevo==true);

    if (contadorLeandroide>=contadorUsuario) {
        alert('Perdiste el juego ' + nombreUsuario + ', Leandroide gana');
    } else {
        alert('Ganaste el juego ' + nombreUsuario + ', Leandroide pierde');
    }
    contadorLeandroide=0;
    contadorUsuario=0;
    jugarDeNuevo=confirm('Queres jugar de nuevo?')
} while (jugarDeNuevo==true);