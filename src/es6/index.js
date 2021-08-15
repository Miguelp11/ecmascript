// Parametros por defecto 
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

// Concatenacion
let hola = "Hola";
let mundo = "Mundo";
let fraseEpica= hola+" "+mundo;
console.log(fraseEpica);

// Templated literals o template strings ES6
let fraseEpica2= `${hola} ${mundo}`;
console.log(fraseEpica2);

// Multilineas 
let lorem = "lorem asda ererasd asdasdasd asdasdas \n"
+ "otra frase epica";
// Multilineas en ES6
let lorem2 = `esto es una frase epica
Esto es una nueva frase eqpica`;

console.log(lorem);
console.log(lorem2);

// Destructuracion 
let persona = {
    nombre: "miguel",
    edad: 21,
    pais: "MX"
}
console.log(persona.nombre,  persona.edad, persona.pais);

// Destructuracion ES6
let {nombre, pais} = persona;
console.log(nombre, pais);

// Arreglos
let equipo1 = ["oscar", "ricardo", "juan"];
let equipo2 = ["valeria", "jessica", "camila"];

let educacion = ["David", "oscar", "ricardo", "juan","valeria", "jessica", "camila"]
// Spread operator ES6
let educacion1 = ["David", ...equipo1, ...equipo2];
console.log(educacion1);

// Variables con var, que su scope es de forma global
{
    var globalVar = "variable global";
}

{
    // Let su scope es de bloque o de funcion ES6
    let globalLet = "variable let global";
    console.log(globalLet);
}

console.log(globalVar);

// const almacena un valor constante y no puede ser reasignado ES6
const a = "b";
a = "a";
console.log(a);