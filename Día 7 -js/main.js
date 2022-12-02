// {
//     let num = new Array(15, 2, 35, 4, 5, 16, 7, 8, 10);
//     let list = "lista: "
//     num.forEach(element => {
//         if(element > 10){
//         lista += elemento + " ,";
//         alert(lista);
//     }
//     numeros.forEach((num) => {
//         if (num > 10) {
//           console.log(num);
//         }
//       });
// function mayorQue(n) { return m => m > n; } 
// let mayorQue10 = mayorQue(10); 
// alert (mayorQue10)
// alert(mayorQue10(11)); 
// {
// function aMenosQue(prueba, entonces) {
//     if(!prueba) entonces();
// }

// repetir(3, n => {
//     aMenosQue(n % 2 == 1, () => {
//         console.log(n, "es par");
//     });
// });
// }

// {
 let meses = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"]

.forEach(function(mes,i,meses){
    alert((1+i)+": "+mes);
 })

//     meses.forEach(mes => {
//         console.log(mes);
//     });
//     console.log(meses)
// }

// {
//     let numero = prompt("Ingresar número")
//     if(pariedad(numero)){
//         alert("Es par")
//     }else{
//         alert("Es impar")
//     }
// }
// function pariedad (num){
// return num%2 == 0
// }


// {
    // let frase = prompt("Ingresar frase")
    // mayMin(frase);
// }
// function mayMin(frase) {
//     let min = false;
//     let may = false;

//     for (let i = 0; i < frase.length; i++) {
//         if (frase.charAt(i) === frase.charAt(i).toLowerCase()) {
//             min = true;
//         }
//         if (frase.charAt(i) === frase.charAt(i).toUpperCase()) {
//             may = true;
//             let cMay
//         }
//         if (min & may) {
//             alert("Mezcla de mayusculas y minisculas")
//             return;
//         }
//     }
//     if (may) {
//         alert("Son mayusculas");
//     } else if (min) {
//         alert("Son minusculas");
//     } else {
//         alert("Error");
//     }

// }

// {
// let num = prompt("Numero a factoriar")
// let total = 1;
// for(let i=1;i<=num;i++){
// total*=i;
// }
// alert(total);
// }