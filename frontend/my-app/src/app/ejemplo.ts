// ejemplo typescript
// hay 2 tipos de types:
// interface
// type

type Nombre = string | number;

interface Usuario {
    nombre: string,
    calle: string,
    altura?: number | string
}

let something: Nombre = "messi";
let numerito: number = 42;

something.concat()

let auca: Usuario = { nombre: "Auca Coyan", calle: "maestro sanchez", altura: 1234}

function imprimirDireccion(user: Usuario) {
    if (user.altura == undefined) {
    console.log("el usuario", user.nombre, "vive en", user.calle)
    } else {
    console.log("el usuario", user.nombre, "vive en", user.calle, " ", user.altura)
    }
}

let vecino: Usuario = { nombre: "Pedro", calle: "Panamericana Km 21"}
