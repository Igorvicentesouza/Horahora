function carregar(){
    var msg = window.document.getElementById('msg')
    var mns = window.document.getElementById('mns')
    var img = window.document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()
    var minutos = data.getMinutes()
    //var hora = 16

    msg.innerHTML = `agora sao ${hora} horas e ${minutos} minutos.`
    
    if (hora >= 0 && hora <12) {
        mns.innerHTML = `bom dia`
        img.src = 'foto.manha.jpg'
        document.body.style.background = '#FFFF00'
        
    } else if (hora >= 12 && hora < 18){
        mns.innerHTML = `boa tarde`
        img.src = 'foto.tarde.jpg'
        document.body.style.background = '#FF8C00'
    } 
    else {
        mns.innerHTML = `boa noite`
        img.src = 'foto.noite.jpg'
        document.body.style.background = '#4F4F4F'
    }
}