const fs = require("fs");

const crearArchivo = async (base = 5, l = false, h = 10) => {
  try {
    let salida = "";

    if (h != 10) {
      for (let i = 0; i <= h; i++) {
        let resultado = base * i;
        // console.log(a, " x ", i, " = ", resultado);
        salida += `${base} x ${i} = ${resultado}\n`;
      }
    } else {
      for (let i = 0; i <= 10; i++) {
        let resultado = base * i;
        // console.log(a, " x ", i, " = ", resultado);
        salida += `${base} x ${i} = ${resultado}\n`;
      }
    }

    if (l) {
      console.log("===================".rainbow);
      console.log(`Tabla del ${base}`.bgCyan.underline);
      console.log("===================".rainbow);
      console.log(salida.cyan);
    }

    fs.writeFileSync(`./salida/tabla-${base}.txt`, salida);
    return "tabla creada correctamente";
  } catch (error) {
    throw error;
  }
};

module.exports = {
  crearArchivo,
};
