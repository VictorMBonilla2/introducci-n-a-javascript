const promise1 = Promise.resolve(33); // Se resuelve de inmediato, con valor 33
const promise2 = new Promise((resolve) => setTimeout(() => resolve(66), 1000)); // Se resuelve después de 1 segundo, con valor 66
const promise3 = Promise.reject(new Error("¡Hubo un error!")); // Se rechaza de inmediato

Promise.allSettled([promise1, promise2, promise3])
  .then((results) => {
    console.log(results);
    // Ejemplo de resultado:
    // [
    //   { status: 'fulfilled', value: 33 },
    //   { status: 'fulfilled', value: 66 },
    //   { status: 'rejected', reason: Error: ¡Hubo un error! }
    // ]
  })
  .catch((error) => {
    console.error("Error al obtener el estado de las Promises:", error);
  });
