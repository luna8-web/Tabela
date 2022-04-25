<script type="text/javascript">
    function validar_funcionario(){

        var nome = formulario.nome.value;
        var email = formulario.nome.value;
        var fone = formulario.nome.value;
        var mensagem = formulario.nome.value;
    
        if(nome == ""){
            alert("Campo nome é obrigatório");
            formulario.nome.foucus();
            return false;
        }if (email== "") {
            alert("Campo de email obrigatório");
            formulario.email.foucus();
            return false;
            
        }if (fone== "") {
            alert("Campo de email obrigatório");
            formulario.fone.foucus();
            return false;
            
        }if (mensagem== "") {
            alert("Campo de email obrigatório");
            formulario.mensagem.foucus();
            return false;
            
            }
        }

        </script>