txtn.focus()
function tabuada(){
// Declarando as variaveis
let numero = document.getElementById('txtn')
let tab = document.getElementById('tabu')
    //Nesse caso usar como teste o valor inserido pelo user.
    //Não o convertido para number
    //Se o tamanho do var da VAR for igual a 0 ou "Nada"
    if(numero.value.length == 0){
        alert('Favor insira um valor!') 
        // ELSE vai impedir que o código continue 
    } else {
        //Transforma a VAR numero em Number 
        let num = Number(numero.value)
        //Limpar 
        tab.innerHTML = ""
        //FOR para criar de 1 a 10 da tabuada
        for(let c = 1; c <= 10; c++){
        //Criado um select em HTML
        //Criando option em JS de forma dinâmica    
        let item = document.createElement('option')
        //Exibir para o user
        item.text = `${num}x${c} = ${num*c}`
        //item.value = `tab${c}`
        //Inserindo no HTML
        tab.appendChild(item)
        //Limpar 
        document.getElementById("txtn").value = ""
        //inicirar cursor no input
        txtn.focus()
        }
    } 
}

