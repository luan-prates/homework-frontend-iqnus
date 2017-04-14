function montarEmpresa(nome_empresa, id_dev, id_edita, id_deleta, campo_nome, campo_idade, campo_time, campo_tec, campo_smoker) {
  var nova_empresa =
  '<tr class="tr_empresa">'+
    '<td class="info-empresa">'+nome_empresa+'</td>'+
    '<td class="info-dev" colspan="6">'+
      '<table class="tabela_dev" id="'+ nome_empresa +'"'+ 'border="0">'+
        '<tr id="'+ id_dev +'"' + 'class="tr_dev">'+
          '<td class="info-nome td_dev">'+campo_nome.value+'</td>'+
          '<td class="info-idade td_dev">'+campo_idade.value+'</td>'+
          '<td class="info-time td_dev">'+campo_time.value+'</td>'+
          '<td class="info-tec td_dev" >'+campo_tec.value+'</td>'+
          '<td class="info-smoker td_dev">'+isSmoker(campo_smoker.value)+'</td>'+
          '<td class="info-funcoes td_dev">'+
            '<img id="'+id_edita+'"' + 'class="btn_Editar" src="./res/img/edit.png">'+
            '<img id="'+id_deleta+'"' + 'class="btnIcon" src="./res/img/delete.png">'+
          '</td>'+
        '</tr>'+
      '</table>'+
    '</td>'+
  '</tr>'
  return nova_empresa;
}
