async function asincrono() {
  let promesa = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Operacion completada")
    }, 1000);
  })

  let texto = await promesa;
  return texto
}

asincrono().then((result) => alert(result));