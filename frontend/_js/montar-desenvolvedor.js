function montaDev(id_dev) {
  var novo_dev = 
  '<tr id="'+ id_dev +'"' + 'class="tr_dev">'+
    '<td class="info-nome td_dev">'+ campo_nome.value +'</td>'+
    '<td class="info-idade td_dev">'+ campo_idade.value +'</td>'+
    '<td class="info-time td_dev">' + campo_time.value +'</td>'+
    '<td class="info-tec td_dev">'+ campo_tec.value +'</td>'+
    '<td class="info-smoker td_dev">'+ isSmoker(campo_smoker.value) +'</td>'+
    '<td class="info-funcoes td_dev">'+
      '<img class="btnIcon" src="./res/_imgs/edit.png">'+
      '<img class="btnIcon" src="./res/_imgs/delete.png">'+
    '</td>'+
  '</tr>'
  return novo_dev;
}