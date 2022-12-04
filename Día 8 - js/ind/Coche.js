<<<<<<< HEAD
import {Motor} from 'Motor.js';
import {Ruedas} from 'Ruedas.js';
import {Puerta} from 'Puerta.js';
class Coche extends Motor{
    puertas=[];
    ruedas=[];
    motor;

    constructor(){
      this.motor = new Motor;
        for (let index = 0; index < 4; index++) {
            Rueda = new Rueda();
            this.ruedas.push(this.Rueda);
        }
        for (let index = 0; index <2; index++) {
        Puerta = new Puerta();
        this.puertas.push(Puerta);    
        }
    }


=======
import {Motor} from 'Motor.js';
import {Ruedas} from 'Ruedas.js';
import {Puerta} from 'Puerta.js';
class Coche extends Motor{
    puertas=[];
    ruedas=[];
    motor;

    constructor(){
      this.motor = new Motor;
        for (let index = 0; index < 4; index++) {
            Rueda = new Rueda();
            this.ruedas.push(this.Rueda);
        }
        for (let index = 0; index <2; index++) {
        Puerta = new Puerta();
        this.puertas.push(Puerta);    
        }
    }


>>>>>>> eed8f6816805a5f9779eafa38c5fc1c54b51f99c
}