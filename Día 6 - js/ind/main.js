<<<<<<< HEAD
// {
//     let IVA = prompt("Iva: ");
//     let Precio = prompt("Precio: ")
//     let total = Precio + (IVA * Precio);
//     alert("A pagar: " + total);
// }
// {
//     let cred = promp("Creditos: ");
//     switch (cred) {
//         case "1": alert("Puede acceder a las sala: Consolas");
//         case "2": alert("Puede acceder a las sala: Consolas, Juegos 2D");
//         case "3": alert("Puede acceder a las sala: Consolas, Juegos 2D, Juegos 3D");
//         case "4": alert("Puede acceder a las sala: Consolas, Juegos 2D, Juegos 3D, Realidad Virtual");

//     }
// }
// {
//     let elec = prompt("Elige el tipo de auto: ");
// if (elec == "1" | elec == "gasolina") {
//     alert("Dirijase a la oficina numero 100");
// } else if (elec == "2" | elec == "diesel") {
//     alert("Dirijase a la oficina numero 200");
// } else if (elec = "3" | elect == "electrico") {
//     alert("Dirijase a la oficina numero 300");
// } else {
//     alert("Tipo no encontrado");
// }

//     switch (elec) {
//         case "1" | case "gasolina":
//             alert("Dirijase a la oficina numero 100");
//             break;

//         case "2" | "diesel":
//             alert("Dirijase a la oficina numero 200");
//             break;

//         case "3" | "electrico":
//             alert("Dirijase a la oficina numero 300");
//             break;

//         default:
//             alert("Tipo no encontrado");

//     }
// }
// {
//     let comp = prompt("Total de compra")
//     if(comp<100){
//         alert("Total a pagar: "+comp);
//     }else if(comp<300){
//         alert("Total a pagar: "+comp*0.95) ;
//     }else if(comp<400){
//         alert("Total a pagar: "+comp*0.90) ;
//     }else{
//         alert("Total a pagar: "+comp*0.85) ;
//     }
// }
// {
//     let num = prompt("Ingrese un numero");
//     let list = "Lista: ";
//     for(let i=1;i<=num;i++){
//         list += (i+", ");
//     }
//     alert(list)
// }
// {
//     let num = prompt("Ingrese un numero");
//     let list = "Lista: ";
//     for(num;num>0;num--){
//         if((num%3)==2){
//             list += (num+", ");
//         }
//     }
//     alert(list)
// }
{
    let num;
    let total=0;
    for (let i = 1; i <= 4; i++) {
        num = prompt("Ingrese " + i + "° numero")
        .parseInt(num);
        total+=num
    }
    alert("El promedio es de: "+(total/4))
=======
// {
//     let IVA = prompt("Iva: ");
//     let Precio = prompt("Precio: ")
//     let total = Precio + (IVA * Precio);
//     alert("A pagar: " + total);
// }
// {
//     let cred = promp("Creditos: ");
//     switch (cred) {
//         case "1": alert("Puede acceder a las sala: Consolas");
//         case "2": alert("Puede acceder a las sala: Consolas, Juegos 2D");
//         case "3": alert("Puede acceder a las sala: Consolas, Juegos 2D, Juegos 3D");
//         case "4": alert("Puede acceder a las sala: Consolas, Juegos 2D, Juegos 3D, Realidad Virtual");

//     }
// }
// {
//     let elec = prompt("Elige el tipo de auto: ");
// if (elec == "1" | elec == "gasolina") {
//     alert("Dirijase a la oficina numero 100");
// } else if (elec == "2" | elec == "diesel") {
//     alert("Dirijase a la oficina numero 200");
// } else if (elec = "3" | elect == "electrico") {
//     alert("Dirijase a la oficina numero 300");
// } else {
//     alert("Tipo no encontrado");
// }

//     switch (elec) {
//         case "1" | case "gasolina":
//             alert("Dirijase a la oficina numero 100");
//             break;

//         case "2" | "diesel":
//             alert("Dirijase a la oficina numero 200");
//             break;

//         case "3" | "electrico":
//             alert("Dirijase a la oficina numero 300");
//             break;

//         default:
//             alert("Tipo no encontrado");

//     }
// }
// {
//     let comp = prompt("Total de compra")
//     if(comp<100){
//         alert("Total a pagar: "+comp);
//     }else if(comp<300){
//         alert("Total a pagar: "+comp*0.95) ;
//     }else if(comp<400){
//         alert("Total a pagar: "+comp*0.90) ;
//     }else{
//         alert("Total a pagar: "+comp*0.85) ;
//     }
// }
// {
//     let num = prompt("Ingrese un numero");
//     let list = "Lista: ";
//     for(let i=1;i<=num;i++){
//         list += (i+", ");
//     }
//     alert(list)
// }
// {
//     let num = prompt("Ingrese un numero");
//     let list = "Lista: ";
//     for(num;num>0;num--){
//         if((num%3)==2){
//             list += (num+", ");
//         }
//     }
//     alert(list)
// }
{
    let num;
    let total=0;
    for (let i = 1; i <= 4; i++) {
        num = prompt("Ingrese " + i + "° numero")
        .parseInt(num);
        total+=num
    }
    alert("El promedio es de: "+(total/4))
>>>>>>> eed8f6816805a5f9779eafa38c5fc1c54b51f99c
}