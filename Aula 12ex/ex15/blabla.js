


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
        //document.body.style.backgroundColor = 'red'
    
        if ( radsex[0].checked ){
            gênero = 'homem'
            //document.body.style.backgroundColor = 'red'
        } else if (radsex[1].checked){
            gênero ='mulher'
            //document.body.style.backgroundColor = 'red'
            
        }
        res.innerHTML = (`Detectamos ${gênero} de ${idade} anos`)
    }
}