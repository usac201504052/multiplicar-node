// requireds
const fs = require('fs'); // Ya viene con node
const colors = require('colors');
//const fs = require('express');  // Exterior a node
//const fs = require('./fs');     // Archivos que nosotros mismos escribimos 

let listarTabla = (base, limite = 10) => {

    console.log('===================='.green);
    console.log(`    Tabla del ${base}`.green);
    console.log('===================='.green);
    for (let i = 1; i <= limite; i++) {
        mul = base * i;
        console.log(`${base} * ${i} = ${mul}`);
    }
}

let crearArchivo = (base, limite = 10) => {
    return new Promise((resolve, reject) => {

        if (!Number(base)) {
            reject(`El valor ${base} no es un numero`);
            return;
        }

        let data = '';

        for (let i = 1; i <= limite; i++) {
            mul = base * i;
            data += `${base} * ${i} = ${mul}\n`;
        }

        fs.writeFile(`tablas/tabla-${base}.txt`, data, (err) => {
            // Se recibe un error, y si existe se mostrara
            if (err)
                reject(err)
            else
                resolve(`tabla-${base}`);
        });
    });
}

module.exports = {
    crearArchivo,
    listarTabla
}