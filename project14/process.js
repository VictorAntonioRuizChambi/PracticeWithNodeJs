//const process = require('process');


process.on('beforeExit', () => {
    console.log('Ale, el proceso va a terminar');
});

process.on('exit', () => {
    console.log('Ale, el proceso acabó');
    setTimeout(() => {
        console.log('Esto no se va a ver nunca');
    }, 0);
});

setTimeout(() => {
    console.log('Esto si se va a ver');
}, 0);

process.on('uncaughtException', (err, origen) => {
    console.log('Vaya se nos ha olvidado capturar un error');
    setTimeout(() => {
        console.log('Esto viene de las excepciones');
    }, 0);
});

functionQueNoExiste();

console.log('Esto si el error no se recoge, no sale');
//Para promesas que se han rechazado y nadie tiene un catch
//process.on('uncaughtRejection')