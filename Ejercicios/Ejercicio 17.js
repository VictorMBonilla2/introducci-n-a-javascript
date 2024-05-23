fetch('ejercicio17json.json')
  .then(response => response.json())
  
  .then(datos => {
    console.log(datos.Nombre);
    console.log(datos.te_gusta);
  }).catch(error => {
    console.error(error);
  })




