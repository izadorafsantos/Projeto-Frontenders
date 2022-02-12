//Direcionamento das páginas
//home for login
$('#login').on('click', function(){
    window.location.href='htmllogin';
});

//home for contato
$('.contato').on('click', function(){
    window.location.href='htmlcontato';
});

//login for produtos
class DirectProdutos {
    direcionar ()//class models 
      {  if (email == true && senha == true) {
            window.location.href='htmlprodutos';
        } else {
            $('#retorno').append(`<p> Email ou senha incorretos. Tente novamente. </p>`),
            $('#retorno').css('color', 'red').css('background-color', '#ffcbdb '),
        }
    }
}


//login for cadastro
$('.cadastre').on('click', function(){
    window.location.href='htmlcadastro'
});

//cadastro for login
class DirectLogin {
    direcionarLogin (validado)//class models 
     {  if (validado == true) {
        $('#ret').append(`<p> Cadastro efetuado com sucesso. Inicie o login. </p>`),
        $('#ret').css('color', 'green').css('background-color', '#90ee90'),
        $('#btn-login').show();
        $('#btn-login').on('click', function(){
            window.location.href='htmllogin'
        });
            
        } else if (email != true) {
            $('#retemail').append(`<p> Email incorreto. Tente novamente. </p>`),
            $('#retemail').css('color', 'red').css('background-color', '#ffcbdb '),
        } else if (senhaconfir != true) {
            $('#retsenha').append(`<p> Confirme corretamente a senha. Tente novamente. </p>`),
            $('#retsenha').css('color', 'red').css('background-color', '#ffcbdb '), 
        } else if (cpf !=true) {
            $('#retcpf').append(`<p> Número do CPF inválido. Tente novamente. </p>`),
            $('#retcpf').css('color', 'red').css('background-color', '#ffcbdb '), 
        } else if (cep != true) {
            $('#retcep').append(`<p> Número do CEP inválido. Tente novamente. </p>`),
            $('#retcep').css('color', 'red').css('background-color', '#ffcbdb '), 
        }  
    }
}

//Direcionamento de contato para paginas web dos desenvolvedores (Git hub e Linkedin)
$('#githubIza').on('click', function () {
    window.location.href='https://github.com/izadorafsantos'}
    //for (i=0; i < git.lenght; i++)
    //if (git == $('.gitIza')) {
      
    } else if (git == $('.gitLuany')) {
        window.location.href='https://github.com/luanyoliveira16'
    } else if (git == $('.gitNilton')) {
        window.location.href='https://github.com/NiltonCortesJr'
    } else if (git == $('.gitSuelen')) {
        window.location.href='https://github.com/suelenrechebrito'
} });


$('.imgLink').on('click', function direcionaLink (linkedin) {
    for (i=0; i < linkedin.lenght; i++)
    if (linkedin == $('#linkIza')) {
        window.location.href='https://www.linkedin.com/in/izadora-ferreira-dos-santos-0504b2177/'
    } else if (git == $('#linkLuany')) {
        window.location.href='https://www.linkedin.com/in/luanyboliveira/'
    } else if (git == $('#linkNilton')) {
        window.location.href=' https://www.linkedin.com/in/niltoncjr/'
    } else if (git == $('#linkSuelen')) {
        window.location.href='https://www.linkedin.com/in/suelen-reche-55a43a79'
} });

