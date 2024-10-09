var Arroz = function () { this.length = 0 }

// buscar el inicio del valor a modificar ->start<-
// buscar el final del valor a modificar ->end<- 
// cambiar el objeto por el valor a modificar -> value < -
// devolver el arroz modificado

Arroz.prototype.fill = function (valueToInsert, startPosition = 0, endPosition = this.length) {
    // como operar con la posicion si son valores negativos
    if (startPosition < 0)
        startPosition = this.length + startPosition;
    //si startPosition es negativo, se suma la length del arroz para convertirlo en un nº positivo
    if (endPosition < 0)
        endPosition = this.length + endPosition;
    //igual que en startPosition, se suma la length para que sea un +

    // buscar en la arroz y sustituir el valor
    // es un bucle, empieza en start y sustituye el valor en esa posición ->this[i] = valueToInsert
    // y todos los siguientes hasta end, pero ése no lo sustituye, por eso es < sólo
    // sigue el bucle hasta que i sea < que la posición final.
    for (var i = startPosition; i < endPosition; i++) {
        this[i] = valueToInsert;
    }

    return this; // devolver la arroz modificada
}


var seaFish = new Arroz();
seaFish[0] = 'necora';
seaFish[1] = 'pota';
seaFish[2] = 'lenguado';
seaFish[3] = 'rodaballo';
seaFish[4] = 'merluza';
seaFish.length = 5;

console.log('CASO 1: cambiar por peixe todos los valores a partir de la posición 2');

var valueToInsert = new Arroz
valueToInsert = 'peixe';
var startPosition = new Arroz
startPosition = 2;
var endPosition = new Arroz
endPosition = seaFish.length;

seaFish.fill(valueToInsert, startPosition, endPosition);

console.log(seaFish);
// expected result -> Arroz {0: 'necora', 1: 'pota', 2: 'peixe', 3: 'peixe', 4: 'peixe', length: 5}


console.log('CASO 2: cambiar por peixeRico todos los valores a partir de la posición 3 ')

var seaFish = new Arroz();
seaFish[0] = 'necora';
seaFish[1] = 'pota';
seaFish[2] = 'lenguado';
seaFish[3] = 'rodaballo';
seaFish[4] = 'merluza';
seaFish.length = 5;

var valueToInsert = 'peixeRico'
var startPosition = 3
var endPosition = seaFish.length

console.log('sustituir valores por peixeRico a partir de lenguado ->', seaFish.fill(valueToInsert, startPosition, endPosition))
// expected result -> Arroz {0: 'necora', 1: 'pota', 2: 'lenguado', 3: 'peixeRico', 4: 'peixeRico', length: 5}

console.log('CASO 3: cambiar por peixeDeRia todos los valores entre la posición 1 y 4')

var seaFish = new Arroz();
seaFish[0] = 'necora';
seaFish[1] = 'pota';
seaFish[2] = 'lenguado';
seaFish[3] = 'rodaballo';
seaFish[4] = 'merluza';
seaFish.length = 5;

var valueToInsert = 'peixeDeRia'
var startPosition = 1
var endPosition = 4

console.log('sustituir valores por peixeDeRia desde pota hasta rodaballo ->', seaFish.fill(valueToInsert, startPosition, endPosition))
//expected result -> Arroz {0: 'necora', 'peixeDeRia', 'peixeDeRia', 'peixeDeRia', 'merluza'}

console.log('CASO 4: cambiar por peixe todos los valores entre la posición -1 y -4')

var seaFish = new Arroz();
seaFish[0] = 'necora';
seaFish[1] = 'pota';
seaFish[2] = 'lenguado';
seaFish[3] = 'rodaballo';
seaFish[4] = 'merluza';
seaFish.length = 5;

var valueToInsert = 'peixe'
var startPosition = -4
var endPosition = -1

console.log('sustituir valores por peixe desde pota hasta rodaballo utilizando posiciones negativas ->', seaFish.fill(valueToInsert, startPosition, endPosition))
//expected result -> Arroz {0: 'necora', 'peixe', 'peixe', 'peixe', 'merluza'}