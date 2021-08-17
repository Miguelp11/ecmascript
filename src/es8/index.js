// ES8 Junio del 2017
// Object.entries devuelve las propiedades [clave y valor] en una matriz

const data = {
    front: "oscar",
    back: "juan",
    diseno: "ana"
}

const entries = Object.entries(data);
console.log(entries);
console.log(entries.length);

// object.values devuelve los valores de un objeto a un arreglo
const data1 = {
    front: "oscar",
    back: "juan",
    diseno: "ana"
}

const values = Object.values(data1);
console.log(values);
console.log(values.length);

// padding agrega texto al principio o al final de un string
let string = "hola";
console.log(string.padStart(7, "Hi"));
console.log(string.padEnd(12, ' ------'));

// Trailing-comas podemos poner una coma al final que establece que al siguiente puede haber un valor o no y no lo marca como un error, por lo que no pasa nada
const obj ={
    nombre: "miguel",
}

// asinc y await
const holaMundo = ()=>{
    return new Promise((resolve, reject)=>{
        (true)
        ? setTimeout(resolve("Hola mundo"), 3000)
        : reject(new Error("test error"))
    });
}

const asyncHola = async ()=>{
    const hola = await holaMundo();
    console.log(hola);
}

asyncHola();

// forma propuesta para manejar de forma correcta los errores
const otraFuncion = async ()=>{
    try {
        const hola = await holaMundo();
        console.log(hola);
    } catch (error) {
        console.log(error);
    }
}

otraFuncion();