const colors = require("colors");

const argv = require("yargs")
  .option("b", {
    alias: "base",
    type: "number",
    demandOption: true,
    describe: "es la base de la tabla de multiplicar".bgGreen,
  })
  .check((argv, option) => {
    if (isNaN(argv.b)) {
      throw "la base tiene que ser un numero";
    }
    return true;
  })
  .option("l", {
    alias: "listar",
    type: "boolean",
    default: false,
    demandOption: true,
    describe: "se encarga de listar la tabla creada".bgGreen,
  })
  .option("h", {
    alias: "hasta",
    type: "number",
    demandOption: false,
    describe: "indica que se establecera un limite hasta donde multiplicar",
  })
  .check((argv, option) => {
    if (isNaN(argv.h)) {
      console.log("debe ingresar un numero!!");
    }
    return true;
  }).argv;

module.exports = argv;
