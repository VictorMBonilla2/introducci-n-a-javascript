let i = 0;

setTimeout(() => {
  console.log(i);
}, 100);
//asumimos que el tiempo para ejecutar esta funcion es > 100ms
for (let j = 0; j < 100000000; j++) {
  i++;
}


//El alert mostrara 100000000, que es el valor final de la iteracion.