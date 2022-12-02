/*1 - Supongamos que un banco ofrece distintos productos a sus clientes (CuentaCorriente, CajaAhorro, SeguroDeVida, SeguroHogar). 
 Realizar el método Object. assign(), utilizando el patrón de diseño Prototype, para realizar la copia de cualquiera de estos productos. */

class CuentaCorriente {
  monto;
  interes = 0.1;
  constructor(interes, monto) {
    this.interes = interes;
    this.monto = monto;

  }
  clone() {
    return new CuentaCorriente(this.interes, this.monto)
  }
}
class CajaAhorro {
  monto;
  interes = 0.2;
  constructor(interes, monto) {
    this.interes = interes;
    this.monto = monto;

  }
  clone() {
    return new CuentaCorriente(this.interes, this.monto)
  }
}
class SeguroDeVida {
  monto;
  interes = 0.25;
  constructor(interes, monto) {
    this.interes = interes;
    this.monto = monto;

  }
  clone() {
    return new CuentaCorriente(this.interes, this.monto)
  }
}
class SeguroHogar {
  monto;
  interes = 0.35;
  constructor(interes, monto) {
    this.interes = interes;
    this.monto = monto;

  }
  clone() {
    return new CuentaCorriente(this.interes, this.monto)
  }
}

/*2 - Supongamos que vamos a crear una oficina para una empresa determinada y estamos seguros que solo 
compraremos esa sola. La oficina tendrá un nombre y una cantidad fija de empleados. 
Si intento crear una segunda oficina me debería devolver la primera instancia creada. 
Aplicar el patron de diseño Singleton y explicar que principio SOLID es contrario a este patrón de diseño. */

// let _singleton = null;

class Oficina {
  constructor(nombre, empleados) {
    this.nombre = nombre;
    this.empleados = empleados;
    if (typeof Oficina.instance === "object") {
      return OficinaDistrito.instance;
    } else {
      Oficina.instance = this;
      return this;
    }
  }
}
const of = new Oficina("duglas", 30);
console.log(of);
const of2 = new Oficina("duglas", 50);
console.log(of2);



class OficinaDistrito {
  constructor(nombre, empleados) {
    this.nombre = nombre;
    this.empleados = empleados;
    if (typeof OficinaDistrito.instance === "object") {
      return OficinaDistrito.instance;
    } else {
      OficinaDistrito.instance = this;
      console.log("se registró una oficina nueva");
      return this;
    
    }
  }

  verEmpleados() {
    return this.empleados;
  }
}
/*3 - Supongamos que tienes una Pizzeria y que tus Pizzas pueden o no tener queso, tomate, masa fina y ananá.
 Cada pizza es customizable y se adapta segun esos parametros a lo que pide el cliente.
 Crear una clase pizza y un método diferente por cada argumento que necesitamos pasarle al constructor
 devolviendo this en cada uno de ellos.  Instanciar todos los valores por defecto que querra nuestro cliente
 de los ingredientes de nuestra pizza. Utilizar el metodo build para crear una nueva instancia de pizza.
 Aplicar el patron de diseño builder. Realizar este mismo ejercicio sin aplicar el patron de diseño builder.
 Que pasa si solo quiero llamar a los métodos queso y tomate? Supongamos que un cliente pide solo ese tipo
 de pizza.*/



// const news = new OficinaDistrito("duglas", 30);
// console.log(news);
// const news2 = new OficinaDistrito("duglas", 50);
// console.log(news2);
/* 4 - Supongamos que tengo 3 manzanas pero se diferencian 
cada una de su color (la primera es amarilla, la segunda 
  roja y la tercera verde) y de su fecha de vencimiento 
  (la primera vence en 5 dias, 
    la segunda en 7 dias y la tercera en 10 dias). 
    Para no instanciar cada sub clase de manzanas de 
    manera separada crear la clase AppleFactory y 
    dependiendo de los parámetros mandados, 
    va a hacer una instancia de objeto. Aplicar el patrón 
    de diseño Factory Method.
*/



//Vehiculos cars(pequeños)  Trailers(camionetas)
class cars {
  constructor(parametros) {
    this.color = parametros.color;
    this.puertas = parametros.puertas;
  }
}
class Trailers {
  constructor(parametros) {
    this.color = parametros.color;
    this.puertas = parametros.puertas;
  }
}

class FactoryCars {
  create = (parametros, tipoCars) => {
    if (!tipoCars) {
      return "Error";
    }
    let vehiculo;
    if (tipoCars === "car") {
      vehiculo = new cars(parametros);
    } else if (tipoCars === "trailers") {
      vehiculo = new Trailers(parametros);
    }
    vehiculo.tipo = tipoCars;

    return vehiculo;
  };
}

// const vehiculoFactory = new FactoryCars();
// const car1 = vehiculoFactory.create(
//   {
//     color: 2,
//     puerta: 4
//   },
//   "car"
// );
// const car2 = vehiculoFactory.create(
//   {
//     color: 2,
//     puerta: 4
//   },
//   "trailers"
// );
