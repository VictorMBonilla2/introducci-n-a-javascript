let i = 0;

setTimeout(() => {
  console.log(i)
}, 100);


for (let j = 0; j < 100000000; j++) {
  i++
}

/* a) Despues del bucle 

El alert mostrara 100000000, que es el valor final de la iteracion.

Esto es debido a que Js trabaja de forma asincrona con un solo hilo, y deja al setTimeout ejecutanose sin interrumpir el programa. Cuando se ejecuta el for se ocupa este hilo realizando este proceso, el cual al ser pesado es lento, Al estar el hilo ocupado, el resto de proceso entre en una cola de espera.

*/