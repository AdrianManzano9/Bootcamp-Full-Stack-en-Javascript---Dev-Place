// class Usuario {
//     nombre;
//     email;
//     password;

//     constructor(nombre, email, password) {
//         this.nombre = nombre;
//         this.email = email;
//         this.password = password;
//     }

// }
// {
//     var lista=[];
// for (let i=0;i<3;i++) {
//     nom = prompt("Nombre: ");
//     email = prompt("Email: ");
//     pass = prompt("Password: ");
//     lista.push(new Usuario(nom, email, pass));
// }
// console.table(lista);
// ordenarPorEmail(lista);
// console.table(lista);
// }

// function ordenarPorEmail(lista){

//     lista.sort(function (val1, val2) {
//         if (val1.email < val2.email) {
//             return -1;
//         } else {
//             return 1;
//         }
//     })
// };

// function calc(num, callback){
// return callback(num) +"\nHola callback"
// }


// console.log(calc(4,function(num){
//     return num*num+" Hola calc";
// }))

let promesa = new Promise((resolve, reject) => {
    setTimeout(function(){ console.log("callbach!!") }, 300); 
});