console.log("Hola Cumbi Tara");

const holaCumbi = function (dato) {
    console.log(`Hola mi viejo querido - ${dato}`);
}

holaCumbi('Cumbi');

//iteradores se realiza hasta que una condición se cumpla o deje de cumplir//

for (let i = 0; i < 13; i++){
    console.log(`Número: ${i}`);
}

for (let n = 0; n <= 20; n++) {
    if (n % 2 === 0) {
        console.log(`El número: ${n} es PAR`);
    }
    else {
        console.log(`El número: ${n} es IMPAR`)
    }
}

const carrito =[
    { nombre: 'Televisor', precio: 500},
    { nombre: 'Nevera', precio: 5500},
    { nombre: 'Estufa', precio: 1500},
    { nombre: 'Computador', precio: 100},
    { nombre: 'Altavoz', precio: 1500},
    {nombre: 'Lavadora', precio: 3500}
]

console.log(carrito.length);

for (let c = 0; c < carrito.length; c++){
    console.log(carrito[c]);
}