  var campo_empresa = document.querySelector("input[name='empresa']");
  var campo_nome = document.querySelector("input[name='nome']");
  var campo_idade = document.querySelector("input[name='idade']");
  var campo_time = document.querySelector("select[name='time']");
  var campo_tec = document.querySelector("select[name='tec']"); 
  var campo_smoker = document.querySelector("input[name='smoker']");

  var id_dev = 'dev_'+ campo_empresa.value.toLowerCase() +'_'+ campo_nome.value.toLowerCase();
  var id_edita = 'edita_'+ campo_empresa.value+'_'+ campo_nome.value;
  var id_deleta = 'delete_'+ campo_empresa.value+'_'+ campo_nome.value;
  
  function adicionaEventoEdita(id_edit) 
  {
    var edit = document.getElementById(id_edit);
    edit.addEventListener("click", function(event)
    {    
      event.preventDefault();
      var tr_dev = edit.parentNode.parentNode;
      var tr_empresa = tr_dev.parentNode.parentNode.parentNode.parentNode;

      campo_empresa.value = tr_empresa.children[0].innerText;
      campo_nome.value = tr_dev.children[0].innerText;
      campo_idade.value = tr_dev.children[1].innerText;
      campo_time.value = tr_dev.children[2].innerText;
      campo_tec.value = tr_dev.children[3].innerText;
      campo_smoker.value = tr_dev.children[4].innerText;

      adicionarAtributos('button.add','disabled', 'true', 'class', 'desabilitado');
      removerAtributos('button.alterar', 'disabled', 'class');
      adicionarAtributos('#btn_alterar','class', 'alterar');
      adicionarAtributos("input[name='empresa']", 'readonly', 'readonly');
      adicionarAtributos("input[name='nome']", 'readonly', 'readonly');
  });
}
