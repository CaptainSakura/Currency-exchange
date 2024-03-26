let amountElement = document.querySelector(".js-amount");
let formElement = document.querySelector(".js-form");
let currencyElement = document.querySelector(".js-currency");
let resultElement = document.querySelector(".js-result");

console.log(amountElement.value);

formElement.addEventListener("submit", (event) => {
  event.preventDefault();
  console.log("Formularz został wysłany");

  let amount = amountElement.value;
  let eur = amount * 0.2604;
  let usd = amount * 0.2352;
  let cad = amount * 0.1782;

  switch (currencyElement.value) {
    case "EUR":
      resultElement.innerText = `Wynik: ${eur.toFixed(2)} €`;
      break;
    case "USD":
      resultElement.innerText = `Wynik: ${usd.toFixed(2)} $`;
      break;
    case "CAD":
      resultElement.innerText = `Wynik: ${cad.toFixed(2)} C$`;
      break;
  }
});
