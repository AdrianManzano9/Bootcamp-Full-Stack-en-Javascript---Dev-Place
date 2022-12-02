class Profesor extends Empleado{
    departamento;

    constructor(nombre, apellido, dni, estCivil,año,numDespacho,departamento){
        super(nombre, apellido, dni, estCivil,año,numDespacho);
        this.departamento=departamento;


    }
    cambDepartamento(dep){
        this.departamento=dep;
    }
}