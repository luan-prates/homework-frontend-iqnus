function criaElemento(elemento_criado, atributo1,valor1, atributo2,valor2, atributo3,valor3, atributo4,valor4)
{
  var elemento = document.createElement(elemento_criado);
  elemento.setAttribute(atributo1, valor1);
  elemento.setAttribute(atributo2, valor2);
  elemento.setAttribute(atributo3, valor3);
  elemento.setAttribute(atributo4, valor4);

  if(elemento_criado == 'script' || elemento_criado == 'link' ){
    document.getElementsByTagName("head").item(0).appendChild(elemento);
  }else{
    document.body.appendChild(elemento);
  }
}
