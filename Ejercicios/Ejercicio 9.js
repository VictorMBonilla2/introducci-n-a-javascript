function dropWhile(array, callback) {
  let newArray = [];
  let gestor = true;
  for (let i = 0; i < array.length; i++){
    const numero = array[i];

    if (callback(numero) && gestor) {
      continue
    } else {
      gestor = false;
      newArray.push(numero);
    }
  }

  return newArray;
}

let array = [2,4,6,7,8,10];


function callback(numero) {
  if (numero % 2 == 0) {
    return true;
  }
}
let result = dropWhile(array, callback);
console.log(result)

