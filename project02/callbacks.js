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

console.log('Iniciando proceso...');
saludoAsincrono('Victor', function(nombre){
    adiosAsincrono(nombre, function(){
        console.log('Terminando proceso...');
    })
});