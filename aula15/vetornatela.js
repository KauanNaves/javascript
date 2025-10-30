
let valores = [0, 5, 5, 2, 1, 1, 3, 6 , 8, 8]

console.log(valores)
 
for(var pos=0; pos<valores.length; pos++) {
    console.log(valores[pos])
}

console.log("FOR simplificado")

for(var pos in valores) {
    console.log(valores[pos])
}