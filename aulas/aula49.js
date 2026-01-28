// Declaração de função (function hoisting) -> O motor do JavaScript vai elevar as funções Declaração como a do exemplo abaixo, e variávei com a palavra var para o topo do floxo de execução do Javascript.
// Sendo assim, posso chamar a função tanto depois de tela criado (padrão) quanto antes.
falaOi();

function falaOi() {
  console.log('Oiie'); 
}

falaOi();