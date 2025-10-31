
let input_num = window.document.querySelector('input#txtn')
let select_nums = window.document.querySelector('select#numbers')
let div_res = window.document.querySelector('div#resposta')
let numbers = []



function inList(num, array) {
    if (array.indexOf(num) == -1) {
        return false
    } else {
        return true
    }
}

function isNumber(num) {
    if (((typeof num) == "number") && 0 < num && num <= 100) {
        return true
    } else {
        return false
    }
}

function adicionar_num() {
    if ((!inList(Number(input_num.value), numbers)) && isNumber(Number(input_num.value)) && input_num.value != "") {
        numbers.push(Number(input_num.value))
        div_res.innerHTML = ""
        let item = window.document.createElement('option')
        item.text = `Valor ${input_num.value} adicionado!`
        select_nums.appendChild(item)
        input_num.value = ""
        input_num.focus()
    } else {
        window.alert('Valor inválido ou já encontrado na lista!')
        input_num.value = ""
        input_num.focus()
    }

}

function finalizar() {
    let soma = 0
    let media = 0
    let menor = numbers[0]
    let maior = numbers[0]
    let total = numbers.length
    for (pos in numbers) {
        soma += numbers[pos]
        if (numbers[pos] > maior) {
            maior = numbers[pos]
        } else if (numbers[pos] < menor) {
            menor = number[pos]
        }
    }
    media = soma / (total)
    div_res.innerHTML = ''
    div_res.innerHTML = `<P>Foram adicionados ${total} valores.</P> <p>A soma dos valores adicionados foi ${soma}.</p> <p>A média dos valores adicionados foi ${media}.</p> <p>O maior valor adicionado foi ${maior}.</p> <p>O menor valor adicionado foi ${menor}.</p>`
}