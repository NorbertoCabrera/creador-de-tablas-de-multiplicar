const { crearArchivo } = require("./helpers/multiplicar");
const argv = require("./config/yargs");
const colors = require("colors");

console.clear();

crearArchivo(argv.b, argv.l, argv.h)
  .then((mensajeCreado) => console.log(mensajeCreado.bgCyan, "exito!!".bgRed))
  .catch((err) => console.log(err));
