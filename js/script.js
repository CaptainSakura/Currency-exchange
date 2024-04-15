{
  const welcome = () => {
    console.log("Welcome on my page! ;)");
  };

  const form = () => {
    const formElement = document.querySelector(".js-form");
    const amountElement = document.querySelector(".js-amount");
    const currencyElement = document.querySelector(".js-currency");
    const resultElement = document.querySelector(".js-result");

    formElement.addEventListener("submit", (event) => {
      event.preventDefault();

      console.log("Formularz został wysłany");

      const amount = amountElement.value;
      const eur = amount * 0.2604;
      const usd = amount * 0.2352;
      const cad = amount * 0.1782;

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

      console.log(amountElement.value);
    });
  };

  welcome();
  form();
}
