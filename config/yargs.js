const opts = {
    base: {
        demand: true,
        alias: 'b'
    },
    limite: {
        alias: 'l',
        default: 10
    }
}

const argv = require('yargs')
    .command('listar', 'Imprime en consola la tabla de multiplicacion', opts)
    .command('crear', 'Crea un archivo de texto con la tabla de multipliacion', opts)
    .help()
    .argv;

module.exports = {
    argv
}