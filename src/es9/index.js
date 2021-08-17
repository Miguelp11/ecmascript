// ES9 junio del 2018
// operador de reposo, extraer las propiedas de un objeto que aun no se ha construido, extraemos solo el valor que queramos y lo demas del objeto se queda construido
const objeto = {
    name: "miguel",
    edad: 27,
    pais: "mx",
}

let {pais, ...all} = objeto;
console.log(pais);
console.log(all);

// propiedades de propagacion, unir n elementos de un objeto a otro objeto
const objeto1 = {
    name: "miguel",
}

const objeto2 = {
    ... objeto1,
    pais: "mx",
}

console.log(objeto2);

// final promise, nos permite ejecutar un bloque de codigo al terminar la respuesta de una promesa
const HolaMundo = ()=>{
    return new Promise((resolv, reject)=>{
        (true)
        ? setTimeout(()=> resolv("hola mundo"), 3000)
        : reject(new Error("test error"))
    });
}

HolaMundo()
.then(response => console.log(response))
.catch(error => console.log(error))
.finally(()=> console.log("finalizo"))

// mejoras en expresiones regulares, podemos agrupar bloques al manipular regex y acceder a ellos
const regexInfo = /([0-9]{4})-([0-9]{2})-([0-9]{2})/
const match = regexInfo.exec("2021-08-16");
const ano = match[1];
const mes = match[2];
const dia = match[3];

console.log(ano, mes , dia);
