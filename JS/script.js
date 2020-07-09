{
    const topValue = document.querySelector(".js-price1");
    const bottomValue = (document.querySelector(".js-price2"));
    const currencyTopSign = document.querySelector(".js-currencyTop");


    const setCurrencyEuro = () => {
        return ((Math.random() / 5) + 4.3).toFixed(4);
    }
    const setCurrencyPLN = (currencyEuro) => {
        return (1 / currencyEuro).toFixed(4);
    }

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
    const displayCurrency = (currencyEuro, currencyPLN) => {

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

    const displayCurrencyValues = (euro, pln) => {
        const currencyTop = document.querySelector(".js-currency1");
        const currencyBottom = document.querySelector(".js-currency2");
        currencyTop.innerHTML = euro;
        currencyBottom.innerHTML = pln;
    }

    const init = () => {
        const formElement = document.querySelector(".js-form");
        const changeCurrencyButton = document.querySelector(".js-changeIcon");
        const currencyEuro = setCurrencyEuro();
        const currencyPLN = setCurrencyPLN(currencyEuro);


        displayCurrencyValues(currencyEuro, currencyPLN);
        topValue.addEventListener("input", disablingInput);
        formElement.addEventListener("submit", (e) => {
            e.preventDefault();
            displayCurrency(currencyEuro, currencyPLN);
        });
        changeCurrencyButton.addEventListener("click", () => {
            toggleCurrencies();
            clearInput();
        });
    }
    init()

}