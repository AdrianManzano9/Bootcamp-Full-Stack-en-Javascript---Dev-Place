class Persona{
    nombre="Fulanito";
    apellido;
    dni;
    estCivil;

    constructor(nombre, apellido, dni, estCivil){
        this.nombre=nombre;
        this.apellido=apellido;
        this.dni=dni;
        this.estCivil=estCivil;
    }
    cambioEstCivil(estCivil){
        this.estCivil=estCivil;

    }
}