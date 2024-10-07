/* 
array.fill
  cambia todos los elementos en un arreglo por un valor estático, desde 
  el índice start (por defecto 0) hasta el índice end (por defecto array.length)

  devuelve el arreglo modificado
  */

var seaFish = ['necora', 'pota', 'lenguado', 'rodaballo', 'merluza']

console.log('lista seaFish antes de fill ->', seaFish)
//expected result -> ['necora', 'pota', 'lenguado', 'rodaballo', 'merluza']

console.log('CASO 1: cambiar por "peixe" todos los valores desde la posición 1')

console.log('sustituir valores por "peixe" a partir de "pota"->', seaFish.fill('peixe', 2, 5))
//expected result -> ['necora', 'pota', 'peixe', 'peixe', 'peixe']

console.log('lista seaFish después de fill ->', seaFish)

console.log('CASO 2: cambiar por "peixeRico" todos los valores a partir de 3')

console.log('sustituir valores por "peixeRico" desde lenguado ->', seaFish.fill('peixeRico', 3, 5))
//expected result -> ['necora', 'pota', 'lenguado', 'peixeRico', 'peixeRico']

console.log('CASO 3: cambiar por peixeDeRia todos los valores entre la posición 1 y la 4')

console.log('sustituir valores desde necora y hasta rodaballo por peixeDeRia->', seaFish.fill('peixeDeRia', 1, 4))
//expected result-> ['necora', 'peixeDeRia', 'peixeDeRia', 'peixeDeRia', 'merluza']