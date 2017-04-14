function adicionaEventoDelete(id) 
{
  var deletar = document.getElementById(id);
  deletar.addEventListener("click", function(event){   
    event.preventDefault();
    
    var tr_dev = deletar.parentNode.parentNode;
    var index_dev = tr_dev.rowIndex;
    var tabela_dev = tr_dev.parentNode;

    tabela_dev.deleteRow(index_dev);
  });
}

