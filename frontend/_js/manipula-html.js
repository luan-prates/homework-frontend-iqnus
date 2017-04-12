var corpo = document.body.innerHTML;
var tabela =
  '<section>' +
  '<fieldset id="fieldset-tabela"><legend>Lista de Desenvoldedores</legend>'+
  '<table id="tabela_empresas" border="1">'+
    '<thead>'+
      '<th>Empresa</th>'+
      '<th>Nome</th>'+
      '<th>Idade</th>'+
      '<th>Time</th>'+
      '<th>Tecnologias</th>'+
      '<th>Estagiário</th>'+
      '<th>Funções</th>'+
    '</thead>'+

    '<tr class="tr_empresa">'+
      '<td class="info-empresa">Iqnus</td>'+
      '<td class="info-dev" colspan="6">'+
        '<table class="tabela_dev" id="iqnus" border="0">'+
          '<tr class="tr_dev">'+
            '<td class="info-nome td_dev">Luan</td>'+
            '<td class="info-idade td_dev">26</td>'+
            '<td class="info-time td_dev"> Frontend</td>'+
            '<td class="info-tec td_dev">JavaScript</td>'+
            '<td class="info-smoker td_dev">Sim</td>'+
            '<td class="info-funcoes td_dev">'+
              '<img class="btnIcon" src="./res/img/edit.png">'+
              '<img class="btnIcon" src="./res/img/delete.png">'+
            '</td>'+
          '</tr>'+
        '</table>'+
       '</td>'+
      '</tr>'+
    '</table>'+
  '</fieldset>'+
'</section>'
document.body.innerHTML = corpo + tabela;

var formulario = document.querySelector('form');
var botao_alterar =
  '<div>' +
    '<button id="btn_alterar" class="alterar">alterar</button>'+
  '</div>'
formulario.innerHTML = formulario.innerHTML + botao_alterar;
