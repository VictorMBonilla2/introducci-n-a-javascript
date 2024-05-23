function every(array, callback) {
  let newArray = [];
  let result = array.every(callback);

  newArray.push(result);

  return newArray;
}

let array = [2,4,6,8,10];
let newArray = [];

function callback(numero) {
  if (numero % 2 == 0) {
    return true
  }
  
}
let result= every(array, callback);
console.log(result)