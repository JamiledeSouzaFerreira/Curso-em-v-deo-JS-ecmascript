function verificar(){
    var data = new Date 
    var anoatual = data.getFullYear()
    var txt1 = document.querySelector('input#txtano')
    var txt = Number(txt1.value)
    var res = document.querySelector('div#res')
    
    if (txt > anoatual || txt == 0){
        window.alert('Confira os dados e tente novamente')
    } else {
        var idade = anoatual - txt
        var radsex = document.getElementsByName('radsex')
        var gênero =''
    
        if ( radsex[0].checked ){
            gênero = 'homem'
        } else if (radsex[1].checked){
            gênero ='mulher'
            
        }
        res.innerHTML = (`Detectamos ${gênero} de ${idade} anos`)
    }
}