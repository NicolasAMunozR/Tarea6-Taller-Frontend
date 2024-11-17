// Función de Fibonacci entre 0 y 1000
function fibonacciHastaMil() {
    // Inicializar arreglo con los dos primeros números de la serie
    let fib = [0, 1];
    // Inicializar arreglos para pares
    let fibPares = [];
    // Inicializar arreglos para impares
    let fibImpares = [];
    while (true) {
        // Calcular el siguiente número de la serie
        let next = fib[fib.length - 1] + fib[fib.length - 2];
        // Si el siguiente número es mayor a 1000, terminar el ciclo
        if (next > 1000) break;
        // Agregar el siguiente número al arreglo
        fib.push(next);
        // Agregar el siguiente número al arreglo de pares
        if (next % 2 == 0) fibPares.push(next);
        // Agregar el siguiente número al arreglo de impares
        if (next % 2 != 0) fibImpares.push(next);
    }
    console.log('Fibonacci entre 0 y 1000:', fib, '\n');
    console.log('Fibonacci Pares entre 0 y 1000:', fibPares, '\n');
    console.log('Fibonacci Impares entre 0 y 1000:', fibImpares, '\n');
}

fibonacciHastaMil();

// Retornar arreglo de Strings con todo a mayúsculas
let pokemon = ['Pikachu', 'Charmander', 'Bulbasaur', 'Squirtle'];
let pokemonMayusculas = pokemon.map(poke => poke.toUpperCase());
console.log('Pokemones en mayúsculas:', pokemonMayusculas, '\n');

// Retornar del arreglo de Objetos otro arreglo con solo pokemones de tipo fuego
let pokemonObjetos = [
    { nombre: 'Pikachu', tipo: 'Electrico' },
    { nombre: 'Charmander', tipo: 'Fuego' },
    { nombre: 'Bulbasaur', tipo: 'Planta' },
    { nombre: 'Squirtle', tipo: 'Agua' },
    { nombre: 'Charmeleon', tipo: 'Fuego' },
    { nombre: 'Weedle', tipo: 'Bicho' },
    { nombre: 'Charizard', tipo: 'Fuego' }
];
let pokemonFuego = pokemonObjetos.filter(poke => poke.tipo == 'Fuego');
console.log('Pokemones de tipo fuego:', pokemonFuego);

// Ejecutar codigo con: node Tarea6.js