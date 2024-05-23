function find(array, callback) {
 
  let newArray = [];
  let result = array.find(callback);

  newArray.push(result);

  return newArray;
}

let array = [2, 3, 4 ,5 ,6 ,7 ,8];
let newArray = [];

function callback(numero) {
  if (numero % 2 == 0) {
    return true;
  }
}
let result = find(array, callback);

console.log(result)

