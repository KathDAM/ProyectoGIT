/*let a = [];
a.push("A");
console.log(a);
a.push("A","B","C");
a.shift();
a.toString();
console.log(a);
---------------------
let a = ["A","B","C"];
let b = ["D"];
let c = ["E"];
d = a.concat(b.concat(c));
console.log(d);

let e =d.slice(1,3);

console.log(e);
---------------------
let a = ["A","B","C","D","E","F"];
a.forEach(function(){console.log("valor")});
---------------------
let a = [1,2,3,4,5];
console.log(a.map(function(num){
    return num*2
}))
---------------------
*/
let datos = [
    {nombre: "Nacho", telefono: "966112233", edad: 40},
    {nombre: "Ana", telefono: "911223344", edad: 35},
    {nombre: "Mario", telefono: "611998877", edad: 15},
    {nombre: "Laura", telefono: "633663366", edad: 17}
    ];

    console.log(datos[2].nombre);