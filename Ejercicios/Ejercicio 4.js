function filter(array, callback) {
  let newArray = [];
  let result = array.filter(callback)

  newArray.push(result)

  return newArray
}

let array = [1, 2, 3, 4, 5, 6, 7, 8];


function callback(numero) {
  if (numero % 2 == 0) {
    return true
  }
}
let resultado= filter(array, callback);
console.log(resultado)
