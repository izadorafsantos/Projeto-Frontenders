//Direcionamento das páginas
//home for login
$('.login').on('click', function(){
    window.location.href='htmllogin';
});

//criando Array das informações do Usuário
class DadosController { 
    constructor () {
        this.arr=[]; {
        //this.view = new AnotacoesView (); {
            dadosLogin () 
            const usuario = $('#user').val()
            const senha = $('#senha').val()
            const novoDados = new Dados(email, senha)
                this.arr.push(novoDados)
           
               // this.view.renderizaAnotacao(novaAnotacao)

                console.log (this.arr)
        }

        this.$('#user').val ('');
        this.$('#senha').val ('');
    }
}


//login for produtos
const controllerLogin = new dadosLogin ();
$('.btn').submit((event)=> { event.preventDefault ()
    controllerLogin.dadosLogin ();
});














//function pop2(){
//    var question2 = ""
//    while (question2 != 1 && question2 != 2) {
//        question2= prompt (`Além de cantar você deve dançar ou tocar um instrumento.\n Responda 1: dançar \n Responda 2: tocar`)
//        if (question2 == 1) {
//            window.location.href='popGameOver2.html';
//        } else if (question2 == 2) {
//           window.location.href='indexPop3.html';
//        } else {
//            alert ('Opção não disponível.');
//        }
//    }
//}

