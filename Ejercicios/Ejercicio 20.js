async function crearPromises() {
  const delay1 = new Promise((resolve) => setTimeout(resolve, 1000)); // Resuelve después de 1 segundo
  const delay2 = new Promise((resolve) => setTimeout(resolve, 2000)); // Resuelve después de 2 segundos
  const delay3 = new Promise((resolve) => setTimeout(resolve, 3000)); // Resuelve después de 3 segundos

  await Promise.all([delay1, delay2, delay3]);
  console.log("¡Todas las Promises se han resuelto!");
}

crearPromises();
