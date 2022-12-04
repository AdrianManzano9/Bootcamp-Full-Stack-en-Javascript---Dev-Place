class PerDeServicio extends Empleado {
    seccion;

    constructor(nombre, apellido, dni, estCivil, seccion) {
        super(nombre, apellido, dni, estCivil);
        this.seccion= seccion;
    }

    translado(sec) {
        this.seccion = sec;
    }
}

let Empleado = new Empleado();
console.log(Empleado.nombre)
