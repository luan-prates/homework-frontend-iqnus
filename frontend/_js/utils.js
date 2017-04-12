function adicionarAtributos(identificador_elemento, atributo1, valor1, atributo2, valor2)
{
  document.querySelector(identificador_elemento).setAttribute(atributo1, valor1);
  if(atributo2 != null) {
    document.querySelector(identificador_elemento).setAttribute(atributo2, valor2);
  }
}

function limpaCampos() {
  campo_empresa.value = "";
  campo_nome.value = "";
  campo_idade.value = "";
  campo_time.value = "";
  campo_tec.value = "";
  campo_smoker.value = "";
}

function isDevExiste(id_dev) {
  if(document.getElementById(id_dev) != null){
    return true
  } else {
    return false
  }
}
