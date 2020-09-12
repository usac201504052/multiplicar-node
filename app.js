const argv = require('./config/yargs').argv;
const colors = require('colors');

// Para usar la funcion sin necesidad de un objeto => const { nombreFuncion }
const { crearArchivo, listarTabla } = require('./multiplicar/multiplicar')

// Para recibir parametros desde la terminal
// Si no se envia el parametro, no funcionara
//let argv2 = process.argv;
// let parametro = argv[2];
// let base = parametro.split('=')[1];
console.log(argv);

let comando = argv._[0];

switch (comando) {
    case 'listar':
        listarTabla(argv.base, argv.limite);
        break;

    case 'crear':
        crearArchivo(argv.base, argv.limite)
            .then(archivo => console.log(`Archivo creado: ${archivo.green}`))
            .catch(e => console.log(e));
        break;

    default:
        console.log('Comando no reconocido');

}