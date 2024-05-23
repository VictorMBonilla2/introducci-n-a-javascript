let lista = [];
const exprRegular = /A/;
fetch('ejercicio18json.json')
  .then(response => response.json())

  .then(datos => {
    let datoss= Object.values(datos)
    for (const item of datoss) {

      if (exprRegular.test(item)) {
        console.log(item);
      }
    }

  }).catch(error => {
    console.error(error);
  })




