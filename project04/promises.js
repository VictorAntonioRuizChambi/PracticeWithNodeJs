function hola(nombre){
    return new Promise(function(resolve, reject){
        setTimeout(function(){
            console.log('Hola estimado '+ nombre);
            resolve(nombre+ ' el Grande');
        }, 1500);
    });
}

function hablar(nombre){ 
    return new Promise((resolve, reject) =>{
        setTimeout(function(){
            console.log('Bla bla bla bla...');
            //resolve(nombre);
            reject('Ha habido un error en el proceso');
        },1000);
    }) 
}

function adios(nombre){
    return new Promise((resolve, reject) => {
        setTimeout(function(){
            console.log('Adios estimado ' + nombre);
            resolve(nombre);
        }, 1000);
    })
}

/* Primera Forma
console.log('Iniciando el proceso...');
hola('Victor').then((nombre_devuelto) => {
    console.log('Terminado el proceso ' + nombre_devuelto);
    
});
*/

/*SEGUNDA FORMA*/

console.log('Iniciando el proceso...');
hola('Victor')
    .then(hablar)
    .then(hablar)
    .then(adios)
    .then((nombre_devuelto) => {
    console.log('Terminado el proceso ' + nombre_devuelto);
    
})
.catch(error => {
    console.error('Ha habido un error:');
    console.error(error);
});
