const lista = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

async function procesarElementos() {
  for (const elemento of lista) {
    // Realiza alguna operación asincrónica con el elemento
    await procesarElemento(elemento);
  }
}

async function procesarElemento(elemento) {
  // Simula una operación asincrónica (por ejemplo, una llamada a una API)
  await new Promise((resolve) => setTimeout(resolve, 1000));
  console.log(`Procesado elemento ${elemento}`);
}

procesarElementos();
