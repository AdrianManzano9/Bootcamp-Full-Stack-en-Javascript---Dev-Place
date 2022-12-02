class Empleado extends Persona{
añoIncorporacion;
numDespacho;
constructor(nombre, apellido, dni, estCivil,año,numDespacho){
    super(nombre, apellido, dni, estCivil);
    this.añoIncorporacion=año;
    this.numDespacho=numDespacho;
}
asigNumDespacho(num){
this.numDespacho=num;
}
}