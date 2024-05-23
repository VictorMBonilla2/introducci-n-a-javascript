function some(array, callback) {
  let newArray = [];
  let result = array.some(callback);

  newArray.push(result);

  return newArray;
}

let array = [3,4];
let newArray = [];

function callback(numero) {
  if (numero % 2 == 0) {
    return true;
  }
}

let resut= some(array, callback);
console.log (resut)