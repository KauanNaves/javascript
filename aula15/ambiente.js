let numeros = [1,2,3]

console.log(`Nosso vetor é o: ${numeros}`)
console.log("Adicionando valores...")

numeros[3] = 4
numeros.push(5)

console.log(`Nosso vetor é o: ${numeros}`)

tamanho = numeros.length

numeros.sort() // Ordenando os valores

console.log(`Existem ${tamanho} elementos em: ${numeros}`)