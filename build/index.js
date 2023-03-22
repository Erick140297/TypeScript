"use strict";
// Esto es un comentario
// Declaración de variables inferidas
var miNombre = "Erick";
let email = "erickmonterrubio67@gmail.com";
const Pi = 3.1416;
// Concatenanción de cadenas
console.log("Hola, " + miNombre);
console.log("Hola,", miNombre);
console.log(`Hola, ${miNombre}`);
// Tipos de datos primitivos: number, string, boolean, void, null y undefined
// Declaración de variables con tipo
var apellido = "Monterrubio";
const PI = 3.1416;
var variableAny = 20;
variableAny = "cadena";
var error;
error = false;
console.log(`Hay error? ${error}`);
// Instanciación múltiple de variables
let a, b, c;
a = "Typescript";
b = true;
c = 9;
// - Tipos de datos más complejos
// Lista de cadenas de texto
let listaTareas = ["Tarea 1", "Tarea 2"];
// Combinación de tipos en listas
let valores = [false, true, 20, "Hola"];
// Enumerados
var Estados;
(function (Estados) {
    Estados["Completo"] = "C";
    Estados["Incompleto"] = "I";
    Estados["Pendiente"] = "P";
})(Estados || (Estados = {}));
let estadoTarea = Estados.Completo;
var Puestos;
(function (Puestos) {
    Puestos[Puestos["Primero"] = 1] = "Primero";
    Puestos[Puestos["Segundo"] = 2] = "Segundo";
    Puestos[Puestos["Tercero"] = 3] = "Tercero";
})(Puestos || (Puestos = {}));
let tercerPuesto = Puestos.Tercero;
console.log(tercerPuesto);
let tarea1 = {
    nombre: "Tarea 1",
    estado: Estados.Pendiente,
    puesto: Puestos.Primero,
};
// - Factor Spread (Propagación)
let miTarea = {
    nombre: "Tarea 2",
    estado: Estados.Pendiente,
    puesto: Puestos.Segundo,
};
// Destructuring 
let { nombre, estado, puesto } = miTarea;
console.log(`La tarea: ${nombre} está en estado: ${estado} y en el puesto ${puesto}`);
// operador ...
let compraLunes = ["Huevo", "Leche"];
let compraMartes = [...compraLunes, "Arroz"];
console.log(compraLunes);
console.log(compraMartes);
let user = {
    usuario: "admin",
    session: 3,
    jwt: "Bearer123456789"
};
let nuevoUser = Object.assign(Object.assign({}, user), { session: 4 });
console.log(`Session: ${nuevoUser.session}`);
let coche = {
    nombre: "Audi",
    precio: 500,
    año: 2010,
};
// - Condicionales
// Operadores ternarios
console.log(coche.año < 2010
    ? `Coche: ${coche.nombre} es viejo`
    : `Coche: ${coche.nombre} es nuevo`);
// If - else if - else
if (error) {
    console.log("Hay un error");
}
else {
    console.log("No hay error");
}
if (coche.año < 2010) {
    console.log("El coche es viejo");
}
else if (coche.año === 2010) {
    console.log("El coche es del 2010");
}
else {
    console.log("El coche es nuevo");
}
// Switch
switch (tarea1.estado) {
    case Estados.Completo:
        console.log("La tarea está completada");
        break;
    case Estados.Incompleto:
        console.log("La tarea está incompleta");
        break;
    case Estados.Pendiente:
        console.log("La tarea está pendiente");
        break;
    default:
        break;
}
// - Bucles
let listaTareasNueva = [
    {
        nombre: "Tarea 1",
        estado: Estados.Completo,
        puesto: Puestos.Primero,
    },
    {
        nombre: "Tarea 2",
        estado: Estados.Incompleto,
        puesto: Puestos.Segundo,
    },
    {
        nombre: "Tarea 3",
        estado: Estados.Pendiente,
        puesto: Puestos.Tercero,
    },
];
// For
for (let i = 0; i < listaTareasNueva.length; i++) {
    console.log(listaTareasNueva[i].nombre);
}
// ForEach
listaTareasNueva.forEach((element, index) => console.log(`${index} - ${element.nombre}`));
// Map
listaTareasNueva.map((element, index) => console.log(`${index} - ${element.nombre}`));
let count = 0;
// While
while (count < 5) {
    console.log(count);
    count++;
}
// Do While
do {
    console.log(count);
    count++;
} while (count < 10);
