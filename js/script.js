{
  const calculaterResult = (amount, currency) => {
    const rateEUR = 4.4357;
    const rateUSD = 4.1591;
    const rateCAD = 3.0297;

    switch (currency) {
      case "EUR":
        return amount / rateEUR;
      case "USD":
        return amount / rateUSD;
      case "CAD":
        return amount / rateCAD;
    }
  };

  const updateResultText = (amount, result, currency) => {
    const resultElement = document.querySelector(".js-result");
    resultElement.innerHTML = `Wynik: = <strong>${result.toFixed(
      2
    )} ${currency} </strong>`;
  };

  const onFormSubmit = (event) => {
    event.preventDefault();

    const amountElement = document.querySelector(".js-amount");
    const currencyElement = document.querySelector(".js-currency");

    const amount = +amountElement.value;
    const currency = currencyElement.value;

    const result = calculaterResult(amount, currency);
    updateResultText(amount, result, currency);
  };

  const init = () => {
    const formElement = document.querySelector(".js-form");
    formElement.addEventListener("submit", onFormSubmit);
  };
  init();
}
