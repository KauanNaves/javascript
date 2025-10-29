 function contar() {
    var inicio = Number(window.document.getElementById('txtnum-inicio').value)
    var fim = Number(window.document.getElementById('txtnum-fim').value)
    var passo = Number(window.document.getElementById('txtnum-passo').value)
    var div_result = window.document.getElementById('result')
    if (inicio == "" || fim == "" || passo == "") {
        window.alert('[ERRO] Verifique os dados e tente novamente!')
    } else {
        div_result.innerHTML = `Contando...<br>`
        for (i=inicio; i<=fim; i+=passo) {
            div_result.innerHTML += `${i} 👉`
        }
    }
    div_result.innerHTML += ` 🏴`
}