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
//3 6 9 12 ...multiplos de 3 imprimir fizz
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

//while loop se cumple mientras una condición sea verdadera//

let inicio = 0; //inicializar el while
while (inicio <= 8) { //esta es la condición
    
    console.log(`Este es el número ${inicio}`);
    inicio++;  //este es el incremento
}


let contador = 0; 

while (contador <= 20) {
    if (contador % 2 === 0) {
        console.log(`El número ${contador} es PAR`)
    } else {
        console.log(`El número ${contador} es IMPAR`)
    }
    contador++;
}


//Do while loop  se ejecuta al menos una vez...//


let i = 10000;  //inicio

do {
    console.log(`Este es el número: ${i}`) 
    i++;  //incremento
} while (i <=10); //condición



let it = 0;  //inicio

do {
    console.log(`Este es el número: ${it}`) 
    it++;  //incremento
} while (it <=10); //condición

//for each y map  sirve para recorrer arreglos//

const pendientes = ['Tarea', 'comer', 'proyecto', 'estudiar'];

pendientes.forEach(pendiente => {
    console.log(pendiente)
})


const arreglo1 = [1, 1, 2, 3, 5, 8, 13, 21];

arreglo1.forEach((item, indice) => {
    console.log(`${item} Está en la posición ${indice}`)
})

const carrito3 =[
    { nombre: 'Televisor', precio: 500},
    { nombre: 'Nevera', precio: 5500},
    { nombre: 'Estufa', precio: 1500},
    { nombre: 'Computador', precio: 100},
    { nombre: 'Altavoz', precio: 1500},
    {nombre: 'Lavadora', precio: 3500}
]

carrito3.forEach((producto) => {
    console.log(producto);
})



const carrito4 =[
    { nombre: 'Congas', precio: 500},
    { nombre: 'Nevera', precio: 5500},
    { nombre: 'Estufa', precio: 1500},
    { nombre: 'Timbales', precio: 100},
    { nombre: 'Altavoz', precio: 1500},
    {nombre: 'Plancha', precio: 3500}
]

carrito4.forEach(item => console.log(item.nombre));
//forma abreviada para una sola línea//

carrito4.map(item => console.log(item));
//crea un arreglo nuevo//

//for of ...  for in...//

const instrumentos = ['Guitarra', 'Piano', 'Maracas', 'Timbales'];
for (let artefacto of instrumentos) {
   console.log(artefacto) 
} //for of recorre el arreglo mientras haya elementos//


const tienda = [
    { item: 'Pandereta', precio: 500 },
    { item: 'Pianola', precio: 3500 },
    { item: 'Guitarron', precio: 900 },
    { item: 'Tumbadora', precio: 5900 }
]

for (let articulo of tienda) {
    console.log(articulo)
}


const automovil = {
    modelo: 'Renault',
    year: 2022,
    motor: '2.4 C3'
}

for( let propiedad in automovil){
    console.log(propiedad);
} //in itera sobre objetos//

for (let [llave, valor] of Object.entries(automovil)) {
    console.log(llave, valor);
} //otra forma de recorrer objetos//



