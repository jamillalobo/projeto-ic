/* Variáveis
troquem o querySelector pra classe e id dos elementos html
lembrem que: '#exemploId, '.exemploClasse', 'exemploTag'
*/

const botaoConverter = document.querySelector("#botaoConverter");
const botaoTrocar = document.querySelector("#botaoTrocar");
const input = document.querySelector("#input");
const result = document.querySelector("#result");
const titulo = document.querySelector("#titulo");
const label = document.querySelector(".label");
let isBin2Dec = true;

//função de conversão binária para decimal

const bin2dec = function () {
  const inputBinario = input.value;
  if (!/^[01]+$/.test(inputBinario)) {
    result.innerText =
      "Resultado: Entrada inválida. Por favor, insira apenas 0 e 1.";
    return;
  }
  const decimalNumber = parseInt(inputBinario, 2);
  result.innerText = "Resultado: " + decimalNumber;
};

//função de conversão decimal para binária

const dec2bin = function () {
  const decimalInput = parseInt(input.value, 10);
  if (isNaN(decimalInput)) {
    result.innerText =
      "Resultado: Entrada inválida. Por favor, insira um número decimal válido.";
    return;
  }
  const binaryNumber = decimalInput.toString(2);
  result.innerText = "Resultado: " + binaryNumber;
};

//função de troca de conversões

const trocaConversao = function () {
  if (isBin2Dec) {
    titulo.innerText = "Calculadora Decimal para Binário";
    input.value = "";
    result.innerText = "Resultado: ";
    input.placeholder = "Número Decimal";
    botaoTrocar.innerText = "Mudar para Binário para Decimal";
    label.innerText = "Número Decimal: ";
    isBin2Dec = false;
  } else {
    titulo.innerText = "Calculadora Binário para Decimal";
    input.value = "";
    result.innerText = "Resultado: ";
    input.placeholder = "Número Binário";
    botaoTrocar.innerText = "Mudar para Decimal para Binário";
    label.innerText = "Número Binário: ";
    isBin2Dec = true;
  }
};

//eventListeners

botaoConverter.addEventListener("click", function () {
  if (isBin2Dec) {
    bin2dec();
  } else {
    dec2bin();
  }
});

botaoTrocar.addEventListener("click", trocaConversao);
