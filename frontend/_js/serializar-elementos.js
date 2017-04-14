var botao_enviar = document.querySelector("button[type='submit']");

botao_enviar.addEventListener("click", function(event)
{    
  event.preventDefault();

  var tabela = document.querySelector('tabela_empresas');
  var trs_empresa = tabela.getElementsByTagName('tr');
  var empresas = [empresa];

    for (i=0;i<trs_empresa.length;i++){
      var empresa = {
      empresa : '',
      nome : '',
      idade : '',
      time : '',
      tecnologias : '',
      estagiario : '' 
      }
      var td_empresa = trs_empresa.getElementsByTagName('td');
      empresa.empresa = td_empresa[i].firstChild.nodeValue;

      var tabela_dev =td_empresa[i+1].firstChild;
      var trs_dev = tabela_dev.getElementsByTagName('tr');   
      td_dev = trs_dev.getElementsByTagName('td');

      empresa.nome =  td_dev[0].firstChild.nodeValue;
      empresa.idade =  td_dev[1].firstChild.nodeValue;
      empresa.time =  td_dev[2].firstChild.nodeValue;
      empresa.tecnologias =  td_dev[3].firstChild.nodeValue;
      empresa.estagiario =  td_dev[4].firstChild.nodeValue;  

      empresas += empresa;
    }
  var tagPre = document.querySelector('.debug');
  tagPre.innerText = empresas;
});