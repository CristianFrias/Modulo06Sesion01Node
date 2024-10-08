console.log("Primer programa con nodejs");

// console.log("Secuencia de números");
// for (let index = 0; index < 10; index++) {
//     console.log(index);
// }

const peticion01 = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("Respuesta de primera petición")
        }, 8_000);
    })
}

const peticion02 = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("Respuesta de segunda petición")
        }, 3_000);
    })
}


// ** -- Ejemplo Proceso Asíncrono
// peticion01().then((response) => {
//     console.log(response);
// })

// peticion02().then((response) => {
//     console.log(response);
// })
// ** -- Fin Ejemplo Proceso Asíncrono


// ** -- Ejemplo de Función Autoejecutable con proceso síncrono. El await es permitido dentro del async.
// ** -- Proceso secuencial, se hizo la peticion01 después de 08s, se llamó a peticion02 que fueron 03s más = 11s terminar el proceso.
// (async () => {
//     const respuesta01 = await peticion01()
//     console.log(respuesta01);
//     const respuesta02 = await peticion02()
//     console.log(respuesta02);
// })() // al cerrar estos parentesis definen la función y la llaman automaticamente

// ** -- Ejemplo de Promise.all
const respuesta01 = peticion01();
const respuesta02 = peticion02();

Promise.all([respuesta01, respuesta02]).then((response) => {
    console.log(response)
})