const botaoConverter = document.querySelector(".botao__bin__dec");
const botaoTrocar = document.querySelector(".botao__dec__bin");
const input = document.querySelector("#input-binario");
const result = document.querySelector(".conversao_decimal_paragrafo");
let isBin2Dec = true;

//função de conversão binária para decimal
function bin2dec() {
  const inputBinario = input.value;
  if (!/^[01]+$/.test(inputBinario)) {
    result.innerText =
      "Resultado: Entrada inválida. Por favor, insira apenas 0 e 1.";
    return;
  }
  const decimalNumber = parseInt(inputBinario, 2);
  result.innerText = "Resultado: " + decimalNumber;
}

//função de conversão decimal para binária
function dec2bin() {
  const decimalInput = parseInt(input.value, 10);
  if (isNaN(decimalInput)) {
    result.innerText =
      "Resultado: Entrada inválida. Por favor, insira um número decimal válido.";
    return;
  }
  const binaryNumber = decimalInput.toString(2);
  result.innerText = "Resultado: " + binaryNumber;
}
