const target = { message1: "hello", message2: "everyone" };

// Definimos un manipulador vacío
const handler = {};

// Creamos el proxy
const proxy = new Proxy(target, handler);

// Accedemos a las propiedades del proxy
console.log(proxy.message1); // hello
console.log(proxy.message2); // everyone
