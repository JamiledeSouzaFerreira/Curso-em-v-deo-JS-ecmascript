function manhã(){
    var msg = document.querySelector('div#msg')
    var img = document.querySelector('img#imagem')
    var data = new Date()
    var hora = data.getHours()
    msg.innerHTML = (`Agora são ${hora} horas.`)
    if(hora < 12 && hora > 3){
        msg.innerHTML += ('Bom Dia!')
        // img.src = ''
    } else if (hora > 12 && hora < 18){
        msg.innerHTML += (' Boa Tarde!')
        // img.src = ''
    } else {
        msg.innerHTML +=('Boa Noite!')
        // img.src = ''
    }
}