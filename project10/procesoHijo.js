const { exec, spawn } = require('child_process');
//(esta linea es lo mismo que la linea 1) //const exec = require('child_process').exec;

/*
exec('ls -la', (err, stdout, sterr) => {
    if(err){
        console.error(err);
        return false;
    }

    console.log(stdout);
})

exec('node ../project08/consola.js', (err, stdout, sterr) => {
    if(err){
        console.error(err);
        return false;
    }

    console.log(stdout);
})
*/
let proceso = spawn('ls', ['-la']);
console.log(proceso);
console.log(proceso.pid);
console.log(proceso.connected);

proceso.stdout.on('data', function(dato) {
    console.log('¿Está muerto?');
    console.log(proceso.killed);
    console.log(dato.toString());
});

proceso.on('exit', function(){
    console.log('el proceso terminó');
    console.log(proceso.killed);
})