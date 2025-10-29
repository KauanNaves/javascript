
function carregar() {
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()
    var body = window.document.body
    msg.innerHTML = `Agora são ${hora} horas.`
    if (hora >= 0 && hora < 12) {
        img.src = "foto-manha.png"
        body.style.backgroundColor = "#eeb845"
    } else if (hora >= 12 && hora <= 18) {
        img.src = "foto-tarde.png"
        body.style.backgroundColor = "#806f63"
    } else {
        img.src = "foto-noite.png"
        body.style.backgroundColor = "#05060b"
    }
}

    