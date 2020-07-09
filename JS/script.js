{
    const topValue = document.querySelector(".js-price1");
    const bottomValue = (document.querySelector(".js-price2"));
    const currencyEuro = ((Math.random() / 5) + 4.3).toFixed(4);
    const currencyPLN = (1 / currencyEuro).toFixed(4);
    const currencyTopSign = document.querySelector(".js-currencyTop");
    
    const disablingInput = () => {
        bottomValue.setAttribute("disabled", "")
    }

    const countCurrency = (currencyEuro, currencyPLN) => {
        if (currencyTopSign.innerText === "EUR") {
            return +topValue.value * currencyEuro;
        } else {
            return +topValue.value * currencyPLN;
        }
    }
    const displayCurrency = () => {
        let currencyResult = countCurrency(currencyEuro, currencyPLN);
        bottomValue.value = currencyResult.toFixed(2);
    }

    const toggleCurrencies = () => {
        const currencyBottomSign = document.querySelector(".js-currencyBottom");

        if (currencyTopSign.innerText === "EUR") {
            currencyTopSign.innerText = "PLN";
        } else {
            currencyTopSign.innerText = "EUR";
        };
        if (currencyBottomSign.innerText === "PLN") {
            currencyBottomSign.innerText = "EUR";
        } else {
            currencyBottomSign.innerText = "PLN";
        };
       
    }
    const clearInput = () => {
        topValue.value = "";
        bottomValue.value = "";
    }

    const init = () => {
        const formElement = document.querySelector(".js-form");
        const currencyTop = document.querySelector(".js-currency1");
        const currencyBottom = document.querySelector(".js-currency2");
        const changeCurrencyButton = document.querySelector(".js-changeIcon");

        currencyTop.innerHTML = currencyEuro;
        currencyBottom.innerHTML = currencyPLN;

        topValue.addEventListener("input", disablingInput);
        formElement.addEventListener("submit", (e) => {
            e.preventDefault();
            displayCurrency();
        });
        changeCurrencyButton.addEventListener("click", () => {
            toggleCurrencies();
            clearInput();
        });
    }
    init()

}