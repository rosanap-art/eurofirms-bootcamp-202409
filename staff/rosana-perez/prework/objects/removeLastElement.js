/*
array.pop()
quita el elemento en la última posición

*/
function removeLastElement(object) {
    //quitamos dentro del objeto ->object<- el elemento situado en la última posición ->object.length<-
    delete object[object.length - 1]
    //decrementar la longitud ->object.length<- en 1
    object.length--
}
var numbers = {
    0: 0,
    1: 1,
    2: 2,
    length: 3
}

var fruit = {
    0: 'apple',
    1: 'watermelon',
    length: 2
}

var fridge = {
    0: 'meat',
    1: 'salad',
    2: 'wine',
    3: 'burrito',
    4: 'spagetti',
    5: 'fruit',
    6: 'fish',
    7: 'beer',
    8: 'water',
    9: 'pizza',
    length: 10
}

console.log('PRUEBA 1: quitar el último elemento de numbers')

removeLastElement(numbers)

console.log('numbers', numbers)

console.log('Expected result: { 0: 0, 1: 1, length: 2}')


console.log('PRUEBA 2: quitar el último elemento de fridge')


removeLastElement(fridge)

console.log("Expected result: {0:'meat', 1: 'salad', 2: 'wine', 3: 'burrito', 4: 'spagetti', 5: 'fruit', 6: 'fish', 7: 'beer', 8: 'water', length: 9}")

/* var numbers = {
0: 0,
1: 1,
length: 2
} */

/* var fridge = {
    0: 'meat',
    1: 'salad',
    2: 'wine',
    3: 'burrito',
    4: 'spagetti',
    5: 'fruit',
    6: 'fish',
    7: 'beer',
    8: 'water',
    length: 9
} */
