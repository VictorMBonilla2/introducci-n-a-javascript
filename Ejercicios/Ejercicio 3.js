function map(array, callback) {
  let arrayNuevo = [];
 let result= array.map(callback)

  arrayNuevo.push(result)

  return result
}

let array = [1, 2, 3, 4, 5, 6, 7, 8];


function duplicar(numero) {
  return numero * 2;
}


let resultado = map(array, duplicar);
console.log(resultado)


