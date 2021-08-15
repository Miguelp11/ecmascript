// Parametros por defecto antes de ES6
function nuevaFuncion(nombre, edad, localidad){
    var nombre = nombre || "Miguel";
    var edad = edad || 24;
    var localidad = localidad || "MX";
    console.log(nombre, edad, localidad);
}

// Parametros por defecto ES6
function nuevaFuncion2(nombre="Miguel", edad=24, localidad="MX"){
    console.log(nombre,edad, localidad);
}

nuevaFuncion2();
nuevaFuncion2("cansino",12,"CH");

// Concatenacion antes de ES6
let hola = "Hola";
let mundo = "Mundo";
let fraseEpica= hola+" "+mundo;
console.log(fraseEpica);

// Templated literals o template strings ES6
let fraseEpica2= `${hola} ${mundo}`;
console.log(fraseEpica2);