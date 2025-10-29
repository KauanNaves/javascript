function verificar() {
    var ano_nascimento = window.document.getElementById('input_ano').value
    var ano_atual = new Date().getFullYear()
    var res = window.document.getElementById('dados_resultado')
    var sexo = window.document.getElementsByName('txt_sexo')
    var genero = ""
    var img = window.document.createElement('img')

    if (ano_nascimento.length == 0 || Number(ano_nascimento) > ano_atual) {
        window.alert('[ERRO] Verifique os dados e tente novamente!')
    } else {
        var idade = ano_atual - ano_nascimento
        img.setAttribute('id', "foto")
        if (sexo[0].checked) {
            genero = "Homem"
            if (0 <= idade && idade < 10) {
                //Criança
                img.setAttribute('src', "./masc/foto-bebe.jpg")
                img.setAttribute('alt', "Imagem bebê")
                } else if (idade < 21) {
                    //Jovem
                    img.setAttribute('src', "./masc/foto-jovem.jpg")
                    img.setAttribute('alt', "Imagem Jovem")
                    } else if (idade <= 40) {
                        //Adulto
                        img.setAttribute('src', "./masc/foto-adulto.jpg")
                        img.setAttribute('alt', "Imagem Adulto")
                        } else {
                            //Idoso
                            img.setAttribute('src', "./masc/foto-idoso.jpg")
                            img.setAttribute('alt', "Imagem Idoso")
        }
        } else {
            genero = "Mulher"
            if (0 <= idade && idade < 10) {
                //Criança
                img.setAttribute('src', "./fem/foto-bebe.jpg")
                img.setAttribute('alt', "Imagem bebê")
                } else if (idade < 21) {
                    //Jovem
                    img.setAttribute('src', "./fem/foto-jovem.jpg")
                    img.setAttribute('alt', "Imagem Jovem")
                    } else if (idade <= 40) {
                        //Adulto
                        img.setAttribute('src', "./fem/foto-adulto.jpg")
                        img.setAttribute('alt', "Imagem Adulto")
                        } else {
                            //Idoso
                            img.setAttribute('src', "./fem/foto-idoso.jpg")
                            img.setAttribute('alt', "Imagem Idoso")
        }
    }
    res.innerHTML = `Detectamos: <strong>${genero} com ${idade} anos</strong>`
    res.appendChild(img)
}
}