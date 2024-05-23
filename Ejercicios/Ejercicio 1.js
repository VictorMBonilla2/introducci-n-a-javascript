

let array = [1, 2, 3, 4, 5, 6, 7, 8];

console.log(array)


function multiplicacion(x) {
  return x * 2;
}

let result = array.map(multiplicacion)

console.table(result);