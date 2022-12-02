// let json = JSON.stringify(persona)

// let nomb = prompt("Ingresar nombre");
// let apell = prompt("Ingresar apellido");
// let bColor = prompt("Ingresar color de fondo");
// let fColor = prompt("Ingresar color de letra");
// let fSize = prompt("Ingresar tamaño de letra");

// localStorage.setItem("nomb",nomb);
// localStorage.setItem("apell",apell);
// localStorage.setItem("bColor",bColor);
// localStorage.setItem("fColor",fColor);
// localStorage.setItem("fSize",fSize);


// h2 = document.createElement("h2");
// h2.textContent= nomb+" "+apell;
// h2.style="background-color: " +bColor+"; color: "+ fColor+"; font-size: "+ fSize;
// document.body.appendChild(h2);


// calc=(operacion,num1,num2)=>{
// switch(operacion){
//     case "suma" : console.log( num1 + num2); break;
//     case "resta" : console.log( num1 - num2); break;
//     case "multiplicación" : console.log( num1 * num2); break;
//     case "división" : console.log( num1 / num2); break;
// }
// }


/*-Realizar un programa que permita ingresar por teclado 10 números en un array debe:

Mostrar el número mayor
Mostrar el número menor
Mostrar los números pares
Mostrar los números impares
Ordenarlos de manera Ascendente
Ordenarlos de manera Descendente
 */

// let nums=[];
// for (let index = 0; index < 10; index++) {
//     let aux =prompt("Ingresa un numero");
//     nums.push(parseInt(aux));
// }
// console.table(nums)

// // function numMay(){
//     let mayor=0;
//     nums.forEach(n => {
//         if (n>mayor) {
//             mayor=n
//         }
//     });
//     console.log("El mayor es: "+mayor);
// // }

// // function numMen(){
//     let menor=nums[0];
//     nums.forEach(n => {
//         if (n<menor) {
//             menor=n
//         }
//     });
//     console.log("El menor es: "+menor);
// // }

// // function numsPar(){
//     let pares=[];
//     nums.forEach(n => {
//         if (n%2==0) {
//             pares.push(n)
//         }
//     });
//     console.log("Pares: "+pares);
// // }

// // function numsInPar(){
//     let inPares=[];
//     nums.forEach(n => {
//         if (n%2==1) {
//             inPares.push(n)
//         }
//     });
//     console.log("Inpares: "+inPares);
// // }

// // function ordAsen(){
//     nums.sort((a,b)=>a-b)
//     console.log("Ascendente: "+nums);
// // }

// // function ordDes(){
//     nums.sort((a,b)=>b-a)
//     console.log("Descendente: "+nums);
// // }

/*-Se quiere simular un juego en el que participan N jugadores y otra persona que hace de árbitro.
 Cada jugador elige 4 números en el rango [1, 10], pudiendo estar repetidos. A continuación, el árbitro,
  sin conocer los números que ha elegido cada jugador, selecciona 2 números A y B. */


let inputsJug1 = document.querySelectorAll('#jug1 > input');
let inputsJug2 = document.querySelectorAll('#jug2 > input');
let inputsJug3 = document.querySelectorAll('#jug3 > input');
let boton = document.getElementById('enviar');
boton.onclick=()=>{
    inputsJug1.forEach(input =>{
        console.log(input.value);
    }); 
}
