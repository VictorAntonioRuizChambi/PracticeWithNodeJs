function otrafuncion(){
    serompe();
}

function serompe(){
    return 3 + z;
}

function seRompeAsincrona(cb) {
    setTimeout(function() {
        try {
            return 3 + z;
        }catch(err){
            console.error('Error en mi función asincrona');
            cb(err);
        }
        
    })
}

try {
    //otrafuncion();
    seRompeAsincrona(function(err){
        console.log(err.message);
    });
} catch(err){
    console.error('Vaya, algo se ha roto...');
    console.error(err.message);
    console.error(err);
    console.log('Pero no pasa nada, lo hemos capturado');
}
console.log('esto de aqui está al final');

