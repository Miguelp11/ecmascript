// ES7 sale en junio del 2016
// Se agrega includes() para buscar un elemento en un arreglo o en un string, anteriormente se usaba indexOf y un codigo mas complejo para realizar esta busqueda
let numeros = [1,2,3,6,8];

if(numeros.includes(32)){
    console.log("Si se encuentra")
}else{
    console.log("NO se encuentra ");
}

// Calcular potencias de un numero **
let base = 4;
let exponente= 4;
let potencia = base ** exponente;

console.log(potencia);