function Arroz() {
    this.length = 0
}

Arroz.prototype.find = function (callback) {
    for (var i = 0; i < this.length; i++) { // desde i=0, mientras i sea inferior a la longitud del arroz,
        var element = this[i] // se entiende como -> de cada elemento

        var fulfills = callback(element) // fulfills llama a la función de callback

        if (fulfills) return element // fulfills -> si se cumple la condición
    }

    // return undefined
}



console.log('TEST Arroz.prototype.find')

console.log('CASE 1: find first name length greater than 5')

var names = new Arroz
names[0] = 'Peter'
names[1] = 'John'
names[2] = 'Max'
names[3] = 'James'
names[4] = 'Constantin'
names[5] = 'Mario'
names[6] = 'Tea'
names[7] = 'Luis'
names.length = 8


var name = names.find(function (name) {
    return name.length > 5
})

console.log(name)
// Constantin

console.log('CASE 2: find a name with the character X')

var names = new Arroz
names[0] = 'Peter'
names[1] = 'John'
names[2] = 'Max'
names[3] = 'James'
names[4] = 'Constantin'
names[5] = 'Mario'
names[6] = 'Tea'
names[7] = 'Luis'
names.length = 8


var name = names.find(function (name) {
    return name.includes('x')
})

console.log(name)

//Max


console.log('CASE 3: find first item with type socks')

var cart = new Arroz
cart[0] = { brand: 'adidas', type: 'shoes', quantity: 1 }
cart[1] = { brand: 'puma', type: 'shorts', quantity: 2 }
cart[2] = { brand: 'nike', type: 'socks', quantity: 4 }
cart[3] = { brand: 'decathlon', type: 'socks', quantity: 2 }
cart.length = 4



var item = cart.find(function (item) {
    return item.type === 'socks'
})
console.log(item)

// { brand: 'nike', type: 'socks', quantity: 4, price: 10 }


console.log('CASE 4: find first item with price * quantity more than 100')

var cart = new Arroz
cart[0] = { brand: 'adidas', type: 'shoes', quantity: 1 }
cart[1] = { brand: 'puma', type: 'shorts', quantity: 2 }
cart[2] = { brand: 'nike', type: 'socks', quantity: 4 }
cart[3] = { brand: 'decathlon', type: 'socks', quantity: 2 }
cart.length = 4

var item = cart.find(function (item) {
    return item.price * item.quantity > 100
})
console.log(item)

// expected output -> undefined, (no hay ninguno)


console.log('CASE 5: find first item with total price is greater than 40 and lower than  70')

var cart = new Arroz

cart[0] = { brand: 'adidas', type: 'shoes', quantity: 1, price: 75 }
cart[1] = { brand: 'puma', type: 'shorts', quantity: 2, price: 25 }
cart[2] = { brand: 'nike', type: 'socks', quantity: 4, price: 10 }
cart[3] = { brand: 'decathlon', type: 'socks', quantity: 2, price: 4 }
cart.length = 4


var item = cart.find(function (item) {
    var totalPrice = item.price * item.quantity
    return totalPrice > 40 && totalPrice < 70
})
console.log(item)

//expected output -> { brand: 'puma', type: 'shorts', quantity: 2, price: 25 }

console.log('CASE 6: find first item with total price is greater than 5 and unit price lower than 5')

var cart = new Arroz

cart[0] = { brand: 'adidas', type: 'shoes', quantity: 1, price: 75 }
cart[1] = { brand: 'puma', type: 'shorts', quantity: 2, price: 25 }
cart[2] = { brand: 'nike', type: 'socks', quantity: 4, price: 10 }
cart[3] = { brand: 'decathlon', type: 'socks', quantity: 2, price: 4 }
cart.length = 4


var item = cart.find(function (item) {
    var totalPrice = item.price * item.quantity
    return totalPrice > 5 && item.price < 5
})
console.log(item)

//expected output -> { brand: 'decathlon', type: 'socks', quantity: 2, price: 4 }