const hola = ()=>{
    return console.log("hola");
}

export default hola;

// ES6 aun no es sintaxis oficial en node, para exportar con node es necesario la sigueinte sintaxis
module.exports = hola;