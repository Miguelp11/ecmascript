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

// crear objetos con variables
let nombre= "miguel";
let edad = 27;

const obj = { name: nombre, age: edad }
console.log(obj);

// ES6
const obj2= {nombre, edad}
console.log(obj2);

// Funciones
const nombres = [
    {name: "Miguel", age: 27},
    {name: "Jesica", age: 32}
]

let listaDeNombres= nombres.map(function (item) {
    console.log(item.name);
});
// Funcion anonima de flecha ES6
let listaDeNombres2 = nombres.map(item => console.log(item.name));

// Funcion de flecha con parametros
let listaDeNombres3 = (nombre, edad, pais)=>{
    // codigo de la funcion
}

// Funcion de flecha con un parametro
let listaDeNombres4 = param => {

}

// funcion de flecha con un parametro y una sola linea de codigo, LAS FUNCIONES DE FLECHA retornan un valor 
const cuadrado = num => num * num;

// Promesas (algo va a pasar) sustituyen las cascadas de callbacks que podian extenderse mucho
const holaPromesa = ()=>{
    return new Promise((resolve, reject) =>{ 
        if (false){
            resolve("hey!")
        }else{
            reject("Ups")
        }
    });
}

holaPromesa().then(response => console.log(response)) //then permite obtener la respuesta se puede agregar mas de 1
.catch(error => console.log(error)); //catch muestra el error en caso de que no se pueda cumplir la promesa

// Clases
class Calculadora {
    constructor(){
        this.valorA = 0;
        this.valorB = 0;
    }
    suma (valorA, valorB){
        this.valorA = valorA;
        this.valorB = valorB;
        return this.valorA + this.valorB;
    }
}

const calc = new Calculadora();

console.log(calc.suma(2,6));

// import y export trabajando con modulos
import {hola} from "./modulo";
// import para node
const hola = require("./modulo");

hola();

// Generadores es una funcion especial que retorna una serie de valores segun el algoritmo

function* holaMundo(){
    if(true){
        yield "Hola, " //yield retorna
    }
    if (true){
        yield "Mundo"
    }
}

const generadorHola = holaMundo();

console.log(generadorHola.next().value);
console.log(generadorHola.next().value);
console.log(generadorHola.next().value);