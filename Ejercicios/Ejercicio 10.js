function dropWhile(array, callback) {
  let newArray = [];

  for (let i = 0; i < array.length; i++){
    const numero = array[i];

    if (callback(numero) ) {
      newArray.push(numero);
    } else {
      break;
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
