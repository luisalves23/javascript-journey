const btnEl = document.querySelector('.btn');
const inputEl = document.querySelector('#input');
const copyIconEl = document.querySelector('.fa-copy');
const alertContainerEl = document.querySelector('#alert-container');

const createPassword = () => {
  const chars = "0123456789abcdefghijklmnopqrstuvwxyz!@#$%&*()_+?:{}[]ABCDEFGHIJKLMNOPQRSTWXYZ";
  const passwordLength = 14;
  let password = "";
  for (let i = 0; i < passwordLength ; i++ ) {
    const randomNum = Math.floor(Math.random() * chars.length);
    password += chars.substring(randomNum, randomNum + 1);
    // console.log(randomNum, password);
  }
  inputEl.value = password
}

const copyPassword = () => {
  inputEl.select();
  inputEl.setSelectionRange(0,9999);
  navigator.clipboard.writeText(inputEl.value)
  alertContainerEl.innerHTML = 'Senha copiada com sucesso!'
}

btnEl.addEventListener('click', createPassword);
copyIconEl.addEventListener('click', copyPassword);