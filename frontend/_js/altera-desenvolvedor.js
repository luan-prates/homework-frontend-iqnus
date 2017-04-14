var botao_alterar = document.getElementById('btn_alterar');
var campo_empresa = document.querySelector("input[name='empresa']");
var campo_nome = document.querySelector("input[name='nome']");
var campo_idade = document.querySelector("input[name='idade']");
var campo_time = document.querySelector("select[name='time']");
var campo_tec = document.querySelector("select[name='tec']"); 
var campo_smoker = document.querySelector("input[name='smoker']");

botao_alterar.addEventListener("click", function(event)
{
  event.preventDefault();

  var id_dev = 'dev_'+ campo_empresa.value.toLowerCase() +'_'+ campo_nome.value.toLowerCase();
  var id_edita = 'edita_'+ campo_empresa.value +'_'+ campo_nome.value;
  var id_deleta = 'delete_'+ campo_empresa.value+'_'+ campo_nome.value;

  novo_dev = montaDev(id_dev, id_edita, id_deleta, campo_nome, campo_idade, campo_time, campo_tec, campo_smoker);
  console.log(id_dev);
  var dev = document.getElementById(id_dev);
  dev.innerHTML = novo_dev;
  limpaCampos(campo_empresa, campo_nome, campo_idade, campo_time, campo_tec, campo_smoker);
  msgSucesso('editado');
});
