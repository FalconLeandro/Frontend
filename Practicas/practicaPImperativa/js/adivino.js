// ¿Cual es el número secreto?
// Creemos una función que reciba un parámetro numérico, y verifique si el mismo es el
// número secreto. El número secreto deberá ser seleccionado de manera random de
// entre 1 y 10 (investiga que hace la función Math.random()), en caso de ser correcto
// retorna un mensaje felicitando al usuario, y en caso de que no acierte, retorna un
// mensaje de aliento junto con el número ingresado y el secreto.

function adivino(numUsuario) {
    let numSecreto = Math.floor(Math.random() * 10) + 1;
    if (numUsuario===numSecreto) {
        return 'Felicitaciónes, acertaste';
    } else {
        return 'La proxima será... Tu número ingresado fué: ' + numUsuario + ' y el número secreto era: ' + numSecreto
    }
}
console.log(adivino(1))

