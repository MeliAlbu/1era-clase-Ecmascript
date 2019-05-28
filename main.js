const nombre = "Ada";
const profesion = "programadora";
console.log() // completá el código acá



// 3. Utilizá template literals para actualizar y mejorar el siguiente código. Además, 
//cambia var por let o const siguiendo los criterios vistos antes.

var personaje = 'Batman';
var identidad = 'Bruce Wayne';

var oracion = 'La identidad secreta de ' + personaje + ' es ' + identidad.toUpperCase() + '.';

console.log( oracion );
// "La identidad secreta de Batman es BRUCE WAYNE."




// 4. Utilizá template literals para actualizar y mejorar el siguiente código. Además, cambia var por let o const siguiendo los criterios vistos antes.

var nombreUsuario = 'Grace';
var idUsuario = 2;
var espacioUsado = 10;
var espacioTotal = 11;
var url = 'https://drive.google.com/' + idUsuario + '/buy';
var email = '¡Hola, ' + nombreUsuario + '!\n' +
'Estás utilizando el ' + (espacioUsado / espacioTotal * 100) + '% de tu espacio.\n' +
'Solo te quedan ' + (espacioTotal - espacioUsado) +' GB.\n' +
'\n' +
'Podés comprar más espacio ingresando al a siguiente dirección: ' + url + '\n' +
'\n' +
'Saludos,\n' +
'Google';