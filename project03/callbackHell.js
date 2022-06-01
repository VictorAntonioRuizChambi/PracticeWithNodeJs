function saludoAsincrono(nombre, miCallback){
    setTimeout(function(){
        console.log('Hola estimado '+ nombre);
        miCallback(nombre);
    }, 1000);
}

function adiosAsincrono(nombre, segundoCallback){
    setTimeout(function(){
        console.log('Adios estimado ' + nombre);
        segundoCallback();
    }, 1000);
}

function hablar(callback){
    setTimeout(function(){
        console.log('Bla bla bla bla...');
        callback();
    },1000);
}

function conversacion(nombre, veces, callback){
    if ( veces > 0 ) {
        hablar(function(){
            conversacion(nombre, --veces, callback);
        })
    } else {
        adiosAsincrono(nombre, callback);
    }
}


console.log('Iniciando proceso...');
saludoAsincrono('Victor', function(nombre){
    conversacion(nombre, 3,function(){
            console.log('Terminando proceso...');
        });
});