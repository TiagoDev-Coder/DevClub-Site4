const convertButton = document.querySelector(".convert-button");
const currencySelect = document.querySelector(".currency-select");

function convertValues() {
  const inputCurrencyValue = Number(
    document.querySelector(".input-currency").value
  );

  const currencyValueToConvert = document.querySelector(".currency-value-from");
  const currencyValueConverted = document.querySelector(".currency-value-to");

  const dolarToday = 6.0;
  const euroToday = 6.38;
  const libraToday = 7.0;
  const bitcoinToday = 8.0;

  // Atualiza o valor original em real
  currencyValueToConvert.innerHTML = new Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL",
  }).format(inputCurrencyValue);

  // Converte para a moeda selecionada
  if (currencySelect.value === "dolar") {
    currencyValueConverted.innerHTML = new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
    }).format(inputCurrencyValue / dolarToday);
  }

  if (currencySelect.value === "euro") {
    currencyValueConverted.innerHTML = new Intl.NumberFormat("de-DE", {
      style: "currency",
      currency: "EUR",
    }).format(inputCurrencyValue / euroToday);
  }

    if (currencySelect.value === "libra") {
    currencyValueConverted.innerHTML = new Intl.NumberFormat("en-GB", {
      style: "currency",
      currency: "GBP",
    }).format(inputCurrencyValue / libraToday);
  }

    if (currencySelect.value === "bitcoin") {
    currencyValueConverted.innerHTML = new Intl.NumberFormat("XBT", {
      style: "currency",
      currency: "BTC",
    }).format(inputCurrencyValue / bitcoinToday);
  }
}

function changeCurrency() {
  const currencyName = document.getElementById("currency-name");
  const currencyImg = document.querySelector(".currency-img");

  if (currencySelect.value === "dolar") {
    currencyName.innerHTML = "Dólar Americano";
    currencyImg.src = "./assets/img/dolar.png";
  }

  if (currencySelect.value === "euro") {
    currencyName.innerHTML = "Euro";
    currencyImg.src = "./assets/img/euro.png";
  }

    if (currencySelect.value === "libra") {
    currencyName.innerHTML = "Libra";
    currencyImg.src = "./assets/img/libra.png";
  }

    if (currencySelect.value === "bitcoin") {
    currencyName.innerHTML = "Bitcoin";
    currencyImg.src = "./assets/img/bitcoin.png";
  }

  convertValues(); // Atualiza a conversão automaticamente ao trocar a moeda
}

currencySelect.addEventListener("change", changeCurrency);
convertButton.addEventListener("click", convertValues);
