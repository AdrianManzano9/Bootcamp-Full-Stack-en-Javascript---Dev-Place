class Persona {
    nombre;
    edad;
    DNI;
    constructor() {

    }
    set nombre(nombre) {
        if(nombre==""){
            console.log("Necesito un nombre");
        } else{
            this.nombre = nombre;
        }
    }
    get nombre() {
        return this.nombre;
    }
    set edad(edad) {
        if(nombre==""){
            console.log("Necesito una edad");
        } else{
        this.edad = edad;
        }
    }
    get edad() {
        return this.edad;
    }
    set DNI(DNI) {
        if(DNI=="null" || DNI.lenght<8){
            console.log("DNI invalido");
        } else{
        this.DNI = DNI;
        }
    }
    get DNI() {
        return this.DNI;
    }

    mostrar(){
        console.log("Nonbre: "+this.nombre+"  Edad: "+this.edad+"  DNI: "+this.DNI);
    }
    esMayorDeEdad(){
        return this.edad >= 18;
    }
}