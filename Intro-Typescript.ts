let esValido: boolean = false;
esValido = false;

let num: number = 3;

let arrNum: number[] = [1, 2, num, 0];

// Tupla = arreglo de 2 posiciones, tipo llave/valor

let variableTupla: [string, number] = ['hola', 300];

// Enum -> nos ayuda a represetaciones de tipo numérica
enum miEstado {
  // acá le asignamos un número a cada una de las variables
  Offline, // 0
  Indefinido, // 1
  Online, // 2
}

let estado: miEstado = miEstado.Online;
console.log(estado); // imprime: 2

// Unknown -> variable sin tipo especificado
let sinTipo: unknown = 'hola';
sinTipo = 32;
sinTipo = true;

// función de tipo void que especifica que no devuelve nada
function saludar(): void {
  console.log('Hola!!!');
}

// Se indican los tipos de valores que acepta la función, y el tipo de dato que devuelve
const sumar = function (a: number, b: number): number {
  return a + b;
};
