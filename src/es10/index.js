// ES10 junio del 2019
// flat nos devuelve una matriz aplana y como argumento recibe el nivel de profundidad que queremos mostrar
let arreglo = [1,2,3, [1,2,3, [1,2,3]]];
console.log(arreglo.flat());
console.log(arreglo.flat(2));

//flatmap mapea cada elemento se la pasa una funcion y se aplana
let arreglo2 = [1,2,3,4,5];
console.log(arreglo2.flatMap(valor => [valor, valor*2]));

// trimstart elimina los espacios en blanco iniciales de un string
let hola = "      hola";
console.log(hola);
console.log(hola.trimStart());

// trimend elimina los espacios en blanco finales de un string
let hola1 = "hola mundo    "
console.log(hola1);
console.log(hola1.trimEnd());

// try catch ahora es posible pasar el error sin declararlo en el catch
try {
    
} catch { //antes } catch (error) {
    error;
}

// from entries, convierte un arreglo en un objeto clave , valor
let entradas = [["name", "miguel"], ["edad", "23"]];
console.log(Object.fromEntries(entradas));

// mysimbol permite regresar la descripcion de un objeto de tipo symbolo
let mySimbol = "Mi Simbolo";
let symbol = Symbol(mySimbol);
console.log(symbol.description);