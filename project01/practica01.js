let nombre = process.env.NOMBRE || 'Sin nombre';
let web = process.env.MI_WEB || 'no tengo web';

// para que salga valor se tiene que ejecutar el siguiente comando
// NOMBRE=Victor node practica01.js  
console.log('Hola '+ nombre);

// para que salga valor se tiene que ejecutar el siguiente comando
// NOMBRE=Victor MI_WEB=vitocho.com node practica01.js 
console.log('Mi web es '+ web);
console.log('Prueba para commit de proyecto:' + web)