class Estudiante extends Persona {
    curso;
    constructor(nombre, apellido, dni, estCivil, curso) {
        super(nombre, apellido, dni, estCivil);
        this.curso = curso;
    }
    matriculacion(curso) {
        this.curso = curso;
    }
}