
function gerar() {
    var num = Number(window.document.getElementById('txt_num').value)
    var div_result = window.document.getElementById('result')
    if (num == ""){
        window.alert("[ERRO] Verifique os dados e tente novamente!")
    } else {
        div_result.innerHTML = `Tabuada do ${num} `
        for (i=1; i<=10; i++) {
            div_result.innerHTML += `<br> ${num} x ${i} = ${ num * i}`
        }
}

}