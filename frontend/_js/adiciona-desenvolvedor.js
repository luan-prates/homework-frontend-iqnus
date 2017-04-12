criaElemento('script', 'src', './_js/utils.js');
criaElemento('script', 'src', './_js/monta-desenvolvedor.js');
criaElemento('script', 'src', './_js/monta-empresa.js');
criaElemento('script', 'src', './_js/altera-desenvolvedor.js');


var botao_adicionar = document.querySelector("button.add");
botao_adicionar.addEventListener("click", function(event){    
  event.preventDefault();
    
  var campo_empresa = document.querySelector("input[name='empresa']");
  var campo_nome = document.querySelector("input[name='nome']");
  var campo_idade = document.querySelector("input[name='idade']");
  var campo_time = document.querySelector("select[name='time']");
  var campo_tec = document.querySelector("select[name='tec']"); 
  var campo_smoker = document.querySelector("input[name='smoker']");
  var id_dev = 'dev_'+ campo_empresa.value.toLowerCase() +'_'+ campo_nome.value.toLowerCase();

  if (isCampoPreenchido(campo_empresa) && isCampoPreenchido(campo_nome) && isCampoPreenchido(campo_time) && isIdadeMaiorqyeZero(campo_idade) ) {

    var nome_empresa = campo_empresa.value.toLowerCase();
    
    if (isEmpresaExiste(nome_empresa)) {
      var new_dev = montaDev(id_dev, campo_nome, campo_idade, campo_time, campo_tec, campo_smoker);
      var tabela = document.getElementById(nome_empresa)
      tabela.innerHTML = tabela.innerHTML + new_dev;
      msgSucesso('alterado');
    } else {
      nova_empresa = montarEmpresa(nome_empresa, id_dev, campo_nome, campo_idade, campo_time, campo_tec, campo_smoker);
      var tabela = document.querySelector("#tabela_empresas");
      tabela.innerHTML = tabela.innerHTML + nova_empresa;
      msgSucesso('adicionado');
    }
    

    limpaCampos(campo_empresa, campo_nome, campo_idade, campo_time, campo_tec, campo_smoker);
    }
  });
