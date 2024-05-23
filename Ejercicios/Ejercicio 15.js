async function asincrono() {
  let promesa = new Promise((resolve, reject) => {
    setTimeout(() => {
      reject("Promise rechazada");
    }, 1000);
  });

  try {
    let texto = await promesa;
    return texto;
  } catch (err) {
    return err;
  }
}

asincrono()
  .then((result) => alert(result))
