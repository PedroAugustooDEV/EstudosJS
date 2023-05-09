
function carregar() {
    var msg = document.getElementById('msg')
    var imagem = document.getElementById('foto')
    var agora = new Date();
    var hora = agora.getHours()

    msg.innerText = `agora são ${hora} horas`
    
    if (hora >= 6 && hora <= 12) {
        imagem.src = 'dia.jpg'
        document.body.style.background ='#F2A007'
    } else if (hora >= 13 && hora <= 17) {
        imagem.src = 'tarde.jpg'
    } else if (hora >= 18 && hora <= 23) {
        imagem.src = 'noite.jpg'
        document.body.style.background ='#0A2126'
    } else {
        imagem.src = 'madrugada.jpg'
        document.body.style.background ='#141826'
    }
}       