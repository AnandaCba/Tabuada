
function timesTables(){

    let multiplierNumberStr = document.getElementById('inputUserNumber')
    let table = document.getElementById('tabu')
    
    //Validação
    if(multiplierNumberStr.value.length == 0){
        alert('Favor insira um valor!') 
    } else { 
        let multiplierNumber = Number(multiplierNumberStr.value)
        //Limpa 
        table.innerHTML = ""

        //Criar de 1 a 10 da tabuada
        for(let count = 1; count <= 10; count++){
            //Criando option em JS de forma dinâmica    
            let item = document.createElement('option')      
            item.text = `${multiplierNumber}x${count} = ${multiplierNumber * count}`
            //Inserindo no HTML
            table.appendChild(item)
            inputUserNumber.focus()
        };
        //Limpar 
        document.getElementById("inputUserNumber").value = ""
    }; 
};

//Foco ao abrir a pagina
window.onload = function() {
    document.getElementById("inputUserNumber").focus();
};