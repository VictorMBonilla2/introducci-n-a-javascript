
const objetoOriginal = {};

const manipulador = {
  set(target, propiedad, valor) {
   
    if (propiedad === "numerico" && !Number.isNaN(Number(valor))) {
      target[propiedad] = Number(valor);
    } else if (propiedad === "alfanumerico" && /^[a-zA-Z]+$/.test(valor)) {
      target[propiedad] = valor;
    } else if (
      propiedad === "email" &&
      /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(valor)
    ) {
      target[propiedad] = valor;
    } else if (propiedad === "fecha" && !Number.isNaN(Date.parse(valor))) {
      target[propiedad] = new Date(valor);
    } else {
      console.error(`Error: Valor no válido para la propiedad "${propiedad}"`);
    }
    return true; 
  },
};


const proxy = new Proxy(objetoOriginal, manipulador);


proxy.numerico = "123";
proxy.alfanumerico = "abc"; 
proxy.email = "correo@example.com"; 
proxy.fecha = "2023-05-10"; 


proxy.numerico = "abc"; 
proxy.alfanumerico = "123"; 
proxy.email = "invalido"; 
proxy.fecha = "no_es_fecha"; 
