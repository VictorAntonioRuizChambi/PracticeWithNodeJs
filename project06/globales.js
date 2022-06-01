console.log(global);
console.log(setInterval);

setInterval(function() {
    console.log('Hola');

}, 1000);

let i=0;
let interval = setInterval(function() {
    console.log('se viene clearInterval');
    if(i === 3){
        clearInterval(interval);
    }
    i++;
}, 1000);

setImmediate(function(){
    console.log("Hola inmediato");
});

console.log(process);
console.log(__dirname);
console.log(__filename);
global.mivariable = 'valor de mi variable';


console.log(global.mivariable);
console.log(mivariable);