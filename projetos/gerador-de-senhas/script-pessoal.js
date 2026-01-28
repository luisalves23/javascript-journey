// A senha será gerada aleatóriamente.
// Deve conter 4 Caracteres Maiúsculos
// Deve conter 4 caracteres minusculos
// Deve conter 4 números
// deve conter 4 caracteres especiais
//Total de 16 caracteres.

// rasteio do botão na tela:
const button = document.getElementById('btn');
const caixaDeTexto = document.getElementById('input');
const iconeCopiar = document.querySelector('.fa-copy');
const alerta = document.getElementById('alert-container')


// Arrays com todos os caracteres:
const letrasMaiúsculas = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
const letrasMinusculas = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
const numero = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
const caracteresEspeciais = ['!', '@', '#', '$', '%', '^', '&', '*', '(', ')', '_', '+', '-', '=', '[', ']', '{', '}', ';', ':', '<', '>', '?', '/'];

// Funcao que gera o index
const geradorDeIndex = (min, max) => {
  return Math.floor(Math.random() * (max - min) + min);
}

// Funcao que gera a senha randomica. E depois muda o HTML
const geradorDeSenhas = () => {
  let senha = [];
  for (i=0 ; i < 4 ; i++) {
    senha.push(letrasMaiúsculas[geradorDeIndex(0, 25)])
    senha.push(letrasMinusculas[geradorDeIndex(0, 25)])
    senha.push(numero[geradorDeIndex(0, 9)])
    senha.push(caracteresEspeciais[geradorDeIndex(0, caracteresEspeciais.length)])
  }
  senha = senha.sort(() => Math.random() - 0.5).join('')
  // console.log(senha)
  caixaDeTexto.value = senha;
  return senha;
}

//  Função que copia o texto:
const copyText = () => {
  if (caixaDeTexto.value === "") return;
  
  navigator.clipboard.writeText(caixaDeTexto.value);
  alerta.innerHTML("Senha copiada!");
};

iconeCopiar.addEventListener('click', copyText);
button.addEventListener('click', geradorDeSenhas)