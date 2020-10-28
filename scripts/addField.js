// procurar o botao 
document.querySelector("#add-time")
//quando clicar no botao 
.addEventListener('click', cloneField)


//executar a acao 
function cloneField(){
    //duplicar os campos 
   const newFieldContainer = document.querySelector('.schedule-item').cloneNode(true)

   //pegar os campos
   const fields = newFieldContainer.querySelectorAll('input')

      fields.forEach(function(field){
          //pegar o field do momento e limpa ele 
            field.value = ""
      })

    //colocar na página
    document.querySelector('#schedule-items').appendChild(newFieldContainer)
}
