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

var apellido: string = "Monterrubio";
const PI: number = 3.1416;

var variableAny: any = 20;
variableAny = "cadena";

var error: boolean;
error = false;

console.log(`Hay error? ${error}`);

// Instanciación múltiple de variables

let a: string, b: boolean, c: number;

a = "Typescript";
b = true;
c = 9;

// - Tipos de datos más complejos

// Lista de cadenas de texto
let listaTareas: string[] = ["Tarea 1", "Tarea 2"];

// Combinación de tipos en listas
let valores: (string | number | boolean)[] = [false, true, 20, "Hola"];

// Enumerados
enum Estados {
  "Completo" = "C",
  "Incompleto" = "I",
  "Pendiente" = "P",
}

let estadoTarea: Estados = Estados.Completo;

enum Puestos {
  "Primero" = 1,
  "Segundo",
  "Tercero",
}

let tercerPuesto: Puestos = Puestos.Tercero;

console.log(tercerPuesto);

// Interfaces

interface Tarea {
  nombre: string;
  estado: Estados;
  puesto: Puestos;
}

let tarea1: Tarea = {
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
let { nombre, estado, puesto } = miTarea

console.log(`La tarea: ${nombre} está en estado: ${estado} y en el puesto ${puesto}`)

// operador ...
let compraLunes: string[] = ["Huevo", "Leche"];
let compraMartes: string[] = [ ...compraLunes, "Arroz"];

console.log(compraLunes);
console.log(compraMartes);

let user = {
  usuario: "admin",
  session: 3,
  jwt: "Bearer123456789"
}

let nuevoUser = {
  ...user,
  session:4
}

console.log(`Session: ${nuevoUser.session}`)

// Types de Typescript

type Producto = {
  nombre: string;
  precio: number;
  año: number;
};

let coche: Producto = {
  nombre: "Audi",
  precio: 500,
  año: 2010,
};

// - Condicionales

// Operadores ternarios
console.log(
  coche.año < 2010
    ? `Coche: ${coche.nombre} es viejo`
    : `Coche: ${coche.nombre} es nuevo`
);

// If - else if - else
if (error) {
  console.log("Hay un error");
} else {
  console.log("No hay error");
}

if (coche.año < 2010) {
  console.log("El coche es viejo");
} else if (coche.año === 2010) {
  console.log("El coche es del 2010");
} else {
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

let listaTareasNueva: Tarea[] = [
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
for (let i: number = 0; i < listaTareasNueva.length; i++) {
  console.log(listaTareasNueva[i].nombre);
}

// ForEach
listaTareasNueva.forEach((element, index) =>
  console.log(`${index} - ${element.nombre}`)
);

// Map
listaTareasNueva.map((element: Tarea, index: number) =>
  console.log(`${index} - ${element.nombre}`)
);

let count: number = 0

// While
while(count < 5){
  console.log(count)
  count ++
}

// Do While
do{
  console.log(count)
  count ++
}while(count < 10)

