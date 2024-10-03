/*
function array.push()
añade en la última posición del array un elemento
*/

function addElement(object, element) {
    //nuestra función añadirá dentro del objeto -> object <- en la última posición -> object.length <- el elemento -> element <-
    object[object.length] = element
    //incrementar la longitud -> object.length <- en 1
    object.length++
}
var numbers = {
    0: 0,
    1: 1,
    2: 2,
    length: 3
}

console.log('PRUEBA 1: añadir el número 3 a numbers')

addElement(numbers, 3)

console.log('numbers', numbers)

console.log('Resultado esperado -> {0: 0, 1: 1, 2: 2, 3: 2, lenght: 4')

addElement(numbers, 100)

console.log('numbers', numbers)

