class NIF {
    dni;
    letra;

    constructor() {
        this.dni = 0;
        this.letra = "";
    }
    constructor(dni) {
        this.dni= dni;
      letas["T","R","W","A","G","M","Y","F","P","D","X","B","N","J","Z","S","Q","V","H","L","C","K","E"];
      this.letra=letra[dni%24];
    }
    mostrarNif(){
        console.log("Nif: "+this.dni+"-"+this.letra)
    }
}