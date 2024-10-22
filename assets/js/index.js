const validForm = function(event){
    var inputName = document.querySelector('#name');
    var inputPhone = document.querySelector('#phone');
    var inputEmail = document.querySelector('#email')
    
    if(inputName.value === ""){
        alert("Preencha seu Nome");
        inputName.focus();
        return false;
    }

        if(inputPhone.value === ""){
            alert("Preencha seu telefone");
            inputName.focus();
            return false;
        }

            if(inputEmail.value === ""){
                alert("Preencha seu Email");
                inputName.focus();
                return false;
    }

    alert("Mensagem Enviada");
}