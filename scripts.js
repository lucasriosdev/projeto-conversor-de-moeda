const convertButton = document.querySelector(".convert-button");
const currencySelect = document.querySelector(".currency-select");

function convertValues() {
  const inputCurrencyValue = document.querySelector(".input-currency").value;
  const currencyValueToConverted = document.querySelector(
    ".currency-value-to-convert"
  ); //VALOR EM REAL
  const currencyValueConverted = document.querySelector(".currency-value"); // OUTRAS MOEDAS

  console.log(currencySelect.value);
  const dolarToday = 5.2;
  const euroToday = 6.2;

  if (currencySelect.value == "dolar") {
    //SE O SELECT ESTIVER SELECIONADO O VALOR DE DOLAR, ENTRE AQUI
    currencyValueConverted.innerHTML = new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
    }).format(inputCurrencyValue / dolarToday);
  }

  if (currencySelect.value == "euro") {
    //SE O SELECT ESTIVER SELECIONADO O VALOR DE EURO, ENTRE AQUI
    currencyValueConverted.innerHTML = new Intl.NumberFormat("de-DE", {
      style: "currency",
      currency: "EUR",
    }).format(inputCurrencyValue / euroToday);
  }

  currencyValueToConverted.innerHTML = new Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL",
  }).format(inputCurrencyValue);
}

function changeCurrency() {
  const currencyName = document.getElementById("currency-name");

  if (currencySelect.value == "dolar") {
    currencyName.innerHTML = "Dolar Americano";
  }

  if (currencySelect.value == "euro") {
    currencyName.innerHTML = "Euro";
  }
}

currencySelect.addEventListener("change", changeCurrency);
convertButton.addEventListener("click", convertValues);
