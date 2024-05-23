function findIndex(array, callback) {
  let newArray = [];
  let result = array.findIndex(callback);

  newArray.push(result);

  return newArray;
}

let array = [3,1,7,8];
let newArray = [];

function callback(numero) {
  if (numero % 2 == 0) {
    return true;
  }
}
let result = findIndex(array, callback);
console.log(result)
