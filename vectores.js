let frutas = ['Manzanas', 'Bananas', 'Peras']

console.log(frutas);
console.log(frutas.length);

/**
 * Acceder a los elementos de un vector
 */

let arreglo = [5, 7, 23, 12, 43];

console.log( arreglo[0]);
console.log( arreglo[2]);
console.log( arreglo[ arreglo.length -1]);
console.log( arreglo[arreglo.length]);

/**
 * imprimir tabla del 5
 */

let resultados = [];

for (let i = 1; 1 <= 10; i++){
    resultados.push(i * 5);
}

for (let i = 1; 1 <= 10; i++){
    console.log(' 5 x ' + i + ' = ' + resultados [i - 1]);
}

/*
 * Matrices
 */

let datos = [
    ['manzana', 'Pera', 'Papaya', 'Piña'],
    ['Papa', 'Tomate', 'Yuca', 'Ajo'],
    ['Arroz', 'Frijol', 'Cebada', 'Garbanzo']
];

console.log(datos);