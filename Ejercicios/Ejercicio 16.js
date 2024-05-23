function asincrono1() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("Operación 1 completada");
      resolve(1);
    }, 1000);
  });
}

function asincrono2(resultadoAnterior) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("Operación 2 completada");
      resolve(resultadoAnterior + 4);
    }, 1000);
  });
}

function asincrono3(resultadoAnterior) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("Operación 3 completada");
      resolve(resultadoAnterior+5 );
    }, 1000);
  });
}
asincrono1()
  .then((resultado1) => {
    return asincrono2(resultado1);
  })
  .then((resultado2) => {
    return asincrono3(resultado2);
  })
  .then((resultadoFinal) => {
    console.log("Resultado final:", resultadoFinal);
  })
  .catch((error) => {
    console.error("Error:", error);
  });
