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

//break y continue en un for loop//

for (let n = 0; n < 13; n++){
    if (n === 5) {
        console.log(`Este es el número: ${n}`);
        break;
    };
    console.log(`Número: ${n}`)
}

for (let nn = 0; nn < 13; nn++){
    if (nn === 5) {
        console.log(`Este es el número: ${nn}`);
        continue;
    };
    console.log(`Número: ${nn}`)
}

const carrito2 =[
    { nombre: 'Televisor', precio: 500},
    { nombre: 'Nevera', precio: 5500, descuento: true},
    { nombre: 'Estufa', precio: 1500},
    { nombre: 'Computador', precio: 100},
    { nombre: 'Altavoz', precio: 1500},
    {nombre: 'Lavadora', precio: 3500, descuento: true}
]

for (let m = 0; m < carrito2.length; m++){
    if (carrito2[m].descuento) {
        console.log(`El artículo ${carrito2[m].nombre} Tiene descuento`);
        continue;
    }
    console.log(carrito2[m].nombre);
}

//Reto Fizz Buzz//
//3 6 9 12 ...imultiplos de 3 imprimir fizz
//5 10 15 20 ...multiplos de 5, imprimir buzz
//multiplos 5 y 3...15 30 45 imprimir fizz buzz


for (let nu = 1; nu <= 100; nu++){
    if (nu % 3 === 0  && nu % 5 === 0) {
        console.log(`${nu} Fizz Buzz`);
    } else if (nu % 3 === 0) {
        console.log(`${nu} Fizz`);
    } else if (nu % 5 === 0) {
        console.log(`${nu} Buzz`)
    }
}




