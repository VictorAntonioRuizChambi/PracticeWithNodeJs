console.log('Algo')
console.error('Error')
console.warn('warning')

var tabla =  [
    {
        a: 1,
        b: 'Z'
    },
    {
        a: 2,
        b: 'B'
    }
]
console.table(tabla)
console.group('Conversacion');
console.log('Hola');
console.group('bla');
console.log('Blablabla');
console.log('Blablabla');
console.log('Blablabla');
console.groupEnd('bla');
console.log('Blablabla');
console.log('Adios');
console.groupEnd('Conversacion');

console.log('otra cosa de otra funcion')

function function1(){
    console.group('funcion 1');
    console.log('Esto es de la función 1');
    console.log('Esto también');
    console.log('Esto también');
    function2();
    console.log('Hemos vuelto a la funcion 1');
    console.groupEnd('funcion 1');
}

function function2(){
    console.group('funcion 2');
    console.log('ahora estamos en la funcion 2');
    console.groupEnd('funcion 2');
}

console.log('Empezamos');
function1();

console.count('veces');
console.count('veces');
console.count('veces');
console.count('veces');
console.count('veces');
console.count('veces');
console.countReset('veces');
console.count('veces');
console.count('veces');